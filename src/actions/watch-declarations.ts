/* eslint-disable no-console */
import {compile, compileChunk} from '@bavary/core';
import {Declaration}           from '@bavary/core/lib/types/ast/types';
import {Parser}                from '@bavary/core/lib/types/compiler/types';
import {functions}             from '@bavary/lib';
import chokidar                from 'chokidar';
import * as fs                 from 'fs';
import {setTimeout}            from 'timers';
import {LEVEL, log}            from '../tools/log';
import {createPathString}      from '../tools/prettify-file-path';
import {removeFromArray}       from '../tools/remove-from-array';

export const watchDeclarations =  (glob: string, cb: (parser: Parser) => void): void => {
    const source: Map<string, Array<Declaration>> = new Map();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const erroredFiles: Array<string> = [];
    let compilationTimeout: null | any = null;
    let parser = null;

    const compileFiles = (): void => {

        // Merge sources
        const fullSource = [];
        for (const decs of source.values()) {
            fullSource.push(...decs);
        }

        try {
            log('Compile...', LEVEL.INFO);
            parser = compile(fullSource, {functions});
        } catch (e) {
            log('Failed to compile sources', LEVEL.ERROR);
            console.log(e.message);
            return;
        }

        // Call callback with parser
        cb(parser);
    };

    const updateSourceFile = (file: string): void => {
        const defs = fs.readFileSync(file, 'utf8');

        try {
            source.set(file, compileChunk(defs));

            // File contains no more errors
            if (removeFromArray(erroredFiles, file)) {
                log(`Fixed ${createPathString(file)}`, LEVEL.OK);
            }
        } catch (e) {
            log(`Failed to compile ${createPathString(file)}`, LEVEL.ERROR);
            console.log(e.message);

            log('Waiting for changes...', LEVEL.WARN);
            if (!erroredFiles.includes(file)) {
                erroredFiles.push(file);
            }
        }

        // Compile only if everything is fine
        if (!erroredFiles.length) {

            // Debounce compilation calls
            if (compilationTimeout) {
                clearTimeout(compilationTimeout);
            }

            compilationTimeout = setTimeout(compileFiles, 500);
        }
    };

    // Watch and recompile declarations
    chokidar.watch(glob, {
        interval: 500,
        binaryInterval: 500
    }).on('change', (file: string) => {
        log(`Changed: ${createPathString(file)}`, LEVEL.INFO);
        updateSourceFile(file);
    }).on('add', (file: string) => {
        log(`Added: ${createPathString(file)}`, LEVEL.INFO);
        updateSourceFile(file);
    }).on('unlink', (file: string) => {
        log(`Removed: ${createPathString(file)}`, LEVEL.WARN);

        // Remove file from errored-list and delete ast-tree from it
        removeFromArray(erroredFiles, file);
        source.delete(file);
        compileFiles();
    });
}
