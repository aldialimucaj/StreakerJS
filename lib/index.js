#!/usr/bin/env node

"use strict";

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _nodegit = require('nodegit');

var _nodegit2 = _interopRequireDefault(_nodegit);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gitter = require('./gitter');

var _gitter2 = _interopRequireDefault(_gitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Repository = _nodegit2.default.Repository;

var pcage = require('../package.json');

var gitter = new _gitter2.default();
var error = _chalk2.default.bold.red;
var success = _chalk2.default.bold.green;

_commander2.default.version(pcage.version);

/* ========================================================================== */
_commander2.default.command('commit').description('Commit changes').action(function () {
    Repository.open(_path2.default.resolve('.')).then(function (repository) {
        gitter.repo = repository;
        gitter.commit();
    });
});

/* ========================================================================== */
_commander2.default.command('init [repo]').description('Initialize a git repository').action(function (repo) {
    gitter.initRepo(repo); // find out what to do with results
});

/* Parse process arguments */
_commander2.default.parse(process.argv);

/* Print Helo if no arguments. Maybe later show interactive menu. */
if (!_commander2.default.args.length) _commander2.default.help();
//# sourceMappingURL=index.js.map
