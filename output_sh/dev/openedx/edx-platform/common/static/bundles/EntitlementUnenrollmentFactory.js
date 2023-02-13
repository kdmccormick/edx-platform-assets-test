(function(e, a) { for(var i in a) e[i] = a[i]; }(window, webpackJsonp([54],{

/***/ "./lms/static/js/learner_dashboard/entitlement_unenrollment_factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitlementUnenrollmentFactory", function() { return EntitlementUnenrollmentFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_entitlement_unenrollment_view__ = __webpack_require__("./lms/static/js/learner_dashboard/views/entitlement_unenrollment_view.js");


function EntitlementUnenrollmentFactory(options) {
  return new __WEBPACK_IMPORTED_MODULE_0__views_entitlement_unenrollment_view__["a" /* default */](options);
}

 // eslint-disable-line import/prefer-default-export

/***/ }),

/***/ "./lms/static/js/learner_dashboard/views/entitlement_unenrollment_view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_edx_ui_toolkit_js_utils_html_utils__ = __webpack_require__("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_edx_ui_toolkit_js_utils_html_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_edx_ui_toolkit_js_utils_html_utils__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/* globals gettext */



var EntitlementUnenrollmentView = /*#__PURE__*/function (_Backbone$View) {
  _inherits(EntitlementUnenrollmentView, _Backbone$View);

  var _super = _createSuper(EntitlementUnenrollmentView);

  function EntitlementUnenrollmentView(options) {
    _classCallCheck(this, EntitlementUnenrollmentView);

    var defaults = {
      el: '.js-entitlement-unenrollment-modal'
    };
    return _super.call(this, _extends({}, defaults, options));
  }

  _createClass(EntitlementUnenrollmentView, [{
    key: "initialize",
    value: function initialize(options) {
      var view = this;
      this.closeButtonSelector = '.js-entitlement-unenrollment-modal .js-entitlement-unenrollment-modal-close-btn';
      this.headerTextSelector = '.js-entitlement-unenrollment-modal .js-entitlement-unenrollment-modal-header-text';
      this.errorTextSelector = '.js-entitlement-unenrollment-modal .js-entitlement-unenrollment-modal-error-text';
      this.submitButtonSelector = '.js-entitlement-unenrollment-modal .js-entitlement-unenrollment-modal-submit';
      this.triggerSelector = '.js-entitlement-action-unenroll';
      this.mainPageSelector = '#dashboard-main';
      this.genericErrorMsg = gettext('Your unenrollment request could not be processed. Please try again later.');
      this.modalId = "#".concat(this.$el.attr('id'));
      this.dashboardPath = options.dashboardPath;
      this.signInPath = options.signInPath;
      this.browseCourses = options.browseCourses;
      this.isEdx = options.isEdx;
      this.$submitButton = $(this.submitButtonSelector);
      this.$closeButton = $(this.closeButtonSelector);
      this.$headerText = $(this.headerTextSelector);
      this.$errorText = $(this.errorTextSelector);
      this.$submitButton.on('click', this.handleSubmit.bind(this));
      $(this.triggerSelector).each(function setUpTrigger() {
        var $trigger = $(this);
        $trigger.on('click', view.handleTrigger.bind(view)); // From accessibility_tools.js

        if (window.accessible_modal) {
          window.accessible_modal("#".concat($trigger.attr('id')), view.closeButtonSelector, "#".concat(view.$el.attr('id')), view.mainPageSelector);
        }
      });
    }
  }, {
    key: "handleTrigger",
    value: function handleTrigger(event) {
      var $trigger = $(event.target);
      var courseName = $trigger.data('courseName');
      var courseNumber = $trigger.data('courseNumber');
      var apiEndpoint = $trigger.data('entitlementApiEndpoint');
      this.$previouslyFocusedElement = $trigger;
      this.resetModal();
      this.setHeaderText(courseName, courseNumber);
      this.setSubmitData(apiEndpoint);
      this.$el.css('position', 'fixed');
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var apiEndpoint = this.$submitButton.data('entitlementApiEndpoint');

      if (apiEndpoint === undefined) {
        this.setError(this.genericErrorMsg);
        return;
      }

      this.$submitButton.prop('disabled', true);
      $.ajax({
        url: apiEndpoint,
        method: 'DELETE',
        complete: this.onComplete.bind(this)
      });
    }
  }, {
    key: "resetModal",
    value: function resetModal() {
      this.$submitButton.removeData();
      this.$submitButton.prop('disabled', false);
      this.$headerText.empty();
      this.$errorText.removeClass('entitlement-unenrollment-modal-error-text-visible');
      this.$errorText.empty();
    }
  }, {
    key: "setError",
    value: function setError(message) {
      this.$submitButton.prop('disabled', true);
      this.$errorText.empty();
      __WEBPACK_IMPORTED_MODULE_1_edx_ui_toolkit_js_utils_html_utils___default.a.setHtml(this.$errorText, message);
      this.$errorText.addClass('entitlement-unenrollment-modal-error-text-visible');
    }
  }, {
    key: "setHeaderText",
    value: function setHeaderText(courseName, courseNumber) {
      this.$headerText.empty();
      __WEBPACK_IMPORTED_MODULE_1_edx_ui_toolkit_js_utils_html_utils___default.a.setHtml(this.$headerText, __WEBPACK_IMPORTED_MODULE_1_edx_ui_toolkit_js_utils_html_utils___default.a.interpolateHtml(gettext('Are you sure you want to unenroll from {courseName} ({courseNumber})? You will be refunded the amount you paid.'), // eslint-disable-line max-len
      {
        courseName: courseName,
        courseNumber: courseNumber
      }));
    }
  }, {
    key: "setSubmitData",
    value: function setSubmitData(apiEndpoint) {
      this.$submitButton.removeData();
      this.$submitButton.data('entitlementApiEndpoint', apiEndpoint);
    }
  }, {
    key: "switchToSlideOne",
    value: function switchToSlideOne() {
      this.$('.entitlement-unenrollment-modal-inner-wrapper header').addClass('hidden');
      this.$('.entitlement-unenrollment-modal-submit-wrapper').addClass('hidden');
      this.$('.slide1').removeClass('hidden');
      this.$('.entitlement-unenrollment-modal-inner-wrapper').prevObject.addClass('entitlement-unenrollment-modal-long-survey'); // From accessibility_tools.js

      window.trapFocusForAccessibleModal(this.$previouslyFocusedElement, window.focusableElementsString, this.closeButtonSelector, this.modalId, this.mainPageSelector);
    }
  }, {
    key: "switchToSlideTwo",
    value: function switchToSlideTwo() {
      var price = this.$(".reasons_survey input[name='priceEntitlementUnenrollment']:checked").val();
      var dissastisfied = this.$(".reasons_survey input[name='dissastisfiedEntitlementUnenrollment']:checked").val();
      var difficult = this.$(".reasons_survey input[name='difficultEntitlementUnenrollment']:checked").val();
      var time = this.$(".reasons_survey input[name='timeEntitlementUnenrollment']:checked").val();
      var unavailable = this.$(".reasons_survey input[name='unavailableEntitlementUnenrollment']:checked").val();
      var email = this.$(".reasons_survey input[name='emailEntitlementUnenrollment']:checked").val();

      if (price || dissastisfied || difficult || time || unavailable || email) {
        var results = {
          price: price,
          dissastisfied: dissastisfied,
          difficult: difficult,
          time: time,
          unavailable: unavailable,
          email: email
        };
        window.analytics.track('entitlement_unenrollment_reason.selected', {
          category: 'user-engagement',
          label: JSON.stringify(results),
          displayName: 'v1'
        });
      }

      this.$('.slide1').addClass('hidden');
      this.$('.slide2').removeClass('hidden');
      this.$('.entitlement-unenrollment-modal-inner-wrapper').prevObject.removeClass('entitlement-unenrollment-modal-long-survey'); // From accessibility_tools.js

      window.trapFocusForAccessibleModal(this.$previouslyFocusedElement, window.focusableElementsString, this.closeButtonSelector, this.modalId, this.mainPageSelector);
    }
  }, {
    key: "onComplete",
    value: function onComplete(xhr) {
      var status = xhr.status;
      var message = xhr.responseJSON && xhr.responseJSON.detail;

      if (status === 204) {
        if (this.isEdx) {
          this.switchToSlideOne();
          this.$('.reasons_survey:first .submit-reasons').click(this.switchToSlideTwo.bind(this));
        } else {
          EntitlementUnenrollmentView.redirectTo(this.dashboardPath);
        }
      } else if (status === 401 && message === 'Authentication credentials were not provided.') {
        EntitlementUnenrollmentView.redirectTo("".concat(this.signInPath, "?next=").concat(encodeURIComponent(this.dashboardPath)));
      } else {
        this.setError(this.genericErrorMsg);
      }
    }
  }], [{
    key: "redirectTo",
    value: function redirectTo(path) {
      window.location.href = path;
    }
  }]);

  return EntitlementUnenrollmentView;
}(__WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View);

/* harmony default export */ __webpack_exports__["a"] = (EntitlementUnenrollmentView);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

},["./lms/static/js/learner_dashboard/entitlement_unenrollment_factory.js"])));
//# sourceMappingURL=EntitlementUnenrollmentFactory.js.map