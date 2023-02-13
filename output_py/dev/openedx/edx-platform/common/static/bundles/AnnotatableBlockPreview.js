(function(e, a) { for(var i in a) e[i] = a[i]; }(window, webpackJsonp([33],{

/***/ "./common/static/xmodule/modules/js/001-3ed86006526f75d6c844739193a84c11.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*** IMPORTS FROM imports-loader ***/
(function () {
  // Once generated by CoffeeScript 1.9.3, but now lives as pure JS

  /* eslint-disable */
  (function () {
    this.HTMLModule = function () {
      function HTMLModule(element) {
        this.element = element;
        this.el = $(this.element);
        JavascriptLoader.executeModuleScripts(this.el);
        Collapsible.setCollapsibles(this.el);

        if (typeof MathJax !== "undefined" && MathJax !== null) {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el[0]]);
        }

        if (typeof setupFullScreenModal !== "undefined" && setupFullScreenModal !== null) {
          setupFullScreenModal();
        }
      }

      HTMLModule.prototype.$ = function (selector) {
        return $(selector, this.el);
      };

      return HTMLModule;
    }();
  }).call(this);
}).call(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ "./common/static/xmodule/modules/js/002-e32c61651b0379c8503ad932a91e7651.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*** IMPORTS FROM imports-loader ***/
(function () {
  // Once generated by CoffeeScript 1.9.3, but now lives as pure JS

  /* eslint-disable */
  // TODO: Examine all of the xss-lint exceptions (https://openedx.atlassian.net/browse/PLAT-2084)
  (function () {
    var bind = function bind(fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };

    this.Annotatable = function () {
      Annotatable.prototype._debug = false;
      /*
      selectors for the annotatable xmodule
       */

      Annotatable.prototype.wrapperSelector = '.annotatable-wrapper';
      Annotatable.prototype.toggleAnnotationsSelector = '.annotatable-toggle-annotations';
      Annotatable.prototype.toggleInstructionsSelector = '.annotatable-toggle-instructions';
      Annotatable.prototype.instructionsSelector = '.annotatable-instructions';
      Annotatable.prototype.sectionSelector = '.annotatable-section';
      Annotatable.prototype.spanSelector = '.annotatable-span';
      Annotatable.prototype.replySelector = '.annotatable-reply';
      /*
      these selectors are for responding to events from the annotation capa problem type
       */

      Annotatable.prototype.problemXModuleSelector = '.xmodule_CapaModule';
      Annotatable.prototype.problemSelector = 'div.problem';
      Annotatable.prototype.problemInputSelector = 'div.problem .annotation-input';
      Annotatable.prototype.problemReturnSelector = 'div.problem .annotation-return';

      function Annotatable(el) {
        this.onMoveTip = bind(this.onMoveTip, this);
        this.onShowTip = bind(this.onShowTip, this);
        this.onClickReturn = bind(this.onClickReturn, this);
        this.onClickReply = bind(this.onClickReply, this);
        this.onClickToggleInstructions = bind(this.onClickToggleInstructions, this);
        this.onClickToggleAnnotations = bind(this.onClickToggleAnnotations, this);

        if (this._debug) {
          console.log('loaded Annotatable');
        }

        this.el = el;
        this.$el = $(el);
        this.init();
      }

      Annotatable.prototype.$ = function (selector) {
        return $(selector, this.el);
      };

      Annotatable.prototype.init = function () {
        this.initEvents();
        return this.initTips();
      };

      Annotatable.prototype.initEvents = function () {
        /*
        Initialize toggle handlers for the instructions and annotations sections
         */
        var ref;
        ref = [false, false], this.annotationsHidden = ref[0], this.instructionsHidden = ref[1];
        this.$(this.toggleAnnotationsSelector).bind('click', this.onClickToggleAnnotations);
        this.$(this.toggleInstructionsSelector).bind('click', this.onClickToggleInstructions);
        /*
        Initialize handler for 'reply to annotation' events that scroll to
        the associated problem. The reply buttons are part of the tooltip
        content. It's important that the tooltips be configured to render
        as descendants of the annotation module and *not* the document.body.
         */

        this.$el.on('click', this.replySelector, this.onClickReply);
        /*
        Initialize handler for 'return to annotation' events triggered from problems.
          1) There are annotationinput capa problems rendered on the page
          2) Each one has an embedded return link (see annotation capa problem template).
        Since the capa problem injects HTML content via AJAX, the best we can do is
        is let the click events bubble up to the body and handle them there.
         */

        return $(document).on('click', this.problemReturnSelector, this.onClickReturn);
      };

      Annotatable.prototype.initTips = function () {
        /*
        tooltips are used to display annotations for highlighted text spans
         */
        return this.$(this.spanSelector).each(function (_this) {
          return function (index, el) {
            return $(el).qtip(_this.getSpanTipOptions(el));
          };
        }(this));
      };

      Annotatable.prototype.getSpanTipOptions = function (el) {
        return {
          content: {
            title: {
              text: this.makeTipTitle(el)
            },
            text: this.makeTipContent(el)
          },
          position: {
            /*
            of tooltip
             */
            my: 'bottom center',

            /*
            of target
             */
            at: 'top center',

            /*
            where the tooltip was triggered (i.e. the annotation span)
             */
            target: $(el),
            container: this.$(this.wrapperSelector),
            adjust: {
              y: -5
            }
          },
          show: {
            event: 'click mouseenter',
            solo: true
          },
          hide: {
            event: 'click mouseleave',
            delay: 500,

            /*
            don't hide the tooltip if it is moused over
             */
            fixed: true
          },
          style: {
            classes: 'ui-tooltip-annotatable'
          },
          events: {
            show: this.onShowTip,
            move: this.onMoveTip
          }
        };
      };

      Annotatable.prototype.onClickToggleAnnotations = function (e) {
        return this.toggleAnnotations();
      };

      Annotatable.prototype.onClickToggleInstructions = function (e) {
        return this.toggleInstructions();
      };

      Annotatable.prototype.onClickReply = function (e) {
        return this.replyTo(e.currentTarget);
      };

      Annotatable.prototype.onClickReturn = function (e) {
        return this.returnFrom(e.currentTarget);
      };

      Annotatable.prototype.onShowTip = function (event, api) {
        if (this.annotationsHidden) {
          return event.preventDefault();
        }
      };

      Annotatable.prototype.onMoveTip = function (event, api, position) {
        /*
        This method handles a vertical positioning bug in Firefox as
        well as an edge case in which a tooltip is displayed above a
        non-overlapping span like this:
        
                             (( TOOLTIP ))
                                  \/
        text text text ... text text text ...... <span span span>
        <span span span>
        
        The problem is that the tooltip looks disconnected from both spans, so
        we should re-position the tooltip to appear above the span.
         */
        var adjust_y, container, container_offset, focus_rect, is_non_overlapping, offset_left, offset_top, rect_center, rect_top, rects, ref, ref1, ref2, target, tip, tip_height, tip_left, tip_top, tip_width, win_width;
        tip = api.elements.tooltip;
        adjust_y = ((ref = api.options.position) != null ? (ref1 = ref.adjust) != null ? ref1.y : void 0 : void 0) || 0;
        container = ((ref2 = api.options.position) != null ? ref2.container : void 0) || $('body');
        target = api.elements.target;
        rects = $(target).get(0).getClientRects();
        is_non_overlapping = (rects != null ? rects.length : void 0) === 2 && rects[0].left > rects[1].right;

        if (is_non_overlapping) {
          /*
          we want to choose the largest of the two non-overlapping spans and display
          the tooltip above the center of it (see api.options.position settings)
           */
          focus_rect = rects[0].width > rects[1].width ? rects[0] : rects[1];
        } else {
          /*
          always compute the new position because Firefox doesn't
          properly vertically position the tooltip
           */
          focus_rect = rects[0];
        }

        rect_center = focus_rect.left + focus_rect.width / 2;
        rect_top = focus_rect.top;
        tip_width = $(tip).width();
        tip_height = $(tip).height();
        /*
        tooltip is positioned relative to its container, so we need to factor in offsets
         */

        container_offset = $(container).offset();
        offset_left = -container_offset.left;
        offset_top = $(document).scrollTop() - container_offset.top;
        tip_left = offset_left + rect_center - tip_width / 2;
        tip_top = offset_top + rect_top - tip_height + adjust_y;
        /*
        make sure the new tip position doesn't clip the edges of the screen
         */

        win_width = $(window).width();

        if (tip_left < offset_left) {
          tip_left = offset_left;
        } else if (tip_left + tip_width > win_width + offset_left) {
          tip_left = win_width + offset_left - tip_width;
        }
        /*
        final step: update the position object (used by qtip2 to show the tip after the move event)
         */


        return $.extend(position, {
          'left': tip_left,
          'top': tip_top
        });
      };

      Annotatable.prototype.getSpanForProblemReturn = function (el) {
        var problem_id;
        problem_id = $(this.problemReturnSelector).index(el);
        return this.$(this.spanSelector).filter("[data-problem-id='" + problem_id + "']");
      };

      Annotatable.prototype.getProblem = function (el) {
        var problem_id;
        problem_id = this.getProblemId(el);
        return $(this.problemInputSelector).eq(problem_id);
      };

      Annotatable.prototype.getProblemId = function (el) {
        return $(el).data('problem-id');
      };

      Annotatable.prototype.toggleAnnotations = function () {
        var hide;
        hide = this.annotationsHidden = !this.annotationsHidden;
        this.toggleAnnotationButtonText(hide);
        this.toggleSpans(hide);
        return this.toggleTips(hide);
      };

      Annotatable.prototype.toggleTips = function (hide) {
        var visible;
        visible = this.findVisibleTips();
        return this.hideTips(visible);
      };

      Annotatable.prototype.toggleAnnotationButtonText = function (hide) {
        var buttonText;

        if (hide) {
          buttonText = gettext('Show Annotations');
        } else {
          buttonText = gettext('Hide Annotations');
        }

        return this.$(this.toggleAnnotationsSelector).text(buttonText);
      };

      Annotatable.prototype.toggleInstructions = function () {
        var hide;
        hide = this.instructionsHidden = !this.instructionsHidden;
        this.toggleInstructionsButton(hide);
        return this.toggleInstructionsText(hide);
      };

      Annotatable.prototype.toggleInstructionsButton = function (hide) {
        var cls, txt;

        if (hide) {
          txt = gettext('Expand Instructions');
        } else {
          txt = gettext('Collapse Instructions');
        }

        cls = hide ? ['expanded', 'collapsed'] : ['collapsed', 'expanded'];
        return this.$(this.toggleInstructionsSelector).text(txt).removeClass(cls[0]).addClass(cls[1]);
      };

      Annotatable.prototype.toggleInstructionsText = function (hide) {
        var slideMethod;
        slideMethod = hide ? 'slideUp' : 'slideDown';
        return this.$(this.instructionsSelector)[slideMethod]();
      };

      Annotatable.prototype.toggleSpans = function (hide) {
        return this.$(this.spanSelector).toggleClass('hide', hide, 250);
      };

      Annotatable.prototype.replyTo = function (buttonEl) {
        var el, offset;
        offset = -20;
        el = this.getProblem(buttonEl);

        if (el.length > 0) {
          return this.scrollTo(el, this.afterScrollToProblem, offset);
        } else {
          if (this._debug) {
            return console.log('problem not found. event: ', e);
          }
        }
      };

      Annotatable.prototype.returnFrom = function (buttonEl) {
        var el, offset;
        offset = -200;
        el = this.getSpanForProblemReturn(buttonEl);

        if (el.length > 0) {
          return this.scrollTo(el, this.afterScrollToSpan, offset);
        } else {
          if (this._debug) {
            return console.log('span not found. event:', e);
          }
        }
      };

      Annotatable.prototype.scrollTo = function (el, after, offset) {
        if (offset == null) {
          offset = -20;
        }

        if ($(el).length > 0) {
          return $('html,body').scrollTo(el, {
            duration: 500,
            onAfter: this._once(function (_this) {
              return function () {
                return after != null ? after.call(_this, el) : void 0;
              };
            }(this)),
            offset: offset
          });
        }
      };

      Annotatable.prototype.afterScrollToProblem = function (problem_el) {
        return problem_el.effect('highlight', {}, 500);
      };

      Annotatable.prototype.afterScrollToSpan = function (span_el) {
        return span_el.addClass('selected', 400, 'swing', function () {
          return span_el.removeClass('selected', 400, 'swing');
        });
      };

      Annotatable.prototype.makeTipContent = function (el) {
        return function (_this) {
          return function (api) {
            var comment, problem_id, reply, text;
            text = $(el).data('comment-body');
            comment = _this.createComment(text);
            problem_id = _this.getProblemId(el);
            reply = _this.createReplyLink(problem_id);
            return $(comment).add(reply);
          };
        }(this);
      };

      Annotatable.prototype.makeTipTitle = function (el) {
        return function (_this) {
          return function (api) {
            var title;
            title = $(el).data('comment-title');

            if (title) {
              return title;
            } else {
              return gettext('Commentary');
            }
          };
        }(this);
      };

      Annotatable.prototype.createComment = function (text) {
        return $("<div class=\"annotatable-comment\">" + text + "</div>"); // xss-lint: disable=javascript-concat-html
      };

      Annotatable.prototype.createReplyLink = function (problem_id) {
        var linktxt;
        linktxt = gettext('Reply to Annotation');
        return $("<a class=\"annotatable-reply\" href=\"javascript:void(0);\" data-problem-id=\"" + problem_id + "\">" + linktxt + "</a>"); // xss-lint: disable=javascript-concat-html
      };

      Annotatable.prototype.findVisibleTips = function () {
        var visible;
        visible = [];
        this.$(this.spanSelector).each(function (index, el) {
          var api, tip;
          api = $(el).qtip('api');
          tip = $(api != null ? api.elements.tooltip : void 0);

          if (tip.is(':visible')) {
            return visible.push(el);
          }
        });
        return visible;
      };

      Annotatable.prototype.hideTips = function (elements) {
        return $(elements).qtip('hide');
      };

      Annotatable.prototype._once = function (fn) {
        var done;
        done = false;
        return function (_this) {
          return function () {
            if (!done) {
              fn.call(_this);
            }

            return done = true;
          };
        }(this);
      };

      return Annotatable;
    }();
  }).call(this);
}).call(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ "./common/static/xmodule/modules/js/003-3918b2d4f383c04fed8227cc9f523d6e.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*** IMPORTS FROM imports-loader ***/
(function () {
  (function () {
    'use strict';

    this.JavascriptLoader = function () {
      function JavascriptLoader() {}
      /**
       * Set of library functions that provide common interface for javascript loading
       * for all module types. All functionality provided by JavascriptLoader should take
       * place at module scope, i.e. don't run jQuery over entire page.
       *
       * executeModuleScripts:
       *     Scan the module ('el') for "script_placeholder"s, then:
       *
       *     1) Fetch each script from server
       *     2) Explicitly attach the script to the <head> of document
       *     3) Explicitly wait for each script to be loaded
       *     4) Return to callback function when all scripts loaded
       */


      JavascriptLoader.executeModuleScripts = function (el, callback) {
        var callbackCalled, completed, completionHandlerGenerator, loaded, placeholders;

        if (!callback) {
          callback = null; // eslint-disable-line no-param-reassign
        }

        placeholders = el.find('.script_placeholder');

        if (placeholders.length === 0) {
          if (callback !== null) {
            callback();
          }

          return [];
        } // TODO: Verify the execution order of multiple placeholders


        completed = function () {
          var i, ref, results;
          results = [];

          for (i = 1, ref = placeholders.length; ref >= 1 ? i <= ref : i >= ref; ref >= 1 ? ++i : --i) {
            results.push(false);
          }

          return results;
        }();

        callbackCalled = false;

        completionHandlerGenerator = function completionHandlerGenerator(index) {
          return function () {
            var allComplete, flag, i, len;
            allComplete = true;
            completed[index] = true;

            for (i = 0, len = completed.length; i < len; i++) {
              flag = completed[i];

              if (!flag) {
                allComplete = false;
                break;
              }
            }

            if (allComplete && !callbackCalled) {
              callbackCalled = true;

              if (callback !== null) {
                return callback();
              }
            }

            return undefined;
          };
        }; // Keep a map of what sources we're loaded from, and don't do it twice.


        loaded = {};
        return placeholders.each(function (index, placeholder) {
          var s, src; // TODO: Check if the script already exists in DOM. If so, (1) copy it
          // into memory; (2) delete the DOM script element; (3) reappend it.
          // This would prevent memory bloat and save a network request.

          src = $(placeholder).attr('data-src');

          if (!(src in loaded)) {
            loaded[src] = true;
            s = document.createElement('script');
            s.setAttribute('src', src);
            s.setAttribute('type', 'text/javascript');
            s.onload = completionHandlerGenerator(index); // Need to use the DOM elements directly or the scripts won't execute properly.

            $('head')[0].appendChild(s);
          } else {
            // just call the completion callback directly, without reloading the file
            completionHandlerGenerator(index)();
          }

          return $(placeholder).remove();
        });
      };

      return JavascriptLoader;
    }();
  }).call(this);
}).call(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ "./common/static/xmodule/modules/js/004-b3206f2283964743c4772b9d72c67d64.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, __webpack_provided_edx_dot_HtmlUtils) {/*** IMPORTS FROM imports-loader ***/
(function () {
  (function (undefined) {
    'use strict'; // [module Collapsible]
    //
    // [description]
    //     Set of library functions that provide a simple way to add
    //     collapsible functionality to elements.

    this.Collapsible = {
      setCollapsibles: setCollapsibles,
      toggleFull: toggleFull,
      toggleHint: toggleHint
    };
    return; // [function setCollapsibles]
    //
    // [description]
    //     Scan element's content for generic collapsible containers.
    //
    // [params]
    //     el: container

    function setCollapsibles(el) {
      var linkBottom, linkTop, short_custom;
      linkTop = '<a href="#" class="full full-top">See full output</a>';
      linkBottom = '<a href="#" class="full full-bottom">See full output</a>'; // Standard longform + shortfom pattern.

      el.find('.longform').hide();
      el.find('.shortform').append(linkTop, linkBottom); // xss-lint: disable=javascript-jquery-append
      // Custom longform + shortform text pattern.

      short_custom = el.find('.shortform-custom'); // Set up each one individually.

      short_custom.each(function (index, elt) {
        var close_text, open_text;
        open_text = $(elt).data('open-text');
        close_text = $(elt).data('close-text');
        __webpack_provided_edx_dot_HtmlUtils.append($(elt), __webpack_provided_edx_dot_HtmlUtils.joinHtml(__webpack_provided_edx_dot_HtmlUtils.HTML("<a href='#' class='full-custom'>"), gettext(open_text), __webpack_provided_edx_dot_HtmlUtils.HTML('</a>')));
        $(elt).find('.full-custom').click(function (event) {
          Collapsible.toggleFull(event, open_text, close_text);
        });
      }); // Collapsible pattern.

      el.find('.collapsible header + section').hide(); // Set up triggers.

      el.find('.full').click(function (event) {
        Collapsible.toggleFull(event, 'See full output', 'Hide output');
      });
      el.find('.collapsible header a').click(Collapsible.toggleHint);
    } // [function toggleFull]
    //
    // [description]
    //     Toggle the display of full text for a collapsible element.
    //
    // [params]
    //     event: jQuery event object associated with the event that
    //         triggered this callback function.
    //     open_text: text that should be displayed when the collapsible
    //         is open.
    //     close_text: text that should be displayed when the collapsible
    //         is closed.


    function toggleFull(event, open_text, close_text) {
      var $el, new_text, parent;
      event.preventDefault();
      parent = $(event.target).parent();
      parent.siblings().slideToggle();
      parent.parent().toggleClass('open');

      if ($(event.target).text() === open_text) {
        new_text = close_text;
      } else {
        new_text = open_text;
      }

      if ($(event.target).hasClass('full')) {
        $el = parent.find('.full');
      } else {
        $el = $(event.target);
      }

      $el.text(new_text);
    } // [function toggleHint]
    //
    // [description]
    //     Toggle the collapsible open to show the hint.
    //
    // [params]
    //     event: jQuery event object associated with the event that
    //         triggered this callback function.


    function toggleHint(event) {
      event.preventDefault();
      $(event.target).parent().siblings().slideToggle();
      $(event.target).parent().parent().toggleClass('open');
    }
  }).call(this);
}).call(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js")))

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./common/static/xmodule/modules/js/000-b82f6c436159f6bc7ca2513e29e82503.js");
__webpack_require__("./common/static/xmodule/modules/js/001-3ed86006526f75d6c844739193a84c11.js");
__webpack_require__("./common/static/xmodule/modules/js/002-e32c61651b0379c8503ad932a91e7651.js");
__webpack_require__("./common/static/xmodule/modules/js/003-3918b2d4f383c04fed8227cc9f523d6e.js");
module.exports = __webpack_require__("./common/static/xmodule/modules/js/004-b3206f2283964743c4772b9d72c67d64.js");


/***/ })

},[16])));
//# sourceMappingURL=AnnotatableBlockPreview.js.map