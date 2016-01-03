'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _nodegit = require('nodegit');

var _nodegit2 = _interopRequireDefault(_nodegit);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Repository = _nodegit2.default.Repository;
var Commit = _nodegit2.default.Commit;
var Signature = _nodegit2.default.Signature;
var Reference = _nodegit2.default.Reference;

var error = _chalk2.default.bold.red;
var success = _chalk2.default.bold.green;

var WORKING_FILE = 'striker.txt';

var Gitter = (function () {
    /**
     * @constructor
     * @param {Repository} repo - git repository
     */

    function Gitter(repo) {
        _classCallCheck(this, Gitter);

        if (repo) {
            this._repo = repo;
        }
    }

    /**
     * Initialize git repository
     * 
     * @param {string} path - path to create new git repo
     * @returns {promise}
     */

    _createClass(Gitter, [{
        key: 'initRepo',
        value: function initRepo() {
            var path = arguments.length <= 0 || arguments[0] === undefined ? "." : arguments[0];

            var self = this;
            return new _promise2.default(function (fulfill, reject) {
                var absPath = _path2.default.resolve(path);
                if (_fs2.default.exists(absPath + "/.git")) {
                    var err = "Repository already Exists";
                    console.log(error(err));
                    reject(err);
                } else {
                    Repository.init(absPath, 0 /* isBare */).then(function (repository) {
                        console.log(success('Repository was created successfully'));
                        fulfill(repository);
                    }, function (err) {
                        console.log(error(err));
                        reject(err);
                    });
                }
            });
        }

        /**
         * Commit changes to repository
         * 
         * @param {Date} date - date to commit
         */

    }, {
        key: 'commit',
        value: function commit() {
            var date = arguments.length <= 0 || arguments[0] === undefined ? (0, _moment2.default)() : arguments[0];

            var repo = this._repo;
            var name = 'Aldi Alimucaj';
            var email = 'aldi.alimucaj@gmail.com';
            var time = date.unix();
            var offset = 0;
            var msg = 'Striker strikes again!';
            var filesToAdd = [WORKING_FILE];
            return new _promise2.default(function (fulfill, reject) {
                var signature = Signature.create(name, email, time, offset);
                repo.createCommitOnHead(filesToAdd, signature, signature, msg).then(function (oid) {
                    console.log(success('Changes were commited successfully'));
                    fulfill(oid);
                }, function (err) {
                    console.log(error(err));
                    reject(err);
                });
            });
        }

        /* ========================================================================== */

    }, {
        key: 'repo',
        get: function get() {
            return this._repo;
        },
        set: function set(repository) {
            this._repo = repository;
            console.log("New Repo set to " + repository);
        }
    }]);

    return Gitter;
})();

exports.default = Gitter;
//# sourceMappingURL=gitter.js.map
