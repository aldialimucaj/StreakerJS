'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var error = _chalk2.default.bold.red;
var success = _chalk2.default.bold.green;

var Gitter = (function () {

    /**
     * @constructor
     * @param {string} repo - git repository
     */

    function Gitter(repo) {
        _classCallCheck(this, Gitter);
    }

    /**
     * Initialize git repository
     */

    _createClass(Gitter, [{
        key: 'initRepo',
        value: function initRepo() {
            var path = arguments.length <= 0 || arguments[0] === undefined ? "." : arguments[0];

            console.log(success('Repository was created successfuly'));

            return true;
        }
    }]);

    return Gitter;
})();

exports.default = Gitter;
//# sourceMappingURL=gitter.js.map
