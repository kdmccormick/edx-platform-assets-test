(function(t){"use strict";RequireJS.define("js/groups/models/cohort",["backbone"],function(t){var e=t.Model.extend({idAttribute:"id",defaults:{name:"",user_count:0,assignment_type:"",user_partition_id:null,group_id:null}});return e})}).call(this,define||RequireJS.define),function(t){var e=t.Model.extend({defaults:{type:"confirmation",title:"",message:"",details:[],actionText:null,actionClass:"",actionIconClass:"",actionCallback:null}});this.NotificationModel=e}.call(this,Backbone),RequireJS.define("js/models/notification",function(){}),function(t,e,o){var i=t.View.extend({events:{"click .action-primary":"triggerCallback"},initialize:function(){this.template=o.template(e("#notification-tpl").text())},render:function(){return this.$el.html(this.template({type:this.model.get("type"),title:this.model.get("title"),message:this.model.get("message"),details:this.model.get("details"),actionText:this.model.get("actionText"),actionClass:this.model.get("actionClass"),actionIconClass:this.model.get("actionIconClass")})),this.$(".message").focus(),this},triggerCallback:function(t){t.preventDefault();var e=this.model.get("actionCallback");e&&e(this)}});this.NotificationView=i}.call(this,Backbone,$,_),RequireJS.define("js/views/notification",function(){}),function(t){"use strict";RequireJS.define("js/groups/views/cohort_form",["jquery","underscore","backbone","gettext","edx-ui-toolkit/js/utils/html-utils","js/models/notification","js/views/notification"],function(t,e,o,i,n){var s=o.View.extend({events:{"change .cohort-management-details-association-course input":"onRadioButtonChange"},initialize:function(e){this.template=n.template(t("#cohort-form-tpl").text()),this.contentGroups=e.contentGroups,this.context=e.context},showNotification:function(t,e){var o=new NotificationModel(t);this.removeNotification(),this.notification=new NotificationView({model:o}),e.before(this.notification.$el),this.notification.render()},removeNotification:function(){this.notification&&this.notification.remove()},render:function(){return n.setHtml(this.$el,this.template({cohort:this.model,isDefaultCohort:this.isDefault(this.model.get("name")),contentGroups:this.contentGroups,studioGroupConfigurationsUrl:this.context.studioGroupConfigurationsUrl,isCcxEnabled:this.context.isCcxEnabled})),this},isDefault:function(t){var o=this.model.collection;if(e.isUndefined(o))return!1;var i=o.where({assignment_type:"random"});return 1===i.length&&i[0].get("name")===t},onRadioButtonChange:function(e){var o=t(e.currentTarget),i="yes"===o.val();i||this.$(".input-cohort-group-association").val(null),this.$(".input-cohort-group-association").prop("disabled",!i)},hasAssociatedContentGroup:function(){return this.$(".radio-yes").prop("checked")},getSelectedContentGroup:function(){var t,o,i,n,s,r=this.$(".input-cohort-group-association").val();if(!this.hasAssociatedContentGroup()||e.isNull(r))return null;for(t=r.split(":"),o=parseInt(t[0]),i=parseInt(t[1]),n=0;n<this.contentGroups.length;n++)if(s=this.contentGroups[n],s.get("id")===o&&s.get("user_partition_id")===i)return s;return null},getUpdatedCohortName:function(){var t=this.$(".cohort-name").val();return t?t.trim():""},getAssignmentType:function(){return this.$('input[name="cohort-assignment-type"]:checked').val()},showMessage:function(t,e,o){this.showNotification({type:e||"confirmation",title:t,details:o},this.$(".form-fields"))},validate:function(t){var o;return o=[],t.name||o.push(i("You must specify a name for the cohort")),this.hasAssociatedContentGroup()&&null===t.group_id&&(e.isNull(this.$(".input-cohort-group-association").val())?o.push(i("You did not select a content group")):o.push(i("The selected content group does not exist"))),o},saveForm:function(){var o,n,s,r,a,c=this,l=this.model,h=t.Deferred(),d=!e.isUndefined(this.model.id);return a=function(t,e){c.showMessage(t,"error",e)},this.removeNotification(),n=this.getSelectedContentGroup(),s=this.getAssignmentType(),o={name:this.getUpdatedCohortName(),group_id:n?n.id:null,user_partition_id:n?n.get("user_partition_id"):null,assignment_type:s},r=this.validate(o),r.length>0?(a(i(d?"The cohort cannot be saved":"The cohort cannot be added"),r),h.reject()):l.save(o,{patch:d,wait:!0}).done(function(t){l.id=t.id,c.render(),h.resolve()}).fail(function(t){var e=null;try{var o=JSON.parse(t.responseText);e=o.error}catch(n){}e||(e=i("We've encountered an error. Refresh your browser and then try again.")),a(e),h.reject()}),h.promise()}});return s})}.call(this,define||RequireJS.define),function(t){var e=function(e,o,i,n){var s=1===i?e:o;return t.template(s,{interpolate:/\{(.+?)\}/g})(n)};this.interpolate_ntext=e;var o=function(e,o){return t.template(e,{interpolate:/\{(.+?)\}/g})(o)};this.interpolate_text=o}.call(this,_),RequireJS.define("string_utils",["underscore"],function(t){return function(){var e;return e||t.interpolate_text}}(this)),function(t){"use strict";RequireJS.define("js/groups/views/cohort_editor",["backbone","underscore","jquery","gettext","js/groups/views/cohort_form","edx-ui-toolkit/js/utils/html-utils","string_utils","js/models/notification","js/views/notification"],function(t,e,o,i,n,s){var r=t.View.extend({events:{"click .wrapper-tabs .tab":"selectTab","click .tab-content-settings .action-save":"saveSettings","click .tab-content-settings .action-cancel":"cancelSettings","submit .cohort-management-group-add-form":"addStudents"},initialize:function(t){this.template=s.template(o("#cohort-editor-tpl").text()),this.groupHeaderTemplate=s.template(o("#cohort-group-header-tpl").text()),this.cohorts=t.cohorts,this.contentGroups=t.contentGroups,this.context=t.context},errorNotifications:null,confirmationNotifications:null,preassignedNotifications:null,render:function(){return s.setHtml(this.$el,this.template({cohort:this.model})),this.renderGroupHeader(),this.cohortFormView=new n({model:this.model,contentGroups:this.contentGroups,context:this.context}),this.cohortFormView.render(),this.$(".tab-content-settings").append(this.cohortFormView.$el),this},renderGroupHeader:function(){s.setHtml(this.$(".cohort-management-group-header"),this.groupHeaderTemplate({cohort:this.model}))},selectTab:function(t){var e=o(t.currentTarget),n=e.data("tab");t.preventDefault(),this.$(".wrapper-tabs .tab").removeClass("is-selected"),this.$(".wrapper-tabs .tab").find("span.sr").remove(),e.addClass("is-selected"),edx.HtmlUtils.prepend(o(e.find("a")),edx.HtmlUtils.interpolateHtml('<span class="sr"> {selectedTab} </span>',{selectedTab:i("Selected tab")})),this.$(".tab-content").addClass("is-hidden"),this.$(".tab-content-"+n).removeClass("is-hidden").focus()},saveSettings:function(t){var e=this.cohortFormView,o=this;t.preventDefault(),e.saveForm().done(function(){o.renderGroupHeader(),e.showMessage(i("Saved cohort"))})},cancelSettings:function(t){t.preventDefault(),this.render()},setCohort:function(t){this.model=t,this.render()},addStudents:function(t){t.preventDefault();var e=this,n=this.cohorts,s=this.$(".cohort-management-group-add-students"),r=this.model.url()+"/add",a=s.val().trim(),c=this.model.id;a.length>0?o.post(r,{users:a}).done(function(t){e.refreshCohorts().done(function(){var o=n.get(c);e.setCohort(o),e.addNotifications(t),t.unknown.length>0&&e.$(".cohort-management-group-add-students").val(a)})}).fail(function(){e.showErrorMessage(i("Error adding learners."),!0)}):(e.showErrorMessage(i("Enter a username or email."),!0),s.val(""))},refreshCohorts:function(){return this.cohorts.fetch()},undelegateViewEvents:function(t){t&&t.undelegateEvents()},showErrorMessage:function(t,e,o){e&&this.confirmationNotifications&&(this.undelegateViewEvents(this.confirmationNotifications),this.confirmationNotifications.$el.html(""),this.confirmationNotifications=null),void 0===o&&(o=new NotificationModel),o.set("type","error"),o.set("title",t),this.undelegateViewEvents(this.errorNotifications),this.errorNotifications=new NotificationView({el:this.$(".cohort-errors"),model:o}),this.errorNotifications.render()},addNotifications:function(t){var o,n,s,r,a,c,l,h,d,u,f,m=5;if(this.undelegateViewEvents(this.confirmationNotifications),a=t.added.length+t.changed.length,r=t.present.length,c=t.preassigned.length,n="",a>0||r>0){n+=interpolate_text(ngettext("{numUsersAdded} learner has been added to this cohort. ","{numUsersAdded} learners have been added to this cohort. ",a),{numUsersAdded:a});var p={};e.each(t.changed,function(t){o=t.previous_cohort,o in p?p[o]=p[o]+1:p[o]=1}),s=[],e.each(p,function(t,e){s.push(interpolate_text(ngettext("{numMoved} learner was moved from {prevCohort}","{numMoved} learners were moved from {prevCohort}",t),{numMoved:t,prevCohort:e}))}),r>0&&s.push(interpolate_text(ngettext("{numPresent} learner was already in the cohort","{numPresent} learners were already in the cohort",r),{numPresent:r})),this.confirmationNotifications=new NotificationView({el:this.$(".cohort-confirmations"),model:new NotificationModel({type:"confirmation",title:n,details:s})}),this.confirmationNotifications.render()}else this.confirmationNotifications&&(this.confirmationNotifications.$el.html(""),this.confirmationNotifications=null);if(this.undelegateViewEvents(this.preassignedNotifications),c>0){for(s=[],f=0;f<t.preassigned.length;f++)s.push(interpolate_text(i("{email}"),{email:t.preassigned[f]}));n=interpolate_text(ngettext("{numPreassigned} learner was pre-assigned for this cohort. This learner will automatically be added to the cohort when they enroll in the course.","{numPreassigned} learners were pre-assigned for this cohort. These learners will automatically be added to the cohort when they enroll in the course.",c),{numPreassigned:c}),this.preassignedNotifications=new NotificationView({el:this.$(".cohort-preassigned"),model:new NotificationModel({type:"warning",title:n,details:s})}),this.preassignedNotifications.render()}else this.preassignedNotifications&&(this.preassignedNotifications.$el.html(""),this.preassignedNotifications=null);this.undelegateViewEvents(this.errorNotifications),l=t.unknown.length+t.invalid.length+t.not_allowed.length,l>0?(h=function(t,e,o,n){var r=n?t.length:Math.min(m,t.length),a=n?e.length:Math.min(m-t.length,e.length),c=n?o.length:Math.min(m-o.length,o.length);for(s=[],f=0;r>f;f++)s.push(interpolate_text(i("Unknown username: {user}"),{user:t[f]}));for(f=0;a>f;f++)s.push(interpolate_text(i("Invalid email address: {email}"),{email:e[f]}));for(f=0;c>f;f++)s.push(interpolate_text(i("Cohort assignment not allowed: {email_or_username}"),{email_or_username:o[f]}));return s},n=interpolate_text(ngettext("There was an error when trying to add learners:","{numErrors} learners could not be added to this cohort:",l),{numErrors:l}),s=h(t.unknown,t.invalid,t.not_allowed,!1),d=function(e){e.model.set("actionText",null),e.model.set("details",h(t.unknown,t.invalid,t.not_allowed,!0)),e.render()},u=new NotificationModel({details:s,actionText:l>m?i("View all errors"):null,actionCallback:d,actionClass:"action-expand"}),this.showErrorMessage(n,!1,u)):this.errorNotifications&&(this.errorNotifications.$el.html(""),this.errorNotifications=null)}});return r})}.call(this,define||RequireJS.define),function(t){"use strict";RequireJS.define("js/groups/views/course_cohort_settings_notification",["jquery","underscore","backbone","gettext","edx-ui-toolkit/js/utils/html-utils"],function(t,e,o,i,n){var s=o.View.extend({initialize:function(e){this.template=n.template(t("#cohort-state-tpl").text()),this.cohortEnabled=e.cohortEnabled},render:function(){return n.setHtml(this.$el,this.template({})),this.showCohortStateMessage(),this},showCohortStateMessage:function(){var t=this.$(".action-toggle-message");AnimationUtil.triggerAnimation(t),this.cohortEnabled?t.text(i("Cohorts Enabled")):t.text(i("Cohorts Disabled"))}});return s})}.call(this,define||RequireJS.define),function(t){"use strict";RequireJS.define("js/views/base_dashboard_view",["jquery","backbone"],function(t,e){var o=e.View.extend({pubSub:t.extend({},e.Events)});return o})}.call(this,define||RequireJS.define),function(t,e,o,i,n,s,r){var a=t.View.extend({initialize:function(t){this.template=o.template(e("#file-upload-tpl").text()),this.options=t},render:function(){var t,e,o=this.options,n=function(t,e){var i=o[t];return i||e};return this.$el.html(this.template({title:n("title",""),inputLabel:n("inputLabel",""),inputTip:n("inputTip",""),extensions:n("extensions",""),submitButtonText:n("submitButtonText",i("Upload File")),url:n("url","")})),t=this.$el.find(".submit-file-button"),e=this.$el.find(".result"),this.$el.find("#file-upload-form").fileupload({dataType:"json",type:"POST",done:this.successHandler.bind(this),fail:this.errorHandler.bind(this),autoUpload:!1,replaceFileInput:!1,add:function(o,i){i.files[0];t.removeClass("is-disabled").attr("aria-disabled",!1),t.unbind("click"),t.click(function(t){t.preventDefault(),i.submit()}),e.html("")}}),this},successHandler:function(t,e){var o,a=e.files[0].name;o=this.options.successNotification?this.options.successNotification(a,t,e):new s({type:"confirmation",title:n(i("Your upload of '{file}' succeeded."),{file:a})});var c=new r({el:this.$(".result"),model:o});c.render()},errorHandler:function(t,e){var o,a=e.files[0].name,c=null,l=e.response().jqXHR;if(this.options.errorNotification)o=this.options.errorNotification(a,t,e);else{if(l.responseText)try{c=JSON.parse(l.responseText).error}catch(h){}c||(c=n(i("Your upload of '{file}' failed."),{file:a})),o=new s({type:"error",title:c})}var d=new r({el:this.$(".result"),model:o});d.render()}});this.FileUploaderView=a}.call(this,Backbone,$,_,gettext,interpolate_text,NotificationModel,NotificationView),RequireJS.define("js/views/file_uploader",function(){}),function(t){"use strict";RequireJS.define("js/groups/views/cohorts",["jquery","underscore","backbone","gettext","js/groups/models/cohort","js/groups/views/cohort_editor","js/groups/views/cohort_form","js/groups/views/course_cohort_settings_notification","edx-ui-toolkit/js/utils/html-utils","js/views/base_dashboard_view","js/views/file_uploader","js/models/notification","js/views/notification","string_utils"],function(t,e,o,i,n,s,r,a,c,l){var h="hidden",d="is-disabled",u=".cohorts-state",f=l.extend({events:{"change .cohort-select":"onCohortSelected","change .cohorts-state":"onCohortsEnabledChanged","click .action-create":"showAddCohortForm","click .cohort-management-add-form .action-save":"saveAddCohortForm","click .cohort-management-add-form .action-cancel":"cancelAddCohortForm","click .link-cross-reference":"showSection","click .toggle-cohort-management-secondary":"showCsvUpload"},initialize:function(e){var o=this.model;this.template=c.template(t("#cohorts-tpl").text()),this.selectorTemplate=c.template(t("#cohort-selector-tpl").text()),this.context=e.context,this.contentGroups=e.contentGroups,this.cohortSettings=e.cohortSettings,o.on("sync",this.onSync,this),t(this.getSectionCss("cohort_management")).click(function(){o.fetch()})},render:function(){return c.setHtml(this.$el,this.template({cohorts:this.model.models,cohortsEnabled:this.cohortSettings.get("is_cohorted")})),this.onSync(),this},renderSelector:function(t){c.setHtml(this.$(".cohort-select"),this.selectorTemplate({cohorts:this.model.models,selectedCohort:t}))},renderCourseCohortSettingsNotificationView:function(){var e=new a({el:t(".cohort-state-message"),cohortEnabled:this.getCohortsEnabled()});e.render()},onSync:function(t,e,o){var n,s=this.lastSelectedCohortId&&this.model.get(this.lastSelectedCohortId),r=this.model.length>0,a=this.$(".cohort-management-nav"),c=this.$(".wrapper-cohort-supplemental");n=function(){return o&&o.patch&&e.hasOwnProperty("user_partition_id")},this.hideAddCohortForm(),n()?this.renderSelector(s):r?(a.removeClass(h),c.removeClass(h),this.renderSelector(s),s&&this.showCohortEditor(s)):(a.addClass(h),c.addClass(h),this.showNotification({type:"warning",title:i("You currently have no cohorts configured"),actionText:i("Add Cohort"),actionClass:"action-create",actionIconClass:"fa-plus"}))},getSelectedCohort:function(){var t=this.$(".cohort-select").val();return t&&this.model.get(parseInt(t))},onCohortSelected:function(t){t.preventDefault();var e=this.getSelectedCohort();this.lastSelectedCohortId=e.get("id"),this.showCohortEditor(e)},onCohortsEnabledChanged:function(t){t.preventDefault(),this.saveCohortSettings()},saveCohortSettings:function(){var t,e=this,o={is_cohorted:this.getCohortsEnabled()};t=this.cohortSettings,t.save(o,{patch:!0,wait:!0}).done(function(){e.render(),e.renderCourseCohortSettingsNotificationView(),e.pubSub.trigger("cohorts:state",o)}).fail(function(t){e.showNotification({type:"error",title:i("We've encountered an error. Refresh your browser and then try again.")},e.$(".cohorts-state-section"))})},getCohortsEnabled:function(){return this.$(u).prop("checked")},showCohortEditor:function(e){this.removeNotification(),this.editor?(this.editor.setCohort(e),t(".cohort-management-group .group-header-title").focus()):(this.editor=new s({el:this.$(".cohort-management-group"),model:e,cohorts:this.model,contentGroups:this.contentGroups,context:this.context}),this.editor.render(),t(".cohort-management-group .group-header-title").focus())},showNotification:function(t,e){var o=new NotificationModel(t);this.removeNotification(),this.notification=new NotificationView({model:o}),e||(e=this.$(".cohort-management-group")),e.before(this.notification.$el),this.notification.render()},removeNotification:function(){this.notification&&this.notification.remove(),this.cohortFormView&&this.cohortFormView.removeNotification()},showAddCohortForm:function(t){var e;t.preventDefault(),this.removeNotification(),e=new n,e.url=this.model.url,this.cohortFormView=new r({model:e,contentGroups:this.contentGroups,context:this.context}),this.cohortFormView.render(),this.$(".cohort-management-add-form").append(this.cohortFormView.$el),this.cohortFormView.$(".cohort-name").focus(),this.setCohortEditorVisibility(!1)},hideAddCohortForm:function(){this.setCohortEditorVisibility(!0),this.cohortFormView&&(this.cohortFormView.remove(),this.cohortFormView=null)},setCohortEditorVisibility:function(t){t?(this.$(".cohorts-state-section").removeClass(d).attr("aria-disabled",!1),this.$(".cohort-management-group").removeClass(h),this.$(".cohort-management-nav").removeClass(d).attr("aria-disabled",!1)):(this.$(".cohorts-state-section").addClass(d).attr("aria-disabled",!0),this.$(".cohort-management-group").addClass(h),this.$(".cohort-management-nav").addClass(d).attr("aria-disabled",!0))},saveAddCohortForm:function(t){var e=this,o=this.cohortFormView.model;t.preventDefault(),this.removeNotification(),this.cohortFormView.saveForm().done(function(){e.lastSelectedCohortId=o.id,e.model.fetch().done(function(){e.showNotification({type:"confirmation",title:interpolate_text(i("The {cohortGroupName} cohort has been created. You can manually add students to this cohort below."),{cohortGroupName:o.get("name")})})})})},cancelAddCohortForm:function(t){t.preventDefault(),this.removeNotification(),this.onSync()},showSection:function(e){e.preventDefault();var o=t(e.currentTarget).data("section");t(this.getSectionCss(o)).click(),t(window).scrollTop(0)},showCsvUpload:function(e){e.preventDefault(),t(e.currentTarget).addClass(h);var o=this.$(".csv-upload").removeClass(h);this.fileUploaderView||(this.fileUploaderView=new FileUploaderView({el:o,title:i("Assign students to cohorts by uploading a CSV file."),inputLabel:i("Choose a .csv file"),inputTip:i("Only properly formatted .csv files will be accepted."),submitButtonText:i("Upload File and Assign Students"),extensions:".csv",url:this.context.uploadCohortsCsvUrl,successNotification:function(t,e,o){var n=interpolate_text(i("Your file '{file}' has been uploaded. Allow a few minutes for processing."),{file:t});return new NotificationModel({type:"confirmation",title:n})}}).render())},getSectionCss:function(t){return".instructor-nav .nav-item [data-section='"+t+"']"}});return f})}.call(this,define||RequireJS.define),function(t){"use strict";RequireJS.define("js/groups/collections/cohort",["backbone","js/groups/models/cohort"],function(t,e){var o=t.Collection.extend({model:e,comparator:"name",parse:function(t){return t.cohorts}});return o})}.call(this,define||RequireJS.define),function(t){"use strict";RequireJS.define("js/groups/models/course_cohort_settings",["backbone"],function(t){var e=t.Model.extend({idAttribute:"id",defaults:{is_cohorted:!1}});return e})}.call(this,define||RequireJS.define),function(t){"use strict";RequireJS.define("js/groups/models/content_group",["backbone"],function(t){var e=t.Model.extend({idAttribute:"id",defaults:{name:"",user_partition_id:null}});return e})}.call(this,define||RequireJS.define),function(t,e){"use strict";RequireJS.define("js/groups/views/cohorts_dashboard_factory",["jquery","js/groups/views/cohorts","js/groups/collections/cohort","js/groups/models/course_cohort_settings","js/groups/models/content_group"],function(t,e,o,i,n){return function(s,r){var a=t.map(s,function(t){return new n({id:t.id,name:t.name,user_partition_id:t.user_partition_id})}),c=new o,l=new i,h=t(".cohort-management");c.url=h.data("cohorts_url"),l.url=h.data("course_cohort_settings_url");var d=new e({el:h,model:c,contentGroups:a,cohortSettings:l,context:{uploadCohortsCsvUrl:h.data("upload_cohorts_csv_url"),studioGroupConfigurationsUrl:r,isCcxEnabled:h.data("is_ccx_enabled")}});c.fetch().done(function(){l.fetch().done(function(){d.render()})})}})}.call(this,define||RequireJS.define);