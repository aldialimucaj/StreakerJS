#!/usr/bin/env node
"use strict";

import program from 'commander';
import chalk from 'chalk';

import Gitter from './gitter';
const pcage = require('../package.json');

const gitter = new Gitter();
const error = chalk.bold.red;
const success = chalk.bold.green;

program
    .version(pcage.version);

/* ========================================================================== */    
program
   .command('commit')
   .description('Commit changes')
   .action(() => {
     console.log(success('All changes were commited'));
   });

/* ========================================================================== */
program
   .command('init')
   .description('Initialize a git repository')
   .action(() => {
       gitter.initRepo();
     
   });

/* Parse process arguments */
program.parse(process.argv);

/* Print Helo if no arguments. Maybe later show interactive menu. */
if (!program.args.length) program.help();
