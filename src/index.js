#!/usr/bin/env node
"use strict";

import program from 'commander';
import chalk from 'chalk';
import Promise from 'promise';
import nodegit from 'nodegit';
import nodepath from 'path';

const Repository = nodegit.Repository;

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
        Repository.open(nodepath.resolve('.')).then(function (repository) {
            gitter.repo = repository;
            gitter.commit();
        });
    });

/* ========================================================================== */
program
    .command('init [repo]')
    .description('Initialize a git repository')
    .action((repo) => {
        gitter.initRepo(repo); // find out what to do with results
    });

/* Parse process arguments */
program.parse(process.argv);

/* Print Helo if no arguments. Maybe later show interactive menu. */
if (!program.args.length) program.help();
