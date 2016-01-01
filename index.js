#!/usr/bin/env node
"use strict";

const program = require('commander');
const chalk = require('chalk');

const gitter = require('./lib/gitter').sum;

const error = chalk.bold.red;
const success = chalk.bold.green;

program
    .version('0.0.1');
    

program
   .command('commit')
   .description('Commit changes')
   .action(function() {
     console.log(success('All changes were commited'));
   });

program.parse(process.argv);

if (!program.args.length) program.help();