#!/usr/bin/env node

"use strict";

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _gitter = require('./gitter');

var _gitter2 = _interopRequireDefault(_gitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gitter = new _gitter2.default();
var error = _chalk2.default.bold.red;
var success = _chalk2.default.bold.green;

_commander2.default.version('0.0.1');

/* ========================================================================== */
_commander2.default.command('commit').description('Commit changes').action(function () {
   console.log(success('All changes were commited'));
});

/* ========================================================================== */
_commander2.default.command('init').description('Initialize a git repository').action(function () {
   gitter.initRepo();
});

/* Parse process arguments */
_commander2.default.parse(process.argv);

/* Print Helo if no arguments. Maybe later show interactive menu. */
if (!_commander2.default.args.length) _commander2.default.help();
//# sourceMappingURL=index.js.map
