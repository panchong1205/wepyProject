'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;
/* eslint-disable indent,indent */

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = (_temp2 = _class = function (_wepy$component) {
    _inherits(List, _wepy$component);

    function List() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, List);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(List, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return List;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.data = {
        list: [{
            id: '0',
            title: 'loading'
        }]
    };
    this.events = {
        'index-broadcast': function indexBroadcast() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
        }
    };
    this.methods = {
        tap: function tap() {
            // this.num = this.num + 1
            console.log(this.$name + ' tap');
        },
        add: function add() {
            var len = this.list.length;
            this.list.push({ id: len + 1, title: 'title_' + len });
        }
    };
}, _temp2);
exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbXBvbmVudCIsImRhdGEiLCJsaXN0IiwiaWQiLCJ0aXRsZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwidGFwIiwiYWRkIiwibGVuIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNJOztBQUVBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBNEJSLENBQ1I7Ozs7RUE3QjZCLGVBQUtDLFM7OztTQUNuQ0MsSSxHQUFPO0FBQ0hDLGNBQU0sQ0FDRjtBQUNJQyxnQkFBSSxHQURSO0FBRUlDLG1CQUFPO0FBRlgsU0FERTtBQURILEs7U0FTUEMsTSxHQUFTO0FBQ0wsMkJBQW1CLDBCQUFhO0FBQUE7O0FBQzVCLGdCQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBZSxPQUFLQyxLQUFwQixpQkFBcUNKLE9BQU9LLElBQTVDLGNBQXlETCxPQUFPTSxNQUFQLENBQWNELElBQXZFO0FBQ0g7QUFKSSxLO1NBT1RFLE8sR0FBVTtBQUNOQyxXQURNLGlCQUNDO0FBQ0g7QUFDQU4sb0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsTUFBekI7QUFDSCxTQUpLO0FBS05LLFdBTE0saUJBS0M7QUFDSCxnQkFBSUMsTUFBTSxLQUFLZCxJQUFMLENBQVVLLE1BQXBCO0FBQ0EsaUJBQUtMLElBQUwsQ0FBVWUsSUFBVixDQUFlLEVBQUNkLElBQUlhLE1BQU0sQ0FBWCxFQUFjWixPQUFPLFdBQVdZLEdBQWhDLEVBQWY7QUFDSDtBQVJLLEs7O2tCQWpCT2pCLEkiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC8qIGVzbGludC1kaXNhYmxlIGluZGVudCxpbmRlbnQgKi9cblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnbG9hZGluZydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UubmFtZX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0YXAgKCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGQgKCkge1xuICAgICAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtpZDogbGVuICsgMSwgdGl0bGU6ICd0aXRsZV8nICsgbGVufSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==