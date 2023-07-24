#!/usr/bin/env node

import * as mod1 from './modules/cmd-conf-mod.js';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const yargs = require('yargs');

yargs
    .command(mod1)
    .demandCommand()
    .help();

yargs
    .parse()
    .then(() => {
        process.exit(0)
    })

