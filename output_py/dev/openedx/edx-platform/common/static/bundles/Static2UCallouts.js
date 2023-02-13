(function(e, a) { for(var i in a) e[i] = a[i]; }(window, webpackJsonp([62],{

/***/ "./lms/static/js/learner_dashboard/Static2UCallouts.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Static2UCallouts", function() { return Static2UCallouts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global gettext */


var Static2UCallouts = /*#__PURE__*/function (_React$Component) {
  _inherits(Static2UCallouts, _React$Component);

  var _super = _createSuper(Static2UCallouts);

  function Static2UCallouts(props) {
    var _this;

    _classCallCheck(this, Static2UCallouts);

    _this = _super.call(this, props);
    _this.state = {
      show2uLobs: false
    };
    return _this;
  }

  _createClass(Static2UCallouts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var optimizely = window["optimizely"] || [];
      optimizely.push({
        "type": "user",
        "attributes": {
          "isEnterpriseUser": this.props.isEnterpriseUser.toString()
        }
      });
      optimizely.push({
        type: "page",
        pageName: "van_1097_merchandise_2u_lobs_on_dashboard"
      });
      var experimentId = '22164741776';
      this.timer = setTimeout(function () {
        var selectedVariant = optimizely.get("state").getVariationMap()[experimentId];

        if ((selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.name) === 'dashboard_with_2u_lobs') {
          _this2.setState({
            show2uLobs: true
          });
        }
      }, 500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.show2uLobs && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-main"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-header"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-heading"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "static-callouts-heading-black"
      }, gettext('More opportunities for you'), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "static-callouts-heading-red"
      }, gettext(' to learn')))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "static-callouts-subheading"
      }, gettext('We\'ve added 500+ learning opportunities to create one of the world\'s most ' + 'comprehensive free-to-degree online learning platforms.'))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-cards"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "".concat(this.props.executiveEducationUrl, "?vanguards_click=execed"),
        target: "_blank",
        rel: "noopener noreferrer",
        className: this.props.countryCode !== 'US' ? 'static-callouts-card static-callouts-card-no-bootcamp' : 'static-callouts-card'
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-badge"
      }, "New"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "static-callouts-card-heading"
      }, "Executive Education"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-description"
      }, "Short courses to develop leadership skills", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        width: "30",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        focusable: "false",
        "aria-hidden": "true"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z",
        fill: "currentColor"
      })))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.countryCode !== 'US' ? 'static-callouts-cards-divider static-callouts-cards-divider-no-bootcamp' : 'static-callouts-cards-divider'
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        viewBox: "2 0 25 95"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M 0 120 l 30 -150",
        stroke: "#EAE6E5",
        strokeWidth: "4",
        fill: "none"
      }))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "".concat(this.props.mastersDegreeUrl, "?vanguards_click=masters"),
        target: "_blank",
        rel: "noopener noreferrer",
        className: this.props.countryCode !== 'US' ? 'static-callouts-card static-callouts-card-no-bootcamp' : 'static-callouts-card'
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-badge"
      }, "New"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "static-callouts-card-heading"
      }, "Master\u2019s Degrees"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-description"
      }, "Online degree programs from top universities", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        width: "30",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        focusable: "false",
        "aria-hidden": "true"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z",
        fill: "currentColor"
      })))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.countryCode !== 'US' ? 'static-callouts-cards-divider static-callouts-cards-divider-no-bootcamp' : 'static-callouts-cards-divider static-callouts-cards-break'
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        viewBox: "2 0 25 95"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M 0 120 l 30 -150",
        stroke: "#EAE6E5",
        strokeWidth: "4",
        fill: "none"
      }))), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "".concat(this.props.bachelorsDegreeUrl, "?vanguards_click=bachelors"),
        target: "_blank",
        rel: "noopener noreferrer",
        className: this.props.countryCode !== 'US' ? 'static-callouts-card static-callouts-card-no-bootcamp' : 'static-callouts-card'
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-badge"
      }, "New"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "static-callouts-card-heading"
      }, "Bachelor\u2019s Degrees"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-description"
      }, "Begin or complete a degree; fully online", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        width: "30",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        focusable: "false",
        "aria-hidden": "true"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z",
        fill: "currentColor"
      })))), this.props.countryCode === 'US' && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-cards-divider"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        viewBox: "2 0 25 95"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M 0 120 l 30 -150",
        stroke: "#EAE6E5",
        strokeWidth: "4",
        fill: "none"
      }))), this.props.countryCode === 'US' && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "".concat(this.props.bootCampsUrl, "?vanguards_click=bootcamps"),
        target: "_blank",
        className: "static-callouts-card"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-badge"
      }, "New"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "static-callouts-card-heading"
      }, "Boot Camps"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "static-callouts-card-description"
      }, "Intensive, hands-on, project-based training", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        width: "30",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        focusable: "false",
        "aria-hidden": "true"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z",
        fill: "currentColor"
      }))))));
    }
  }]);

  return Static2UCallouts;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

},["./lms/static/js/learner_dashboard/Static2UCallouts.jsx"])));
//# sourceMappingURL=Static2UCallouts.js.map