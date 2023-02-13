(function(define) {
    'use strict';
    RequireJS.define('js/student_account/models/LoginModel',[
        'jquery',
        'backbone',
        'jquery.url'
    ], function($, Backbone) {
        return Backbone.Model.extend({
            defaults: {
                email: '',
                password: ''
            },

            ajaxType: '',
            urlRoot: '',

            initialize: function(attributes, options) {
                this.ajaxType = options.method;
                this.urlRoot = options.url;
            },

            sync: function(method, model) {
                var headers = {'X-CSRFToken': $.cookie('csrftoken')},
                    data = {},
                    analytics,
                    courseId = $.url('?course_id');

                // If there is a course ID in the query string param,
                // send that to the server as well so it can be included
                // in analytics events.
                if (courseId) {
                    analytics = JSON.stringify({
                        enroll_course_id: decodeURIComponent(courseId)
                    });
                }

                // Include all form fields and analytics info in the data sent to the server
                $.extend(data, model.attributes, {analytics: analytics});

                $.ajax({
                    url: model.urlRoot,
                    type: model.ajaxType,
                    data: data,
                    headers: headers,
                    success: function() {
                        model.trigger('sync');
                    },
                    error: function(error) {
                        model.trigger('error', error);
                    }
                });
            }
        });
    });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/models/PasswordResetModel',['jquery', 'backbone'],
        function($, Backbone) {
            return Backbone.Model.extend({
                defaults: {
                    email: ''
                },
                ajaxType: '',
                urlRoot: '',

                initialize: function(attributes, options) {
                    this.ajaxType = options.method;
                    this.urlRoot = options.url;
                },

                sync: function(method, model) {
                    var headers = {
                        'X-CSRFToken': $.cookie('csrftoken')
                    };

                // Only expects an email address.
                    $.ajax({
                        url: model.urlRoot,
                        type: model.ajaxType,
                        data: model.attributes,
                        headers: headers,
                        success: function() {
                            model.trigger('sync');
                        },
                        error: function(error) {
                            model.trigger('error', error);
                        }
                    });
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/models/RegisterModel',['jquery', 'backbone', 'jquery.url'],
        function($, Backbone) {
            return Backbone.Model.extend({
                defaults: {
                    email: '',
                    name: '',
                    username: '',
                    password: '',
                    level_of_education: '',
                    gender: '',
                    year_of_birth: '',
                    mailing_address: '',
                    goals: ''
                },
                ajaxType: '',
                urlRoot: '',

                initialize: function(attributes, options) {
                    this.ajaxType = options.method;
                    this.urlRoot = options.url;
                    this.nextUrl = options.nextUrl;
                },

                sync: function(method, model) {
                    var headers = {'X-CSRFToken': $.cookie('csrftoken')},
                        data = {next: model.nextUrl},
                        courseId = $.url('?course_id');

                // If there is a course ID in the query string param,
                // send that to the server as well so it can be included
                // in analytics events.
                    if (courseId) {
                        data.course_id = decodeURIComponent(courseId);
                    }

                // Include all form fields and analytics info in the data sent to the server
                    $.extend(data, model.attributes);

                    $.ajax({
                        url: model.urlRoot,
                        type: model.ajaxType,
                        data: data,
                        headers: headers,
                        success: function() {
                            model.trigger('sync');
                        },
                        error: function(error) {
                            model.trigger('error', error);
                        }
                    });
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/models/AccountRecoveryModel',['jquery', 'backbone'],
        function($, Backbone) {
            return Backbone.Model.extend({
                defaults: {
                    email: ''
                },
                ajaxType: '',
                urlRoot: '',

                initialize: function(attributes, options) {
                    this.ajaxType = options.method;
                    this.urlRoot = options.url;
                },

                sync: function(method, model) {
                    var headers = {
                        'X-CSRFToken': $.cookie('csrftoken')
                    };

                // Only expects an email address.
                    $.ajax({
                        url: model.urlRoot,
                        type: model.ajaxType,
                        data: model.attributes,
                        headers: headers,
                        success: function() {
                            model.trigger('sync');
                        },
                        error: function(error) {
                            model.trigger('error', error);
                        }
                    });
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('common/js/utils/edx.utils.validate',[
        'jquery',
        'underscore',
        'underscore.string',
        'gettext'
    ],
        function($, _, _s, gettext) {
            var utils;

        /* Mix non-conflicting functions from underscore.string
         * (all but include, contains, and reverse) into the
         * Underscore namespace. In practice, this mixin is done
         * by the access view, but doing it here helps keep the
         * utility self-contained.
         */
            _.mixin(_s.exports());

            utils = (function() {
                var _fn = {
                    validate: {

                        template: _.template('<li <%- suppressAttr %>><%- content %></li>'),

                        msg: {
                            email: gettext("The email address you've provided isn't formatted correctly."),
                            min: gettext('%(field)s must have at least %(count)d characters.'),
                            max: gettext('%(field)s can only contain up to %(count)d characters.'),
                            required: gettext('Please enter your %(field)s.')
                        },

                        field: function(el) {
                            var $el = $(el),
                                required = true,
                                min = true,
                                max = true,
                                email = true,
                                response = {},
                                isBlank = _fn.validate.isBlank($el);

                            if (_fn.validate.isRequired($el)) {
                                if (isBlank) {
                                    required = false;
                                } else {
                                    min = _fn.validate.str.minlength($el);
                                    max = _fn.validate.str.maxlength($el);
                                    email = _fn.validate.email.valid($el);
                                }
                            } else if (!isBlank) {
                                min = _fn.validate.str.minlength($el);
                                max = _fn.validate.str.maxlength($el);
                                email = _fn.validate.email.valid($el);
                            }

                            response.isValid = required && min && max && email;

                            if (!response.isValid) {
                                _fn.validate.removeDefault($el);

                                response.message = _fn.validate.getMessage($el, {
                                    required: required,
                                    min: min,
                                    max: max,
                                    email: email
                                });
                            }

                            return response;
                        },

                        str: {
                            minlength: function($el) {
                                var min = $el.attr('minlength') || 0;

                                return min <= $el.val().length;
                            },

                            maxlength: function($el) {
                                var max = $el.attr('maxlength') || false;

                                return (!!max) ? max >= $el.val().length : true;
                            }
                        },

                        isRequired: function($el) {
                            return $el.attr('required');
                        },

                        isBlank: function($el) {
                            var type = $el.attr('type'),
                                isBlank;

                            if (type === 'checkbox') {
                                isBlank = !$el.prop('checked');
                            } else if (type === 'select') {
                                isBlank = ($el.data('isdefault') === true);
                            } else {
                                isBlank = !$el.val();
                            }

                            return isBlank;
                        },

                        email: {
                        // This is the same regex used to validate email addresses in Django 1.11
                            regex: new RegExp(
                            [
                                '(^[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+)*',
                                '|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-\\011\\013\\014\\016-\\177])*"', // eslint-disable-line max-len
                                ')@((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+)(?:[A-Z0-9-]{2,63})',
                                '|\\[(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\]$'
                            ].join(''), 'i'
                        ),

                            valid: function($el) {
                                return $el.attr('type') === 'email' ? _fn.validate.email.format($el.val()) : true;
                            },

                            format: function(str) {
                                return _fn.validate.email.regex.test(str);
                            }
                        },

                        getLabel: function(id) {
                        // Extract the field label, remove the asterisk (if it appears) and any extra whitespace
                            return $('label[for=' + id + '] > span.label-text').text().split('*')[0].trim();
                        },

                        getMessage: function($el, tests) {
                            var txt = [],
                                label,
                                context,
                                content,
                                customMsg,
                                liveValidationMsg,
                                suppressAttr;

                            _.each(tests, function(value, key) {
                                if (!value) {
                                    label = _fn.validate.getLabel($el.attr('id'));
                                    customMsg = $el.data('errormsg-' + key) || false;
                                    liveValidationMsg =
                                        $('#' + $el.attr('id') + '-validation-error-msg').text() || false;

                                // If the field has a custom error msg attached, use it
                                    if (customMsg) {
                                        content = customMsg;
                                    } else if (liveValidationMsg) {
                                        content = liveValidationMsg;
                                    } else {
                                        context = {field: label};

                                        if (key === 'min') {
                                            context.count = parseInt($el.attr('minlength'), 10);
                                        } else if (key === 'max') {
                                            context.count = parseInt($el.attr('maxlength'), 10);
                                        }

                                        content = _.sprintf(_fn.validate.msg[key], context);
                                    }

                                    suppressAttr = '';
                                    if (['username', 'email'].indexOf($el.attr('name')) > -1) {
                                        suppressAttr = 'data-hj-suppress';
                                    }

                                    txt.push(_fn.validate.template({
                                        content: content,
                                        suppressAttr: suppressAttr
                                    }));
                                }
                            });

                            return txt.join(' ');
                        },

                    // Removes the default HTML5 validation pop-up
                        removeDefault: function($el) {
                            if ($el.setCustomValidity) {
                                $el.setCustomValidity(' ');
                            }
                        }
                    }
                };

                return {
                    validate: _fn.validate.field
                };
            }());

            return utils;
        });
}).call(this, define || RequireJS.define);

RequireJS.define('text',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});

RequireJS.define('text!templates/student_account/form_errors.underscore',[],function () { return '<div class="<%- jsHook %> status submission-error">\n    <h4 class="message-title"><%- title %></h4>\n    <ul class="message-copy">\n        <%= HtmlUtils.ensureHtml(messagesHtml) %>\n    </ul>\n</div>\n';});

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/views/FormView',[
        'jquery',
        'underscore',
        'backbone',
        'common/js/utils/edx.utils.validate',
        'edx-ui-toolkit/js/utils/html-utils',
        'edx-ui-toolkit/js/utils/string-utils',
        'text!templates/student_account/form_errors.underscore'
    ], function($, _, Backbone, EdxUtilsValidate, HtmlUtils, StringUtils, formErrorsTpl) {
        return Backbone.View.extend({
            tagName: 'form',
            el: '',
            tpl: '',
            fieldTpl: '#form_field-tpl',
            formErrorsTpl: formErrorsTpl,
            formErrorsJsHook: 'js-form-errors',
            defaultFormErrorsTitle: gettext('An error occurred.'),
            events: {},
            errors: [],
            formType: '',
            $form: {},
            fields: [],
            liveValidationFields: [],
            // String to append to required label fields
            requiredStr: '',
            /*
                Translators: This string is appended to optional field labels on the student login, registration, and
                profile forms.
            */
            optionalStr: gettext('(optional)'),
            submitButton: '',
            isEnterpriseEnable: false,

            initialize: function(data) {
                this.model = data.model;
                this.preRender(data);

                this.tpl = $(this.tpl).html();
                this.fieldTpl = $(this.fieldTpl).html();
                this.buildForm(data.fields);

                this.listenTo(this.model, 'error', this.saveError);
            },

            /* Allows extended views to add custom
             * init steps without needing to repeat
             * default init steps
             */
            preRender: function(data) {
                /* Custom code goes here */
                return data;
            },

            render: function(html) {
                var fields = html || '';

                HtmlUtils.setHtml(
                    $(this.el),
                    HtmlUtils.HTML(
                        _.template(this.tpl)({
                            fields: fields,
                            HtmlUtils: HtmlUtils
                        })
                    )
                )
                this.postRender();

                return this;
            },

            postRender: function() {
                var $container = $(this.el);
                this.$form = $container.find('form');
                this.$formFeedback = $container.find('.js-form-feedback');
                this.$submitButton = $container.find(this.submitButton);
            },

            buildForm: function(data) {
                var html = [],
                    i,
                    len = data.length,
                    fieldTpl = this.fieldTpl;

                this.fields = data;

                for (i = 0; i < len; i++) {
                    if (data[i].errorMessages) {
                        data[i].errorMessages = this.escapeStrings(data[i].errorMessages);
                    }

                    html.push(HtmlUtils.template(fieldTpl)($.extend(data[i], {
                        form: this.formType,
                        requiredStr: this.requiredStr,
                        optionalStr: this.optionalStr,
                        supplementalText: data[i].supplementalText || '',
                        supplementalLink: data[i].supplementalLink || '',
                        loginIssueSupportLink: data[i].loginIssueSupportLink || '',
                        isEnterpriseEnable: this.isEnterpriseEnable
                    })));
                }

                this.render(html.join(''));
            },

            /* Helper method to toggle display
             * including accessibility considerations
             */
            element: {
                hide: function($el) {
                    if ($el) {
                        $el.addClass('hidden');
                    }
                },

                scrollTop: function($el) {
                    // Scroll to top of selected element
                    $('html,body').animate({
                        scrollTop: $el.offset().top
                    }, 'slow');
                },

                show: function($el) {
                    if ($el) {
                        $el.removeClass('hidden');
                    }
                }
            },

            escapeStrings: function(obj) {
                _.each(obj, function(val, key) {
                    obj[key] = _.escape(val);
                });

                return obj;
            },

            forgotPassword: function(event) {
                event.preventDefault();

                this.trigger('password-help');
            },

            getFormData: function() {
                var obj = {},
                    $form = this.$form,
                    elements = $form[0].elements,
                    i,
                    $n,
                    tpl,
                    len = elements.length,
                    $el,
                    $label,
                    key = '',
                    errors = [],
                    validation = {},
                    $desc,
                    $validationNode;

                for (i = 0; i < len; i++) {
                    $el = $(elements[i]);
                    $label = $form.find('label[for=' + $el.attr('id') + ']');
                    key = $el.attr('name') || false;

                        // Due to a bug in firefox, whitespaces in email type field are not removed.
                        // TODO: Remove this code once firefox bug is resolved.
                    if (key === 'email') {
                        $el.val($el.val().trim());
                    }

                    if (key) {
                        if (this.interesting_fields($el)) {
                            this.remove_validation_error($el, $form);
                        }
                        validation = this.validate(elements[i]);
                        if (validation.isValid) {
                            obj[key] = $el.attr('type') === 'checkbox' ? $el.is(':checked') : $el.val();
                            $el.removeClass('error');
                            $label.removeClass('error');
                        } else {
                            if (this.interesting_fields($el)) {
                                $validationNode = this.get_error_validation_node($el, $form);
                                if ($validationNode) {
                                    $n = $.parseHTML(validation.message);
                                    tpl = HtmlUtils.template('<i class="fa fa-exclamation-triangle"></i>');

                                    HtmlUtils.prepend($n, tpl());
                                    HtmlUtils.append($validationNode, HtmlUtils.HTML($n));
                                }

                                $desc = $form.find('#' + $el.attr('id') + '-desc');
                                $desc.remove();
                            }

                            errors.push(validation.message);
                            $el.addClass('error');
                            $label.addClass('error');
                        }
                    }
                }

                this.errors = _.uniq(errors);

                return obj;
            },
            remove_validation_error: function($el, $form) {
                var $validationNode = this.get_error_validation_node($el, $form);
                if ($validationNode && $validationNode.find('li').length > 0) {
                    $validationNode.empty();
                }
            },

            get_error_validation_node: function($el, $form) {
                var $node = $form.find('#' + $el.attr('id') + '-validation-error-msg');
                return $node.find('ul');
            },

            interesting_fields: function($el) {
                return ($el.attr('name') === 'email' || $el.attr('name') === 'password');
            },

            toggleHelp: function(event, $help) {
                var $el = $(event.currentTarget);
                var $i = $el.find('i');

                if ($help.css('display') === 'block') {
                    $help.css('display', 'none');
                    $i.addClass('fa-caret-right').removeClass('fa-caret-down');
                } else {
                    $help.css('display', 'block');
                    $i.addClass('fa-caret-down').removeClass('fa-caret-right');
                }
            },

            saveError: function(error) {
                this.errors = [
                    StringUtils.interpolate(
                            '<li>{error}</li>', {
                                error: error.responseText
                            }
                        )
                ];
                this.renderErrors(this.defaultFormErrorsTitle, this.errors);
                this.scrollToFormFeedback();
                this.toggleDisableButton(false);
            },

            /* Wrapper for renderFormFeedback provided for convenience since the majority of
             * our calls to renderFormFeedback are for rendering error messages.
             */
            renderErrors: function(title, errorMessages) {
                this.clearFormErrors();
                this.renderFormFeedback(this.formErrorsTpl, {
                    jsHook: this.formErrorsJsHook,
                    title: title,
                    messagesHtml: HtmlUtils.HTML(errorMessages.join(''))
                });
            },

            renderFormFeedback: function(template, context) {
                var tpl = HtmlUtils.template(template);
                HtmlUtils.prepend(this.$formFeedback, tpl(context));
            },

            /* Allows extended views to add non-form attributes
             * to the data before saving it to model
             */
            setExtraData: function(data) {
                return data;
            },

            submitForm: function(event) {
                var data = this.getFormData();

                if (!_.isUndefined(event)) {
                    event.preventDefault();
                }

                this.toggleDisableButton(true);

                if (!_.compact(this.errors).length) {
                    data = this.setExtraData(data);
                    this.model.set(data);
                    this.model.save();
                    this.clearFormErrors();
                } else {
                    this.renderErrors(this.defaultFormErrorsTitle, this.errors);
                    this.scrollToFormFeedback();
                    this.toggleDisableButton(false);
                }

                this.postFormSubmission();
            },

            /* Allows extended views to add custom
             * code after form submission
             */
            postFormSubmission: function() {
                return true;
            },

            resetValidationVariables: function() {
                return true;
            },

            clearFormErrors: function() {
                var query = '.' + this.formErrorsJsHook;
                this.clearFormFeedbackItems(query);
            },

            clearFormFeedbackItems: function(query) {
                var $items = this.$formFeedback.find(query);
                if ($items.length > 0) {
                    $items.remove();
                }
            },

            /**
             * If a form button is defined for this form, this will disable the button on
             * submit, and re-enable the button if an error occurs.
             *
             * Args:
             *      disabled (boolean): If set to TRUE, disable the button.
             *
             */
            toggleDisableButton: function(disabled) {
                if (this.$submitButton) {
                    this.$submitButton.attr('disabled', disabled);
                }
            },

            scrollToFormFeedback: function() {
                var self = this;
                // Scroll to feedback container
                $('html,body').animate({
                    scrollTop: this.$formFeedback.offset().top
                }, 'slow', function() {
                    self.resetValidationVariables();
                });

                // Focus on the feedback container to ensure screen readers see the messages.
                this.$formFeedback.focus();
            },

            validate: function($el) {
                return EdxUtilsValidate.validate($el);
            },

            liveValidate: function($el, url, dataType, data, method, model) {
                $.ajax({
                    url: url,
                    dataType: dataType,
                    data: data,
                    method: method,
                    success: function(response) {
                        model.trigger('validation', $el, response);
                    }
                });
            },

            inLiveValidationFields: function($el) {
                var i,
                    name = $el.attr('name') || false;
                for (i = 0; i < this.liveValidationFields.length; ++i) {
                    if (this.liveValidationFields[i] === name) {
                        return true;
                    }
                }
                return false;
            }
        });
    });
}).call(this, define || RequireJS.define);


RequireJS.define('text!templates/student_account/form_success.underscore',[],function () { return '<div class="<%- jsHook %> status submission-success">\n    <h4 class="message-title"><%- title %></h4>\n    <div class="message-copy">\n        <%= HtmlUtils.ensureHtml(messageHtml) %>\n    </div>\n</div>\n';});


RequireJS.define('text!templates/student_account/form_status.underscore',[],function () { return '<div class="<%- jsHook %> status">\n    <div class="message-copy">\n        <%= HtmlUtils.ensureHtml(message) %>\n    </p>\n</div>\n\n';});

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/views/LoginView',[
        'jquery',
        'underscore',
        'gettext',
        'edx-ui-toolkit/js/utils/html-utils',
        'edx-ui-toolkit/js/utils/string-utils',
        'js/student_account/views/FormView',
        'text!templates/student_account/form_success.underscore',
        'text!templates/student_account/form_status.underscore'
    ], function(
            $, _, gettext,
            HtmlUtils,
            StringUtils,
            FormView,
            formSuccessTpl,
            formStatusTpl
    ) {
        return FormView.extend({
            el: '#login-form',
            tpl: '#login-tpl',
            events: {
                'click .js-login': 'submitForm',
                'click .forgot-password': 'forgotPassword',
                'click .login-provider': 'thirdPartyAuth',
                'click .enterprise-login': 'enterpriseSlugLogin',
                'click .login-help': 'toggleLoginHelp'
            },
            formType: 'login',
            requiredStr: '',
            optionalStr: '',
            submitButton: '.js-login',
            formSuccessTpl: formSuccessTpl,
            formStatusTpl: formStatusTpl,
            authWarningJsHook: 'js-auth-warning',
            passwordResetSuccessJsHook: 'js-password-reset-success',
            defaultFormErrorsTitle: gettext('We couldn\'t sign you in.'),
            isEnterpriseEnable: false,

            preRender: function(data) {
                this.providers = data.thirdPartyAuth.providers || [];
                this.hasSecondaryProviders = (
                    data.thirdPartyAuth.secondaryProviders && data.thirdPartyAuth.secondaryProviders.length
                );
                this.currentProvider = data.thirdPartyAuth.currentProvider || '';
                this.syncLearnerProfileData = data.thirdPartyAuth.syncLearnerProfileData || false;
                this.errorMessage = data.thirdPartyAuth.errorMessage || '';
                this.platformName = data.platformName;
                this.resetModel = data.resetModel;
                this.accountRecoveryModel = data.accountRecoveryModel;
                this.supportURL = data.supportURL;
                this.passwordResetSupportUrl = data.passwordResetSupportUrl;
                this.createAccountOption = data.createAccountOption;
                this.accountActivationMessages = data.accountActivationMessages;
                this.accountRecoveryMessages = data.accountRecoveryMessages;
                this.hideAuthWarnings = data.hideAuthWarnings;
                this.pipelineUserDetails = data.pipelineUserDetails;
                this.enterpriseName = data.enterpriseName;
                this.enterpriseSlugLoginURL = data.enterpriseSlugLoginURL;
                this.isEnterpriseEnable = data.isEnterpriseEnable;
                this.is_require_third_party_auth_enabled = data.is_require_third_party_auth_enabled || false;

                this.listenTo(this.model, 'sync', this.saveSuccess);
                this.listenTo(this.resetModel, 'sync', this.resetEmail);
                this.listenTo(this.accountRecoveryModel, 'sync', this.resetEmail);
            },

            render: function(html) {
                var fields = html || '';

                HtmlUtils.setHtml(
                    $(this.el),
                    HtmlUtils.HTML(
                        _.template(this.tpl)({
                            // We pass the context object to the template so that
                            // we can perform variable interpolation using sprintf
                            HtmlUtils: HtmlUtils,
                            context: {
                                fields: fields,
                                currentProvider: this.currentProvider,
                                syncLearnerProfileData: this.syncLearnerProfileData,
                                providers: this.providers,
                                hasSecondaryProviders: this.hasSecondaryProviders,
                                platformName: this.platformName,
                                createAccountOption: this.createAccountOption,
                                pipelineUserDetails: this.pipelineUserDetails,
                                enterpriseName: this.enterpriseName,
                                is_require_third_party_auth_enabled: this.is_require_third_party_auth_enabled
                            }
                        })
                    )
                );
                this.postRender();

                return this;
            },

            postRender: function() {
                var formErrorsTitle;
                this.$container = $(this.el);
                this.$form = this.$container.find('form');
                this.$formFeedback = this.$container.find('.js-form-feedback');
                this.$submitButton = this.$container.find(this.submitButton);

                if (this.errorMessage) {
                    formErrorsTitle = _.sprintf(
                        gettext('An error occurred when signing you in to %s.'),
                        this.platformName
                    );
                    this.renderErrors(formErrorsTitle, [this.errorMessage]);
                } else if (this.currentProvider) {
                    /* If we're already authenticated with a third-party
                     * provider, try logging in. The easiest way to do this
                     * is to simply submit the form.
                     */
                    this.model.save();
                }

                // Display account activation success or error messages.
                this.renderAccountActivationMessages();
                this.renderAccountRecoveryMessages();
            },

            renderAccountActivationMessages: function() {
                _.each(this.accountActivationMessages, this.renderMessage, this);
            },

            renderAccountRecoveryMessages: function() {
                _.each(this.accountRecoveryMessages, this.renderMessage, this);
            },

            renderMessage: function(message) {
                this.renderFormFeedback(this.formStatusTpl, {
                    jsHook: message.tags,
                    message: HtmlUtils.HTML(message.message)
                });
            },

            forgotPassword: function(event) {
                event.preventDefault();

                this.trigger('password-help');
                this.clearPasswordResetSuccess();
            },

            toggleLoginHelp: function(event) {
                var $help;
                event.preventDefault();
                $help = $('#login-help');
                this.toggleHelp(event, $help);
            },

            enterpriseSlugLogin: function(event) {
                event.preventDefault();
                if (this.enterpriseSlugLoginURL) {
                    window.location.href = this.enterpriseSlugLoginURL;
                }
            },

            postFormSubmission: function() {
                this.clearPasswordResetSuccess();
            },

            resetEmail: function() {
                var email = $('#password-reset-email').val(),
                    successTitle = gettext('Check Your Email'),
                    successMessageHtml = HtmlUtils.interpolateHtml(
                        gettext('{paragraphStart}You entered {boldStart}{email}{boldEnd}. If this email address is associated with your {platform_name} account, we will send a message with password recovery instructions to this email address.{paragraphEnd}' + // eslint-disable-line max-len
                        '{paragraphStart}If you do not receive a password reset message after 1 minute, verify that you entered the correct email address, or check your spam folder.{paragraphEnd}' + // eslint-disable-line max-len
                        '{paragraphStart}If you need further assistance, {anchorStart}contact technical support{anchorEnd}.{paragraphEnd}'), { // eslint-disable-line max-len
                            boldStart: HtmlUtils.HTML('<b data-hj-suppress>'),
                            boldEnd: HtmlUtils.HTML('</b>'),
                            paragraphStart: HtmlUtils.HTML('<p>'),
                            paragraphEnd: HtmlUtils.HTML('</p>'),
                            email: email,
                            platform_name: this.platformName,
                            anchorStart: HtmlUtils.HTML(
                                StringUtils.interpolate(
                                    '<a href="{passwordResetSupportUrl}">', {
                                        passwordResetSupportUrl: this.passwordResetSupportUrl
                                    }
                                )
                            ),
                            anchorEnd: HtmlUtils.HTML('</a>')
                        }
                    );

                this.clearFormErrors();
                this.clearPasswordResetSuccess();

                this.renderFormFeedback(this.formSuccessTpl, {
                    jsHook: this.passwordResetSuccessJsHook,
                    title: successTitle,
                    messageHtml: successMessageHtml
                });
            },

            thirdPartyAuth: function(event) {
                var providerUrl = $(event.currentTarget).data('provider-url') || '';

                if (providerUrl) {
                    window.location.href = providerUrl;
                }
            },

            saveSuccess: function() {
                this.trigger('auth-complete');
                this.clearPasswordResetSuccess();
            },

            saveError: function(error) {
                var errorCode;
                var msg;
                if (error.status === 0) {
                    msg = gettext('An error has occurred. Check your Internet connection and try again.');
                } else if (error.status === 500) {
                    msg = gettext('An error has occurred. Try refreshing the page, or check your Internet connection.'); // eslint-disable-line max-len
                } else if (error.responseJSON !== undefined && error.responseJSON.error_code === 'inactive-user') {
                    msg = HtmlUtils.interpolateHtml(
                    gettext('In order to sign in, you need to activate your account.{line_break}{line_break}' +
                            'We just sent an activation link to {strong_start} {email} {strong_end}. If ' +
                            ' you do not receive an email, check your spam folders or ' +
                            ' {anchorStart}contact {platform_name} Support{anchorEnd}.'),
                        {
                            email: error.responseJSON.email,
                            platform_name: this.platform_name,
                            line_break: HtmlUtils.HTML('<br/>'),
                            strong_start: HtmlUtils.HTML('<strong>'),
                            strong_end: HtmlUtils.HTML('</strong>'),
                            anchorStart: HtmlUtils.HTML(
                                StringUtils.interpolate(
                                    '<a href="{SupportUrl}">', {
                                        SupportUrl: this.supportURL,
                                    }
                                )
                            ),
                            anchorEnd: HtmlUtils.HTML('</a>')
                        }
                    );
                } else if (error.responseJSON !== undefined) {
                    msg = error.responseJSON.value;
                    errorCode = error.responseJSON.error_code;
                } else {
                    msg = gettext('An unexpected error has occurred.');
                }

                this.errors = [
                    StringUtils.interpolate(
                        '<li>{msg}</li>', {
                            msg: msg
                        }
                    )
                ];
                this.clearPasswordResetSuccess();

                /* If the user successfully authenticated with a third-party provider, but they haven't
                 * linked the accounts, instruct the user on how to link the accounts.
                 */
                if (errorCode === 'third-party-auth-with-no-linked-account' && this.currentProvider) {
                    if (!this.hideAuthWarnings) {
                        this.clearFormErrors();
                        this.renderThirdPartyAuthWarning();
                    }
                } else {
                    this.renderErrors(this.defaultFormErrorsTitle, this.errors);
                }
                this.toggleDisableButton(false);
            },

            renderThirdPartyAuthWarning: function() {
                var message = _.sprintf(
                    gettext('You have successfully signed into %(currentProvider)s, but your %(currentProvider)s' +
                            ' account does not have a linked %(platformName)s account. To link your accounts,' +
                            ' sign in now using your %(platformName)s password.'),
                    {currentProvider: this.currentProvider, platformName: this.platformName}
                );

                this.clearAuthWarning();
                this.renderFormFeedback(this.formStatusTpl, {
                    jsHook: this.authWarningJsHook,
                    message: message
                });
            },

            clearPasswordResetSuccess: function() {
                var query = '.' + this.passwordResetSuccessJsHook;
                this.clearFormFeedbackItems(query);
            },

            clearAuthWarning: function() {
                var query = '.' + this.authWarningJsHook;
                this.clearFormFeedbackItems(query);
            }
        });
    });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/views/PasswordResetView',[
        'jquery',
        'js/student_account/views/FormView'
    ],
        function($, FormView) {
            return FormView.extend({
                el: '#password-reset-form',

                tpl: '#password_reset-tpl',

                events: {
                    'click .js-reset': 'submitForm',
                    'click .reset-help': 'toggleResetHelp'
                },

                formType: 'password-reset',

                requiredStr: '',
                optionalStr: '',

                submitButton: '.js-reset',

                preRender: function() {
                    this.element.show($(this.el));
                    this.element.show($(this.el).parent());
                    this.listenTo(this.model, 'sync', this.saveSuccess);
                },

                toggleResetHelp: function(event) {
                    var $help;
                    event.preventDefault();
                    $help = $('#reset-help');
                    this.toggleHelp(event, $help);
                },

                saveSuccess: function() {
                    this.trigger('password-email-sent');

                // Destroy the view (but not el) and unbind events
                    this.$el.empty().off();
                    this.stopListening();
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/views/RegisterView',[
        'jquery',
        'underscore',
        'gettext',
        'edx-ui-toolkit/js/utils/string-utils',
        'edx-ui-toolkit/js/utils/html-utils',
        'js/student_account/views/FormView',
        'text!templates/student_account/form_status.underscore'
    ],
        function(
            $, _, gettext,
            StringUtils,
            HtmlUtils,
            FormView,
            formStatusTpl
        ) {
            return FormView.extend({
                el: '#register-form',
                tpl: '#register-tpl',
                validationUrl: '/api/user/v1/validation/registration',
                events: {
                    'click .js-register': 'submitForm',
                    'click .login-provider': 'thirdPartyAuth',
                    'click input[required][type="checkbox"]': 'liveValidateHandler',
                    'blur input[required], textarea[required], select[required]': 'liveValidateHandler',
                    'focus input[required], textarea[required], select[required]': 'handleRequiredInputFocus'
                },
                liveValidationFields: [
                    'name',
                    'username',
                    'password',
                    'email',
                    'confirm_email',
                    'country',
                    'honor_code',
                    'terms_of_service'
                ],
                formType: 'register',
                formFields: '.form-fields',
                formStatusTpl: formStatusTpl,
                authWarningJsHook: 'js-auth-warning',
                defaultFormErrorsTitle: gettext('We couldn\'t create your account.'),
                submitButton: '.js-register',
                positiveValidationIcon: 'fa-check',
                negativeValidationIcon: 'fa-exclamation',
                successfulValidationDisplaySeconds: 3,
            // These are reset to true on form submission.
                positiveValidationEnabled: true,
                negativeValidationEnabled: true,

                preRender: function(data) {
                    this.providers = data.thirdPartyAuth.providers || [];
                    this.hasSecondaryProviders = (
                        data.thirdPartyAuth.secondaryProviders && data.thirdPartyAuth.secondaryProviders.length
                    );
                    this.currentProvider = data.thirdPartyAuth.currentProvider || '';
                    this.syncLearnerProfileData = data.thirdPartyAuth.syncLearnerProfileData || false;
                    this.errorMessage = data.thirdPartyAuth.errorMessage || '';
                    this.platformName = data.platformName;
                    this.autoSubmit = data.thirdPartyAuth.autoSubmitRegForm;
                    this.hideAuthWarnings = data.hideAuthWarnings;
                    this.autoRegisterWelcomeMessage = data.thirdPartyAuth.autoRegisterWelcomeMessage || '';
                    this.registerFormSubmitButtonText =
                        data.thirdPartyAuth.registerFormSubmitButtonText || _('Create Account');
                    this.is_require_third_party_auth_enabled = data.is_require_third_party_auth_enabled;
                    this.enableCoppaCompliance = data.enableCoppaCompliance;

                    this.listenTo(this.model, 'sync', this.saveSuccess);
                    this.listenTo(this.model, 'validation', this.renderLiveValidations);
                },


                renderFields: function(fields, className) {
                    var html = [],
                        i,
                        fieldTpl = this.fieldTpl;

                    html.push(HtmlUtils.joinHtml(
                        HtmlUtils.HTML('<div class="'),
                        className,
                        HtmlUtils.HTML('">')
                    ));
                    for (i = 0; i < fields.length; i++) {
                        html.push(HtmlUtils.template(fieldTpl)($.extend(fields[i], {
                            form: this.formType,
                            requiredStr: this.requiredStr,
                            optionalStr: fields[i].name === 'marketing_emails_opt_in' ? '' : this.optionalStr,
                            supplementalText: fields[i].supplementalText || '',
                            supplementalLink: fields[i].supplementalLink || ''
                        })));
                    }
                    html.push('</div>');
                    return html;
                },

                buildForm: function(data) {
                    var html = [],
                        i,
                        field,
                        len = data.length,
                        requiredFields = [],
                        optionalFields = [],
                        exposedOptionalFields = [];

                    this.fields = data;

                    this.hasOptionalFields = false;
                    for (i = 0; i < len; i++) {
                        field = data[i];
                        if (field.errorMessages) {
                            // eslint-disable-next-line no-param-reassign
                            field.errorMessages = this.escapeStrings(field.errorMessages);
                        }

                        if (field.required) {
                            requiredFields.push(field);
                        } else {
                            if (field.type !== 'hidden') {
                                // For the purporse of displaying the optional field toggle,
                                // the form should be considered to have optional fields
                                // only if all of the optional fields are being rendering as
                                // input elements that are visible on the page.
                                this.hasOptionalFields = true;
                            }

                            if (field.exposed) {
                                exposedOptionalFields.push(field);
                            } else {
                                optionalFields.push(field);
                            }
                        }
                    }

                    html = this.renderFields(requiredFields, 'required-fields');

                    html.push.apply(html, this.renderFields(exposedOptionalFields, 'exposed-optional-fields'));
                    html.push.apply(html, this.renderFields(
                      optionalFields, `optional-fields ${!this.enableCoppaCompliance ? '' : 'full-length-fields'}`
                    ));

                    this.render(html.join(''));
                },

                render: function(html) {
                    var fields = html || '',
                        formErrorsTitle = gettext('An error occurred.'),
                        renderHtml = _.template(this.tpl)({
                            /* We pass the context object to the template so that
                             * we can perform variable interpolation using sprintf
                             */
                            context: {
                                fields: fields,
                                currentProvider: this.currentProvider,
                                syncLearnerProfileData: this.syncLearnerProfileData,
                                providers: this.providers,
                                hasSecondaryProviders: this.hasSecondaryProviders,
                                platformName: this.platformName,
                                autoRegisterWelcomeMessage: this.autoRegisterWelcomeMessage,
                                registerFormSubmitButtonText: this.registerFormSubmitButtonText,
                                is_require_third_party_auth_enabled: this.is_require_third_party_auth_enabled
                            }
                        });

                    HtmlUtils.setHtml($(this.el), HtmlUtils.HTML(renderHtml));

                    this.postRender();

                    // Must be called after postRender, since postRender sets up $formFeedback.
                    if (this.errorMessage) {
                        this.renderErrors(formErrorsTitle, [this.errorMessage]);
                    } else if (this.currentProvider && !this.hideAuthWarnings) {
                        this.renderAuthWarning();
                    }

                    if (this.autoSubmit) {
                        $(this.el).hide();
                        $('#register-honor_code, #register-terms_of_service').prop('checked', true);
                        this.submitForm();
                    }

                    return this;
                },

                postRender: function() {
                    var inputs = this.$('.form-field'),
                        inputSelectors = 'input, select, textarea',
                        inputTipSelectors = ['tip error', 'tip tip-input'],
                        inputTipSelectorsHidden = ['tip error hidden', 'tip tip-input hidden'],
                        onInputFocus = function() {
                            // Apply on focus styles to input
                            $(this).find('label').addClass('focus-in')
                                .removeClass('focus-out');

                            // Show each input tip
                            $(this).children().each(function() {
                                if (inputTipSelectorsHidden.indexOf($(this).attr('class')) >= 0) {
                                    $(this).removeClass('hidden');
                                }
                            });
                        },
                        onInputFocusOut = function() {
                            // If input has no text apply focus out styles
                            if ($(this).find(inputSelectors).val().length === 0) {
                                $(this).find('label').addClass('focus-out')
                                    .removeClass('focus-in');
                            }

                            // Hide each input tip
                            $(this).children().each(function() {
                                // This is a 1 instead of 0 so the error message for a field is not
                                // hidden on blur and only the help tip is hidden.
                                if (inputTipSelectors.indexOf($(this).attr('class')) >= 1) {
                                    $(this).addClass('hidden');
                                }
                            });
                        },
                        handleInputBehavior = function(input) {
                            // Initially put label in input
                            if (input.find(inputSelectors).val().length === 0) {
                                input.find('label').addClass('focus-out')
                                    .removeClass('focus-in');
                            }

                            // Initially hide each input tip
                            input.children().each(function() {
                                if (inputTipSelectors.indexOf($(this).attr('class')) >= 0) {
                                    $(this).addClass('hidden');
                                }
                            });

                            input.focusin(onInputFocus);
                            input.focusout(onInputFocusOut);
                        },
                        handleAutocomplete = function() {
                            $(inputs).each(function() {
                                var $input = $(this),
                                    isCheckbox = $input.attr('class').indexOf('checkbox') !== -1;

                                if (!isCheckbox) {
                                    if ($input.find(inputSelectors).val().length === 0
                                        && !$input.is(':-webkit-autofill')) {
                                        $input.find('label').addClass('focus-out')
                                            .removeClass('focus-in');
                                    } else {
                                        $input.find('label').addClass('focus-in')
                                            .removeClass('focus-out');
                                    }
                                }
                            });
                        };

                    FormView.prototype.postRender.call(this);
                    $('.optional-fields').addClass('hidden');
                    $('#toggle_optional_fields').change(function() {
                        window.analytics.track('edx.bi.user.register.optional_fields_selected');
                        $('.optional-fields').toggleClass('hidden');
                    });

                    // Since the honor TOS text has a composed css selector, it is more future proof
                    // to insert the not toggled optional fields before .honor_tos_combined's parent
                    // that is the container for the honor TOS text and checkbox.
                    // xss-lint: disable=javascript-jquery-insert-into-target
                    $('.exposed-optional-fields').insertBefore(
                        $('.honor_tos_combined').parent()
                    );

                    // We are swapping the order of these elements here because the honor code agreement
                    // is a required checkbox field and the optional fields toggle is a cosmetic
                    // improvement so that we don't have to show all the optional fields.
                    // xss-lint: disable=javascript-jquery-insert-into-target
                    $('.checkbox-optional_fields_toggle').insertAfter('.required-fields');
                    if (!this.hasOptionalFields) {
                        $('.checkbox-optional_fields_toggle').addClass('hidden');
                    }
                    // xss-lint: disable=javascript-jquery-insert-into-target
                    $('.checkbox-honor_code').insertAfter('.optional-fields');
                    // xss-lint: disable=javascript-jquery-insert-into-target
                    $('.checkbox-terms_of_service').insertAfter('.optional-fields');

                    // Clicking on links inside a label should open that link.
                    $('label a').click(function(ev) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        window.open($(this).attr('href'), $(this).attr('target'), 'noopener');
                    });
                    $('.form-field').each(function() {
                        $(this).find('option:first').html('');
                    });
                    $(inputs).each(function() {
                        var $input = $(this),
                            isCheckbox = $input.attr('class').indexOf('checkbox') !== -1;
                        if ($input.length > 0 && !isCheckbox) {
                            handleInputBehavior($input);
                        }
                    });
                    $('#register-confirm_email').bind('cut copy paste', function(e) {
                        e.preventDefault();
                    });
                    setTimeout(handleAutocomplete, 1000);
                },

                hideRequiredMessageExceptOnError: function($el) {
                    // We only handle blur if not in an error state.
                    if (!$el.hasClass('error')) {
                        this.hideRequiredMessage($el);
                    }
                },

                hideRequiredMessage: function($el) {
                    this.doOnInputLabel($el, function($label) {
                        $label.addClass('hidden');
                    });
                },

                doOnInputLabel: function($el, action) {
                    var $label = this.getRequiredTextLabel($el);
                    action($label);
                },

                handleRequiredInputFocus: function(event) {
                    var $el = $(event.currentTarget);
                    // Avoid rendering for required checkboxes.
                    if ($el.attr('type') !== 'checkbox') {
                        this.renderRequiredMessage($el);
                    }
                    if ($el.hasClass('error')) {
                        this.doOnInputLabel($el, function($label) {
                            $label.addClass('error');
                        });
                    }
                },

                renderRequiredMessage: function($el) {
                    this.doOnInputLabel($el, function($label) {
                        $label.removeClass('hidden').text(gettext('(required)'));
                    });
                },

                getRequiredTextLabel: function($el) {
                    return $('#' + $el.attr('id') + '-required-label');
                },

                renderLiveValidations: function($el, decisions) {
                    var $label = this.getLabel($el),
                        $requiredTextLabel = this.getRequiredTextLabel($el),
                        $icon = this.getIcon($el),
                        $errorTip = this.getErrorTip($el),
                        name = $el.attr('name'),
                        type = $el.attr('type'),
                        isCheckbox = type === 'checkbox',
                        hasError = decisions.validation_decisions[name] !== '',
                        error = isCheckbox ? '' : decisions.validation_decisions[name];

                    if (hasError && this.negativeValidationEnabled) {
                        this.addValidationErrorMsgForScreenReader($el);
                        this.renderLiveValidationError($el, $label, $requiredTextLabel, $icon, $errorTip, error);
                    } else if (this.positiveValidationEnabled) {
                        this.removeValidationErrorMsgForScreenReader($el);
                        this.renderLiveValidationSuccess($el, $label, $requiredTextLabel, $icon, $errorTip);
                    }
                },

                getLabel: function($el) {
                    return this.$form.find('label[for=' + $el.attr('id') + ']');
                },

                getIcon: function($el) {
                    return $('#' + $el.attr('id') + '-validation-icon');
                },

                addValidationErrorMsgForScreenReader: function($el) {
                    var $validation_node =  this.$form.find('#' + $el.attr('id') + '-validation-error');
                    $validation_node.find('.sr-only').text('ERROR:');
                },

                removeValidationErrorMsgForScreenReader: function($el) {
                    var $validation_node =  this.$form.find('#' + $el.attr('id') + '-validation-error');
                    $validation_node.find('.sr-only').text('');
                },

                getErrorTip: function($el) {
                    return $('#' + $el.attr('id') + '-validation-error-msg');
                },

                getFieldTimeout: function($el) {
                    return $('#' + $el.attr('id')).attr('timeout-id') || null;
                },

                setFieldTimeout: function($el, time, action) {
                    $el.attr('timeout-id', setTimeout(action, time));
                },

                clearFieldTimeout: function($el) {
                    var timeout = this.getFieldTimeout($el);
                    if (timeout) {
                        clearTimeout(this.getFieldTimeout($el));
                        $el.removeAttr('timeout-id');
                    }
                },

                renderLiveValidationError: function($el, $label, $req, $icon, $tip, error) {
                    this.removeLiveValidationIndicators(
                        $el, $label, $req, $icon,
                        'success', this.positiveValidationIcon
                    );
                    this.addLiveValidationIndicators(
                        $el, $label, $req, $icon, $tip,
                        'error', this.negativeValidationIcon, error
                    );
                    this.renderRequiredMessage($el);
                },

                renderLiveValidationSuccess: function($el, $label, $req, $icon, $tip) {
                    var self = this,
                        validationFadeTime = this.successfulValidationDisplaySeconds * 1000;
                    this.removeLiveValidationIndicators(
                        $el, $label, $req, $icon,
                        'error', this.negativeValidationIcon
                    );
                    this.addLiveValidationIndicators(
                        $el, $label, $req, $icon, $tip,
                        'success', this.positiveValidationIcon, ''
                    );
                    this.hideRequiredMessage($el);

                    // Hide success indicators after some time.
                    this.clearFieldTimeout($el);
                    this.setFieldTimeout($el, validationFadeTime, function() {
                        self.removeLiveValidationIndicators(
                            $el, $label, $req, $icon,
                            'success', self.positiveValidationIcon
                        );
                        self.clearFieldTimeout($el);
                    });
                },

                addLiveValidationIndicators: function($el, $label, $req, $icon, $tip, indicator, icon, msg) {
                    $el.addClass(indicator);
                    $label.addClass(indicator);
                    $req.addClass(indicator);
                    $icon.addClass(indicator + ' ' + icon);
                    if (['username', 'email'].indexOf($el.attr('name')) > -1) {
                        $tip.addClass(' data-hj-suppress');
                    }
                    $tip.text(msg);
                },

                removeLiveValidationIndicators: function($el, $label, $req, $icon, indicator, icon) {
                    $el.removeClass(indicator);
                    $label.removeClass(indicator);
                    $req.removeClass(indicator);
                    $icon.removeClass(indicator + ' ' + icon);
                },

                thirdPartyAuth: function(event) {
                    var providerUrl = $(event.currentTarget).data('provider-url') || '';

                    if (providerUrl) {
                        window.location.href = providerUrl;
                    }
                },

                saveSuccess: function() {
                    this.trigger('auth-complete');
                },

                saveError: function(error) {
                    $(this.el).show(); // Show in case the form was hidden for auto-submission
                    this.errors = _.flatten(
                        _.map(
                            // Something is passing this 'undefined'. Protect against this.
                            JSON.parse(error.responseText || '[]'),
                            function(errorList, key) {
                                if (key === 'error_code') {
                                    return null;
                                } else {
                                    return _.map(
                                        errorList,
                                        function(errorItem) {
                                            if (errorItem.user_message) {
                                                return StringUtils.interpolate('<li {suppressAttr} >{error}</li>', {
                                                    error: errorItem.user_message,
                                                    suppressAttr: (
                                                    key === 'email' || key === 'username'
                                                    ) ? 'data-hj-suppress' : ''
                                                });
                                            }
                                        }
                                  );
                                }
                            }
                        )
                    );
                    this.renderErrors(this.defaultFormErrorsTitle, this.errors);
                    this.scrollToFormFeedback();
                    this.toggleDisableButton(false);
                },

                postFormSubmission: function() {
                    if (_.compact(this.errors).length) {
                    // The form did not get submitted due to validation errors.
                        $(this.el).show(); // Show in case the form was hidden for auto-submission
                    }
                },

                resetValidationVariables: function() {
                    this.positiveValidationEnabled = true;
                    this.negativeValidationEnabled = true;
                },

                renderAuthWarning: function() {
                    var msgPart1 = gettext('You\'ve successfully signed into %(currentProvider)s.'),
                        msgPart2 = gettext(
                            'We just need a little more information before you start learning with %(platformName)s.'
                        ),
                        fullMsg = _.sprintf(
                            msgPart1 + ' ' + msgPart2,
                            {currentProvider: this.currentProvider, platformName: this.platformName}
                        );

                    this.renderFormFeedback(this.formStatusTpl, {
                        jsHook: this.authWarningJsHook,
                        message: fullMsg
                    });
                    $(this.formFields).removeClass('hidden');
                },

                submitForm: function(event) { // eslint-disable-line no-unused-vars
                    var elements = this.$form[0].elements,
                        $el,
                        i;

                // As per requirements, disable positive validation for submission.
                    this.positiveValidationEnabled = false;

                    for (i = 0; i < elements.length; i++) {
                        $el = $(elements[i]);

                        // Simulate live validation.
                        if ($el.attr('required')) {
                            $el.blur();
                        }
                    }

                    FormView.prototype.submitForm.apply(this, arguments);
                },

                getFormData: function() {
                    var obj = FormView.prototype.getFormData.apply(this, arguments),
                        $emailElement = this.$form.find('input[name=email]'),
                        $confirmEmail = this.$form.find('input[name=confirm_email]');

                    if ($confirmEmail.length) {
                        if (!$confirmEmail.val() || ($emailElement.val() !== $confirmEmail.val())) {
                            this.errors.push(StringUtils.interpolate('<li>{error}</li>', {
                                error: $confirmEmail.data('errormsg-required')
                            }));
                        }
                        obj.confirm_email = $confirmEmail.val();
                    }

                    return obj;
                },

                liveValidateHandler: function(event) {
                    var $el = $(event.currentTarget);
                    // Until we get a back-end that can handle all available
                    // registration fields, we do some generic validation here.
                    if (this.inLiveValidationFields($el)) {
                        if ($el.attr('type') === 'checkbox') {
                            this.liveValidateCheckbox($el);
                        } else {
                            this.liveValidate($el);
                        }
                    } else {
                        this.genericLiveValidateHandler($el);
                    }
                    // On blur, we do exactly as the function name says, no matter which input.
                    this.hideRequiredMessageExceptOnError($el);
                },

                liveValidate: function($el) {
                    var data = {},
                        field,
                        i;
                    for (i = 0; i < this.liveValidationFields.length; ++i) {
                        field = this.liveValidationFields[i];
                        data[field] = $('#register-' + field).val();
                    }
                    FormView.prototype.liveValidate(
                        $el, this.validationUrl, 'json', data, 'POST', this.model
                    );
                },

                liveValidateCheckbox: function($checkbox) {
                    var validationDecisions = {validation_decisions: {}},
                        decisions = validationDecisions.validation_decisions,
                        name = $checkbox.attr('name'),
                        checked = $checkbox.is(':checked'),
                        error = $checkbox.data('errormsg-required');
                    decisions[name] = checked ? '' : error;
                    this.renderLiveValidations($checkbox, validationDecisions);
                },

                genericLiveValidateHandler: function($el) {
                    var elementType = $el.attr('type');
                    if (elementType === 'checkbox') {
                    // We are already validating checkboxes in a generic way.
                        this.liveValidateCheckbox($el);
                    } else {
                        this.genericLiveValidate($el);
                    }
                },

                genericLiveValidate: function($el) {
                    var validationDecisions = {validation_decisions: {}},
                        decisions = validationDecisions.validation_decisions,
                        name = $el.attr('name'),
                        error = $el.data('errormsg-required');
                    decisions[name] = $el.val() ? '' : error;
                    this.renderLiveValidations($el, validationDecisions);
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/views/InstitutionLoginView',['jquery', 'underscore', 'backbone', 'edx-ui-toolkit/js/utils/html-utils'],
        function($, _, Backbone, HtmlUtils) {
            return Backbone.View.extend({
                el: '#institution_login-form',

                initialize: function(data) {
                    var tpl = data.mode == 'register' ? '#institution_register-tpl' : '#institution_login-tpl';
                    this.tpl = $(tpl).html();
                    this.providers = data.thirdPartyAuth.secondaryProviders || [];
                    this.platformName = data.platformName;
                },

                render: function() {
                    HtmlUtils.setHtml(
                        $(this.el),
                        HtmlUtils.template(this.tpl)({
                            // We pass the context object to the template so that
                            // we can perform variable interpolation using sprintf
                            providers: this.providers,
                            platformName: this.platformName
                        })
                    );
                    return this;
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/views/HintedLoginView',['jquery', 'underscore', 'backbone', 'edx-ui-toolkit/js/utils/html-utils'],
        function($, _, Backbone, HtmlUtils) {
            return Backbone.View.extend({
                el: '#hinted-login-form',

                tpl: '#hinted_login-tpl',

                events: {
                    'click .proceed-button': 'proceedWithHintedAuth'
                },

                formType: 'hinted-login',

                initialize: function(data) {
                    this.tpl = $(this.tpl).html();
                    this.hintedProvider = (
                    _.findWhere(data.thirdPartyAuth.providers, {id: data.hintedProvider}) ||
                    _.findWhere(data.thirdPartyAuth.secondaryProviders, {id: data.hintedProvider})
                );
                },

                render: function() {
                    HtmlUtils.setHtml(
                        $(this.el),
                        HtmlUtils.template(this.tpl)({
                            hintedProvider: this.hintedProvider
                        })
                    );
                    return this;
                },

                proceedWithHintedAuth: function(event) {
                    this.redirect(this.hintedProvider.loginUrl);
                },

            /**
             * Redirect to a URL.  Mainly useful for mocking out in tests.
             * @param  {string} url The URL to redirect to.
             */
                redirect: function(url) {
                    window.location.href = url;
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/utils',['jquery'], function($) {
        var edxUserCookieUtils = {
            userFromEdxUserCookie: function(edxUserInfoCookieName) {
                var cookie, user, userCookie;

                cookie = document.cookie.match('(^|;)\\s*' + edxUserInfoCookieName + '\\s*=\\s*([^;]+)');
                userCookie = cookie ? cookie.pop() : $.cookie(edxUserInfoCookieName);

                if (!userCookie) {
                    return {};
                }

                // returns the user object from cookie. Replaces '054' with ',' and removes '\'
                user = userCookie.replace(/\\/g, '').replace(/054/g, ',');
                user = user.substring(1, user.length - 1);
                return JSON.parse(user);
            }
        };

        return edxUserCookieUtils;
    });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/multiple_enterprise',['jquery', 'js/student_account/utils', 'jquery.cookie'], function($, Utils) {
        var MultipleEnterpriseInterface = {

            urls: {
                learners: '/enterprise/api/v1/enterprise-learner/',
                multipleEnterpriseUrl: '/enterprise/select/active/?success_url=',
                enterpriseActivationUrl: '/enterprise/select/active'
            },

            headers: {
                'X-CSRFToken': $.cookie('csrftoken')
            },

            /**
             * Fetch the learner data, then redirect the user to a enterprise selection page if multiple
             * enterprises were found.
             * @param  {string} nextUrl The URL to redirect to after multiple enterprise selection or incase
             * the selection page is bypassed e.g. when dealing with direct enrolment urls.
             */
            check: function(nextUrl, edxUserInfoCookieName) {
                var view = this;
                var selectionPageUrl = this.urls.multipleEnterpriseUrl + encodeURIComponent(nextUrl);
                var username = Utils.userFromEdxUserCookie(edxUserInfoCookieName).username;
                var next = nextUrl || '/';
                var enterpriseInUrl = this.getEnterpriseFromUrl(nextUrl);
                var userInEnterprise = false;
                var userWithMultipleEnterprises = false;
                $.ajax({
                    url: this.urls.learners + '?username=' + username,
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    headers: this.headers,
                    context: this
                }).fail(function() {
                    view.redirect(next);
                }).done(function(response) {
                    userWithMultipleEnterprises = (response.count > 1);
                    if (userWithMultipleEnterprises) {
                        if (enterpriseInUrl) {
                            userInEnterprise = view.checkEnterpriseExists(response, enterpriseInUrl);
                            if (userInEnterprise) {
                                view.activate(enterpriseInUrl).fail(function() {
                                    view.redirect(selectionPageUrl);
                                }).done(function() {
                                    view.redirect(next);
                                });
                            } else {
                                view.redirect(selectionPageUrl);
                            }
                        } else {
                            view.redirect(selectionPageUrl);
                        }
                    } else {
                        view.redirect(next);
                    }
                });
            },

            redirect: function(url) {
                window.location.href = url;
            },

            activate: function(enterprise) {
                return $.ajax({
                    url: this.urls.enterpriseActivationUrl,
                    method: 'POST',
                    headers: {'X-CSRFToken': $.cookie('csrftoken')},
                    data: {enterprise: enterprise}
                });
            },

            getEnterpriseFromUrl: function(url) {
                var regex;
                regex = RegExp('/enterprise/.*/course/.*/enroll');
                if (typeof url !== 'string' || !regex.test(url)) {
                    return void(0);
                }
                return url.split('/')[2];
            },

            checkEnterpriseExists: function(response, enterprise) {
                return response.results.some(function(item) {
                    return item.enterprise_customer.uuid === enterprise;
                });
            }
        };

        return MultipleEnterpriseInterface;
    });
}).call(this, define || RequireJS.define);

/* History.js v1.8b2 https://github.com/browserstate/history.js */
typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&&n.originalEvent&&n.originalEvent[e]||r&&r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!="undefined"&&n.init()}(window),function(e,t){"use strict";var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){if(typeof o.initHtml4.initialized!="undefined")return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t=o.getHashByIndex(),n;return n=e===t,n},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return typeof e=="undefined"?t=o.savedHashes[o.savedHashes.length-1]:e<0?t=o.savedHashes[o.savedHashes.length+e]:t=o.savedHashes[e],t},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,n){var r=o.getHashByState(e),i;return i={discardedState:e,backState:n,forwardState:t},o.discardedStates[r]=i,!0},o.discardHash=function(e,t,n){var r={discardedHash:e,backState:n,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t=o.getHashByState(e),n;return n=o.discardedStates[t]||!1,n},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var t="",r,i,u,a,f=Boolean(o.getHash());return o.isInternetExplorer()?(r="historyjs-iframe",i=n.createElement("iframe"),i.setAttribute("id",r),i.setAttribute("src","#"),i.style.display="none",n.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),u="",a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n=o.getHash(),r=o.getHash(i.contentWindow.document);return n!==t?(t=n,r!==n&&(u=r=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=o.escapeHash(n)),o.Adapter.trigger(e,"hashchange")):r!==u&&(u=r,f&&r===""?o.back():o.setHash(r,!1)),a=!1,!0}):o.checkerFunction=function(){var n=o.getHash()||"";return n!==t&&(t=n,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t){var n=t&&t.newURL||o.getLocationHref(),r=o.getHashByUrl(n),i=null,s=null,u=null,a;return o.isLastHash(r)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r),r&&o.isTraditionalAnchor(r)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(r||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),a=o.discardedState(i),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s.id;return o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),u===f?(o.busy(!1),!1):(o.saveState(s),c||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(u,l)&&!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&&o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s,l),u===f?(o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),o.saveState(s),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")})},typeof o.init!="undefined"&&o.init()}(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window);
RequireJS.define("js/vendor/history", function(){});

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/views/AccessView',[
        'jquery',
        'utility',
        'underscore',
        'underscore.string',
        'backbone',
        'js/student_account/models/LoginModel',
        'js/student_account/models/PasswordResetModel',
        'js/student_account/models/RegisterModel',
        'js/student_account/models/AccountRecoveryModel',
        'js/student_account/views/LoginView',
        'js/student_account/views/PasswordResetView',
        'js/student_account/views/RegisterView',
        'js/student_account/views/InstitutionLoginView',
        'js/student_account/views/HintedLoginView',
        'edx-ui-toolkit/js/utils/html-utils',
        'js/student_account/multiple_enterprise',
        'js/vendor/history'
    ],
        function($, utility, _, _s, Backbone, LoginModel, PasswordResetModel, RegisterModel, AccountRecoveryModel,
                 LoginView, PasswordResetView, RegisterView, InstitutionLoginView, HintedLoginView, HtmlUtils,
                 multipleEnterpriseInterface) {
            return Backbone.View.extend({
                tpl: '#access-tpl',
                events: {
                    'click .form-toggle': 'toggleForm'
                },
                subview: {
                    login: {},
                    register: {},
                    passwordHelp: {},
                    accountRecoveryHelp: {},
                    institutionLogin: {},
                    hintedLogin: {}
                },
                nextUrl: '/dashboard',
            // The form currently loaded
                activeForm: '',

                initialize: function(options) {
                /* Mix non-conflicting functions from underscore.string
                 * (all but include, contains, and reverse) into the
                 * Underscore namespace
                 */
                    _.mixin(_s.exports());
                    this.tpl = $(this.tpl).html();

                    this.activeForm = options.initial_mode || 'login';

                    this.thirdPartyAuth = options.third_party_auth || {
                        currentProvider: null,
                        providers: []
                    };

                    this.thirdPartyAuthHint = options.third_party_auth_hint || null;
                    this.edxUserInfoCookieName = options.edx_user_info_cookie_name || 'edx-user-info';

                    // Account activation messages
                    this.accountActivationMessages = options.account_activation_messages || [];
                    this.accountRecoveryMessages = options.account_recovery_messages || [];

                    if (options.login_redirect_url) {
                        this.nextUrl = options.login_redirect_url;
                    }

                    this.formDescriptions = {
                        login: options.login_form_desc,
                        register: options.registration_form_desc,
                        reset: options.password_reset_form_desc,
                        institution_login: null,
                        hinted_login: null
                    };
                    this.platformName = options.platform_name;
                    this.supportURL = options.support_link;
                    this.passwordResetSupportUrl = options.password_reset_support_link;
                    this.createAccountOption = options.account_creation_allowed;
                    this.hideAuthWarnings = options.hide_auth_warnings || false;
                    this.pipelineUserDetails = options.third_party_auth.pipeline_user_details;
                    this.enterpriseName = options.enterprise_name || '';
                    this.enterpriseSlugLoginURL = options.enterprise_slug_login_url || '';
                    this.isEnterpriseEnable = options.is_enterprise_enable || false;
                    this.isAccountRecoveryFeatureEnabled = options.is_account_recovery_feature_enabled || false;
                    this.is_require_third_party_auth_enabled = options.is_require_third_party_auth_enabled || false;
                    this.enable_coppa_compliance = options.enable_coppa_compliance;

                // The login view listens for 'sync' events from the reset model
                    this.resetModel = new PasswordResetModel({}, {
                        method: 'GET',
                        url: '#'
                    });

                    this.accountRecoveryModel = new AccountRecoveryModel({}, {
                        method: 'GET',
                        url: '#'
                    });

                    this.render();

                // Once the third party error message has been shown once,
                // there is no need to show it again, if the user changes mode:
                    this.thirdPartyAuth.errorMessage = null;

                    // Once the account activation/account recovery messages have been shown once,
                    // there is no need to show it again, if the user changes mode:
                    this.accountActivationMessages = [];
                    this.accountRecoveryMessages = [];
                },

                render: function() {
                    HtmlUtils.setHtml(
                        $(this.el),
                        HtmlUtils.HTML(
                            _.template(this.tpl)({
                                mode: this.activeForm
                            })
                        )
                    )
                    this.postRender();

                    return this;
                },

                postRender: function() {
                // get & check current url hash part & load form accordingly
                    if (Backbone.history.getHash() === 'forgot-password-modal') {
                        this.resetPassword();
                    }
                    this.loadForm(this.activeForm);
                },

                loadForm: function(type) {
                    var loadFunc;
                    if (type === 'reset') {
                        loadFunc = _.bind(this.load.login, this);
                        loadFunc(this.formDescriptions.login);
                    }
                    loadFunc = _.bind(this.load[type], this);
                    loadFunc(this.formDescriptions[type]);
                },

                load: {
                    login: function(data) {
                        var model = new LoginModel({}, {
                            method: data.method,
                            url: data.submit_url
                        });
                        var isTpaSaml = this.thirdPartyAuth && this.thirdPartyAuth.finishAuthUrl ?
                          this.thirdPartyAuth.finishAuthUrl.indexOf('tpa-saml') >= 0 : false;

                        this.subview.login = new LoginView({
                            fields: data.fields,
                            model: model,
                            resetModel: this.resetModel,
                            accountRecoveryModel: this.accountRecoveryModel,
                            thirdPartyAuth: this.thirdPartyAuth,
                            accountActivationMessages: this.accountActivationMessages,
                            accountRecoveryMessages: this.accountRecoveryMessages,
                            platformName: this.platformName,
                            supportURL: this.supportURL,
                            passwordResetSupportUrl: this.passwordResetSupportUrl,
                            createAccountOption: this.createAccountOption,
                            hideAuthWarnings: this.hideAuthWarnings,
                            pipelineUserDetails: this.pipelineUserDetails,
                            enterpriseName: this.enterpriseName,
                            enterpriseSlugLoginURL: this.enterpriseSlugLoginURL,
                            isEnterpriseEnable: this.isEnterpriseEnable,
                            is_require_third_party_auth_enabled: this.is_require_third_party_auth_enabled
                        });

                    // Listen for 'password-help' event to toggle sub-views
                        this.listenTo(this.subview.login, 'password-help', this.resetPassword);

                    // Listen for 'auth-complete' event so we can enroll/redirect the user appropriately.
                        if (this.isEnterpriseEnable == true && !isTpaSaml) {
                            this.listenTo(this.subview.login, 'auth-complete', this.loginComplete);
                        } else {
                            this.listenTo(this.subview.login, 'auth-complete', this.authComplete);
                        }
                    },

                    reset: function(data) {
                        this.resetModel.ajaxType = data.method;
                        this.resetModel.urlRoot = data.submit_url;

                        this.subview.passwordHelp = new PasswordResetView({
                            fields: data.fields,
                            model: this.resetModel
                        });

                    // Listen for 'password-email-sent' event to toggle sub-views
                        this.listenTo(this.subview.passwordHelp, 'password-email-sent', this.passwordEmailSent);

                    // Focus on the form
                        $('.password-reset-form').focus();
                    },

                    register: function(data) {
                        var model = new RegisterModel({}, {
                            method: data.method,
                            url: data.submit_url,
                            nextUrl: this.nextUrl
                        });

                        this.subview.register = new RegisterView({
                            fields: data.fields,
                            model: model,
                            thirdPartyAuth: this.thirdPartyAuth,
                            platformName: this.platformName,
                            hideAuthWarnings: this.hideAuthWarnings,
                            is_require_third_party_auth_enabled: this.is_require_third_party_auth_enabled,
                            enableCoppaCompliance: this.enable_coppa_compliance,
                        });

                    // Listen for 'auth-complete' event so we can enroll/redirect the user appropriately.
                        this.listenTo(this.subview.register, 'auth-complete', this.authComplete);
                    },

                    institution_login: function(unused) {
                        this.subview.institutionLogin = new InstitutionLoginView({
                            thirdPartyAuth: this.thirdPartyAuth,
                            platformName: this.platformName,
                            mode: this.activeForm
                        });

                        this.subview.institutionLogin.render();
                    },

                    hinted_login: function(unused) {
                        this.subview.hintedLogin = new HintedLoginView({
                            thirdPartyAuth: this.thirdPartyAuth,
                            hintedProvider: this.thirdPartyAuthHint,
                            platformName: this.platformName
                        });

                        this.subview.hintedLogin.render();
                    }
                },

                passwordEmailSent: function() {
                    var $loginAnchorElement = $('#login-form');
                    this.element.hide($(this.el).find('#password-reset-anchor'));
                    this.element.show($loginAnchorElement);
                    this.element.scrollTop($loginAnchorElement);
                },

                resetPassword: function() {
                    window.analytics.track('edx.bi.password_reset_form.viewed', {
                        category: 'user-engagement'
                    });

                    this.element.hide($(this.el).find('#login-form'));
                    this.loadForm('reset');
                    this.element.scrollTop($('#password-reset-anchor'));
                },

                toggleForm: function(e) {
                    var type = $(e.currentTarget).data('type'),
                        $form = $('#' + type + '-form'),
                        scrollX = window.scrollX,
                        scrollY = window.scrollY,
                        queryParams = url('?'),
                        queryStr = queryParams.length > 0 ? '?' + queryParams : '';

                    e.preventDefault();

                    window.analytics.track('edx.bi.' + type + '_form.toggled', {
                        category: 'user-engagement'
                    });

                // Load the form. Institution login is always refreshed since it changes based on the previous form.
                    if (!this.form.isLoaded($form) || type == 'institution_login') {

                        // We need a special case for loading reset form as there is mismatch of form id
                        // value ie 'password-reset' vs load function name ie 'reset'
                        if (type === 'password-reset') {
                            type = 'reset';
                        }
                        this.loadForm(type);
                    }
                    this.activeForm = type;

                    this.element.hide($(this.el).find('.submission-success'));
                    this.element.hide($(this.el).find('.form-wrapper'));
                    this.element.show($form);

                // Update url without reloading page
                    if (type != 'institution_login' && type != 'reset') {
                        History.pushState(null, document.title, '/' + type + queryStr);
                    }
                    analytics.page('login_and_registration', type);

                // Focus on the form
                    $('#' + type).focus();

               // Maintain original scroll position
                    window.scrollTo(scrollX, scrollY);
                },

            /**
             * Once authentication has completed successfully:
             *
             * If we're in a third party auth pipeline, we must complete the pipeline.
             * Otherwise, redirect to the specified next step.
             *
             */
                authComplete: function() {
                    if (this.thirdPartyAuth && this.thirdPartyAuth.finishAuthUrl) {
                        this.redirect(this.thirdPartyAuth.finishAuthUrl);
                    // Note: the third party auth URL likely contains another redirect URL embedded inside
                    } else {
                        this.redirect(this.nextUrl);
                    }
                },

            /**
            /**
             * Take a learner attached to multiple enterprises to the enterprise selection page:
             *
             */
                loginComplete: function() {
                    if (this.thirdPartyAuth && this.thirdPartyAuth.finishAuthUrl) {
                        multipleEnterpriseInterface.check(
                            this.thirdPartyAuth.finishAuthUrl,
                            this.edxUserInfoCookieName
                        );
                    // Note: the third party auth URL likely contains another redirect URL embedded inside
                    } else {
                        multipleEnterpriseInterface.check(this.nextUrl, this.edxUserInfoCookieName);
                    }
                },

            /**
             * Redirect to a URL.  Mainly useful for mocking out in tests.
             * @param  {string} url The URL to redirect to.
             */
                redirect: function(url) {
                    window.location.replace(url);
                },

                form: {
                    isLoaded: function($form) {
                        return $form.html().length > 0;
                    }
                },

            /* Helper method to toggle display
             * including accessibility considerations
             */
                element: {
                    hide: function($el) {
                        $el.addClass('hidden');
                    },

                    scrollTop: function($el) {
                    // Scroll to top of selected element
                        $('html,body').animate({
                            scrollTop: $el.offset().top
                        }, 'slow');
                    },

                    show: function($el) {
                        $el.removeClass('hidden');
                    }
                }
            });
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    RequireJS.define('js/student_account/logistration_factory',[
        'jquery',
        'js/student_account/views/AccessView'
    ],
        function($, AccessView) {
            return function(options) {
                var $logistrationElement = $('#login-and-registration-container');

                new AccessView(_.extend(options, {el: $logistrationElement}));
            };
        }
    );
}).call(this, define || RequireJS.define);

