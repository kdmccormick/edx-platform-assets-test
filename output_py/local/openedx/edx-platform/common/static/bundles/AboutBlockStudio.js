!function(t,e){for(var i in e)t[i]=e[i]}(window,webpackJsonp([36,37,38,39],{"./common/static/xmodule/descriptors/js/001-19c4723cecaa5a5a46b8566b3544e732.js":function(t,e,i){(function(t,e,i){function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}(function(){(function(){var i=function(t,e){return function(){return t.apply(e,arguments)}};this.HTMLEditingDescriptor=function(){function r(r){this.initInstanceCallback=i(this.initInstanceCallback,this),this.saveCodeEditor=i(this.saveCodeEditor,this),this.showCodeEditor=i(this.showCodeEditor,this),this.saveLink=i(this.saveLink,this),this.editLink=i(this.editLink,this),this.editImageSubmit=i(this.editImageSubmit,this),this.saveImageFromModal=i(this.saveImageFromModal,this),this.closeImageModal=i(this.closeImageModal,this),this.openImageModal=i(this.openImageModal,this),this.saveImage=i(this.saveImage,this),this.editImage=i(this.editImage,this),this.setupTinyMCE=i(this.setupTinyMCE,this),this.cancelButton=i(this.cancelButton,this);var n;if(this.element=r,this.base_asset_url=this.element.find("#editor-tab").data("base-asset-url"),this.editor_choice=this.element.find("#editor-tab").data("editor"),this.new_image_modal=window.STUDIO_FRONTEND_IN_CONTEXT_IMAGE_SELECTION,void 0===this.base_asset_url&&(this.base_asset_url=null),this.advanced_editor=t.fromTextArea(e(".edit-box",this.element)[0],{mode:"text/html",lineNumbers:!0,lineWrapping:!0}),"visual"===this.editor_choice){var a;this.$advancedEditorWrapper=e(this.advanced_editor.getWrapperElement()),this.$advancedEditorWrapper.addClass("is-inactive"),n=[],e("link[rel=stylesheet][href*='tinymce']").filter("[href*='content']").each(function(){n.push(e(this).attr("href"))}),tinyMCE.baseURL=baseUrl+"js/vendor/tinymce/js/tinymce",tinyMCE.suffix=".min";var l={script_url:baseUrl+"js/vendor/tinymce/js/tinymce/tinymce.full.min.js",font_formats:s(),theme:"silver",skin:"studio-tmce5",schema:"html5",entity_encoding:"raw",convert_urls:!1,directionality:e(".wrapper-view, .window-wrap").prop("dir"),content_css:n.join(", "),formats:{code:{inline:"code"}},visual:!1,plugins:"lists, link, image, codemirror",codemirror:{path:baseUrl+"js/vendor",disableFilesMerge:!0,jsFiles:["codemirror-compressed.js"],cssFiles:["CodeMirror/codemirror.css"]},image_advtab:!0,toolbar:"formatselect fontselect bold italic underline forecolor wrapAsCode alignleft aligncenter alignright alignjustify bullist numlist outdent indent blockquote link unlink "+(this.new_image_modal?"insertImage":"image")+" code",block_formats:edx.StringUtils.interpolate(gettext("{paragraph}=p;{preformatted}=pre;{heading3}=h3;{heading4}=h4;{heading5}=h5;{heading6}=h6"),{paragraph:gettext("Paragraph"),preformatted:gettext("Preformatted"),heading3:gettext("Heading 3"),heading4:gettext("Heading 4"),heading5:gettext("Heading 5"),heading6:gettext("Heading 6")}),width:"100%",height:"435px",menubar:!1,statusbar:!1,valid_children:"+body[style]",valid_elements:"*[*]",extended_valid_elements:"*[*]",invalid_elements:"",setup:this.setupTinyMCE,init_instance_callback:this.initInstanceCallback,browser_spellcheck:!0};this.tiny_mce_textarea=e(".tiny-mce",this.element).tinymce(l),tinymce.addI18n("en",(a={"Add to Dictionary":gettext("Add to Dictionary"),Advanced:gettext("Advanced"),"Align center":gettext("Align center"),"Align left":gettext("Align left"),"Align right":gettext("Align right"),Alignment:gettext("Alignment"),"Alternative source":gettext("Alternative source"),Anchor:gettext("Anchor"),Anchors:gettext("Anchors"),Author:gettext("Author"),"Background color":gettext("Background color"),Blockquote:gettext("Blockquote"),Blocks:gettext("Blocks"),Body:gettext("Body"),Bold:gettext("Bold"),"Border color":gettext("Border color"),Border:gettext("Border"),Bottom:gettext("Bottom"),"Bullet list":gettext("Bullet list"),Cancel:gettext("Cancel"),Caption:gettext("Caption"),"Cell padding":gettext("Cell padding"),"Cell properties":gettext("Cell properties"),"Cell spacing":gettext("Cell spacing"),"Cell type":gettext("Cell type"),Cell:gettext("Cell"),Center:gettext("Center"),Circle:gettext("Circle"),"Clear formatting":gettext("Clear formatting"),Close:gettext("Close"),"Code block":gettext("Code block"),Code:gettext("Code"),Color:gettext("Color"),Cols:gettext("Cols"),"Column group":gettext("Column group"),Column:gettext("Column"),"Constrain proportions":gettext("Constrain proportions"),"Copy row":gettext("Copy row"),Copy:gettext("Copy"),"Could not find the specified string.":gettext("Could not find the specified string."),"Custom color":gettext("Custom color"),"Custom...":gettext("Custom..."),"Cut row":gettext("Cut row"),Cut:gettext("Cut"),"Decrease indent":gettext("Decrease indent"),Default:gettext("Default"),"Delete column":gettext("Delete column"),"Delete row":gettext("Delete row"),"Delete table":gettext("Delete table"),Description:gettext("Description"),Dimensions:gettext("Dimensions"),Disc:gettext("Disc"),Div:gettext("Div"),"Document properties":gettext("Document properties"),"Edit HTML":gettext("Edit HTML"),Edit:gettext("Edit"),Embed:gettext("Embed"),Emoticons:gettext("Emoticons"),Encoding:gettext("Encoding"),File:gettext("File"),"Find and replace":gettext("Find and replace"),"Find next":gettext("Find next"),"Find previous":gettext("Find previous"),Find:gettext("Find"),Finish:gettext("Finish"),"Font Family":gettext("Font Family"),"Font Sizes":gettext("Font Sizes"),Footer:gettext("Footer"),Format:gettext("Format"),Formats:gettext("Formats"),Fullscreen:gettext("Fullscreen"),General:gettext("General"),"H Align":gettext("H Align"),"Header 1":gettext("Header 1"),"Header 2":gettext("Header 2"),"Header 3":gettext("Header 3"),"Header 4":gettext("Header 4"),"Header 5":gettext("Header 5"),"Header 6":gettext("Header 6"),"Header cell":gettext("Header cell"),Header:gettext("Header"),Headers:gettext("Headers"),"Heading 1":gettext("Heading 1"),"Heading 2":gettext("Heading 2"),"Heading 3":gettext("Heading 3"),"Heading 4":gettext("Heading 4"),"Heading 5":gettext("Heading 5"),"Heading 6":gettext("Heading 6"),Headings:gettext("Headings"),Height:gettext("Height"),"Horizontal line":gettext("Horizontal line"),"Horizontal space":gettext("Horizontal space"),"HTML source code":gettext("HTML source code"),"Ignore all":gettext("Ignore all"),Ignore:gettext("Ignore"),"Image description":gettext("Image description"),"Increase indent":gettext("Increase indent"),Inline:gettext("Inline"),"Insert column after":gettext("Insert column after"),"Insert column before":gettext("Insert column before"),"Insert date/time":gettext("Insert date/time"),"Insert image":gettext("Insert image"),"Insert link":gettext("Insert link"),"Insert row after":gettext("Insert row after"),"Insert row before":gettext("Insert row before"),"Insert table":gettext("Insert table"),"Insert template":gettext("Insert template"),"Insert video":gettext("Insert video"),Insert:gettext("Insert"),"Insert/edit image":gettext("Insert/edit image"),"Insert/edit link":gettext("Insert/edit link"),"Insert/edit video":gettext("Insert/edit video"),Italic:gettext("Italic"),Justify:gettext("Justify"),Keywords:gettext("Keywords"),"Left to right":gettext("Left to right"),Left:gettext("Left"),"Lower Alpha":gettext("Lower Alpha"),"Lower Greek":gettext("Lower Greek"),"Lower Roman":gettext("Lower Roman"),"Match case":gettext("Match case"),"Merge cells":gettext("Merge cells"),Middle:gettext("Middle"),Name:gettext("Name"),"New document":gettext("New document"),"New window":gettext("New window"),Next:gettext("Next"),"No color":gettext("No color"),"Nonbreaking space":gettext("Nonbreaking space"),None:gettext("None"),"Numbered list":gettext("Numbered list"),Ok:gettext("Ok"),OK:gettext("OK"),"Page break":gettext("Page break"),Paragraph:gettext("Paragraph"),"Paste as text":gettext("Paste as text"),"Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.":gettext("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off."),"Paste row after":gettext("Paste row after"),"Paste row before":gettext("Paste row before"),"Paste your embed code below:":gettext("Paste your embed code below:"),Paste:gettext("Paste"),Poster:gettext("Poster"),Pre:gettext("Pre"),Prev:gettext("Prev"),Preview:gettext("Preview"),Print:gettext("Print"),Redo:gettext("Redo"),"Remove link":gettext("Remove link"),"Replace all":gettext("Replace all")},o(a,"Replace all",gettext("Replace all")),o(a,"Replace with",gettext("Replace with")),o(a,"Replace",gettext("Replace")),o(a,"Replace",gettext("Replace")),o(a,"Restore last draft",gettext("Restore last draft")),o(a,"Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help",gettext("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help")),o(a,"Right to left",gettext("Right to left")),o(a,"Right",gettext("Right")),o(a,"Robots",gettext("Robots")),o(a,"Row group",gettext("Row group")),o(a,"Row properties",gettext("Row properties")),o(a,"Row type",gettext("Row type")),o(a,"Row",gettext("Row")),o(a,"Rows",gettext("Rows")),o(a,"Save",gettext("Save")),o(a,"Scope",gettext("Scope")),o(a,"Select all",gettext("Select all")),o(a,"Show blocks",gettext("Show blocks")),o(a,"Show invisible characters",gettext("Show invisible characters")),o(a,"Source code",gettext("Source code")),o(a,"Source",gettext("Source")),o(a,"Special character",gettext("Special character")),o(a,"Spellcheck",gettext("Spellcheck")),o(a,"Split cell",gettext("Split cell")),o(a,"Square",gettext("Square")),o(a,"Start search",gettext("Start search")),o(a,"Strikethrough",gettext("Strikethrough")),o(a,"Style",gettext("Style")),o(a,"Subscript",gettext("Subscript")),o(a,"Superscript",gettext("Superscript")),o(a,"Table properties",gettext("Table properties")),o(a,"Table",gettext("Table")),o(a,"Target",gettext("Target")),o(a,"Templates",gettext("Templates")),o(a,"Text color",gettext("Text color")),o(a,"Text to display",gettext("Text to display")),o(a,"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",gettext("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?")),o(a,"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",gettext("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?")),o(a,"Title",gettext("Title")),o(a,"Tools",gettext("Tools")),o(a,"Top",gettext("Top")),o(a,"Underline",gettext("Underline")),o(a,"Undo",gettext("Undo")),o(a,"Upper Alpha",gettext("Upper Alpha")),o(a,"Upper Roman",gettext("Upper Roman")),o(a,"Url",gettext("Url")),o(a,"V Align",gettext("V Align")),o(a,"Vertical space",gettext("Vertical space")),o(a,"View",gettext("View")),o(a,"Visual aids",gettext("Visual aids")),o(a,"Whole words",gettext("Whole words")),o(a,"Width",gettext("Width")),o(a,"Words: {0}",gettext("Words: {0}")),o(a,"You have unsaved changes are you sure you want to navigate away?",gettext("You have unsaved changes are you sure you want to navigate away?")),o(a,"Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.",gettext("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")),a))}}var n,a,s;return n="Default='Open Sans', Verdana, Arial, Helvetica, sans-serif;",a="Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",s=function(){return n+a},r.prototype.setupTinyMCE=function(t){return t.ui.registry.addButton("wrapAsCode",{tooltip:gettext("Code block"),icon:"code-sample",onAction:function(){return t.formatter.toggle("code")}}),t.ui.registry.addButton("insertImage",{tooltip:gettext("Insert/Edit Image"),icon:"image",onAction:this.openImageModal}),this.visualEditor=t,this.imageModal=e("#edit-image-modal #modalWrapper"),t.on("SaveImage",this.saveImage),t.on("EditImage",this.editImage),t.on("SaveLink",this.saveLink),t.on("EditLink",this.editLink),t.on("ShowCodeEditor",this.showCodeEditor),t.on("SaveCodeEditor",this.saveCodeEditor),e(".action-cancel").on("click",this.cancelButton),this.imageModal.on("closeModal",this.closeImageModal),this.imageModal.on("submitForm",this.editImageSubmit)},r.prototype.editImage=function(t){if(t.src)return t.src=rewriteStaticLinks(t.src,this.base_asset_url,"/static/")},r.prototype.saveImage=function(t){if(t.src)return t.src=rewriteStaticLinks(t.src,"/static/",this.base_asset_url)},r.prototype.openImageModal=function(){var t,i;return t=e(this.visualEditor.selection.getNode()),i={baseAssetUrl:this.base_asset_url},t&&t.is("img")&&(i.src=rewriteStaticLinks(t.attr("src"),this.base_asset_url,"/static/"),i.alt=t.attr("alt"),i.width=parseInt(t.attr("width"),10)||t[0].naturalWidth,i.height=parseInt(t.attr("height"),10)||t[0].naturalHeight,i.style=t.attr("style")),e("body").addClass("modal-open"),this.imageModal[0].dispatchEvent(new CustomEvent("openModal",{bubbles:!0,detail:i}))},r.prototype.closeImageModal=function(){e("body").removeClass("modal-open")},r.prototype.saveImageFromModal=function(t){return t.src&&(t.src=rewriteStaticLinks(t.src,"/static/",this.base_asset_url)),this.visualEditor.insertContent(this.visualEditor.dom.createHTML("img",t))},r.prototype.editImageSubmit=function(t){return t.detail&&this.saveImageFromModal(t.detail),this.closeImageModal()},r.prototype.editLink=function(t){if(t.href)return t.href=rewriteStaticLinks(t.href,this.base_asset_url,"/static/")},r.prototype.saveLink=function(t){if(t.href)return t.href=rewriteStaticLinks(t.href,"/static/",this.base_asset_url)},r.prototype.showCodeEditor=function(t){var e;return e=rewriteStaticLinks(t.content,this.base_asset_url,"/static/"),t.content=e},r.prototype.saveCodeEditor=function(t){var e;return e=rewriteStaticLinks(t.content,"/static/",this.base_asset_url),t.content=e},r.prototype.initInstanceCallback=function(t){return t.setContent(rewriteStaticLinks(t.getContent({no_events:1}),"/static/",this.base_asset_url)),this.starting_content=t.getContent({format:"raw",no_events:1}),t.focus()},r.prototype.getVisualEditor=function(){return this.visualEditor},r.prototype.save=function(){var t,e,i;return e=void 0,"visual"===this.editor_choice&&(i=this.getVisualEditor(),t=i.getContent({format:"raw",no_events:1}),this.starting_content!==t&&(e=rewriteStaticLinks(i.getContent({no_events:1}),this.base_asset_url,"/static/"))),void 0===e&&(e=this.advanced_editor.getValue()),this.unbindSubmitEventFromImageEditor(),{data:e}},r.prototype.cancelButton=function(){this.unbindSubmitEventFromImageEditor()},r.prototype.unbindSubmitEventFromImageEditor=function(){this.imageModal&&this.imageModal.off("submitForm")},r}()}).call(this)}).call(window)}).call(e,i("./common/static/js/vendor/codemirror-compressed.js"),i(0),i("./node_modules/process/browser.js"))},"./node_modules/process/browser.js":function(t,e){function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(c===setTimeout)return setTimeout(t,0);if((c===i||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function n(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){x&&h&&(x=!1,h.length?m=h.concat(m):p=-1,m.length&&s())}function s(){if(!x){var t=r(a);x=!0;for(var e=m.length;e;){for(h=m,m=[];++p<e;)h&&h[p].run();p=-1,e=m.length}h=null,x=!1,n(t)}}function l(t,e){this.fun=t,this.array=e}function g(){}var c,d,u=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:i}catch(t){c=i}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var h,m=[],x=!1,p=-1;u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];m.push(new l(t,e)),1!==m.length||x||r(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=g,u.addListener=g,u.once=g,u.off=g,u.removeListener=g,u.removeAllListeners=g,u.emit=g,u.prependListener=g,u.prependOnceListener=g,u.listeners=function(t){return[]},u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},4:function(t,e,i){i("./common/static/xmodule/descriptors/js/000-b82f6c436159f6bc7ca2513e29e82503.js"),t.exports=i("./common/static/xmodule/descriptors/js/001-19c4723cecaa5a5a46b8566b3544e732.js")}},[4]));