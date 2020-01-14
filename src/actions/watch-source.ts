/* eslint-disable no-console */
import * as chokidar from 'chokidar';
import * as fs       from 'fs';
import {LEVEL, log}  from '../tools/log';

export const watchSource = (path: string, cb: (source: string) => void): void => {

    // Watch and recompile declarations
    chokidar.watch(path).on('change', (file: string) => {
        cb(fs.readFileSync(file, 'utf8'));
    }).on('add', (file: string) => {
        cb(fs.readFileSync(file, 'utf8'));
    }).on('unlink', () => {
        log(`Source file "${path}" not longer available...`, LEVEL.ERROR);
        process.exit(0);
    });
}
