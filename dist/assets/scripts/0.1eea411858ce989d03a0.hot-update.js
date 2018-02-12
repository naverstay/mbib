webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * jQuery Form Styler v2.0.1
	 * https://github.com/Dimox/jQueryFormStyler
	 *
	 * Copyright 2012-2017 Dimox (http://dimox.name/)
	 * Released under the MIT license.
	 *
	 * Date: 2017.08.29
	 *
	 */
	
	;(function(factory) {
		if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			// CommonJS
			module.exports = factory($ || require('jquery'));
		} else {
			factory(jQuery);
		}
	}(function($) {
	
		'use strict';
	
		var pluginName = 'styler',
				defaults = {
					idSuffix: '-styler',
					filePlaceholder: '╨ñ╨░╨╣╨╗ ╨╜╨╡ ╨▓╤ï╨▒╤Ç╨░╨╜',
					fileBrowse: '╨₧╨▒╨╖╨╛╤Ç...',
					fileNumber: '╨Æ╤ï╨▒╤Ç╨░╨╜╨╛ ╤ä╨░╨╣╨╗╨╛╨▓: %s',
					selectPlaceholder: '╨Æ╤ï╨▒╨╡╤Ç╨╕╤é╨╡...',
					selectSearch: false,
					selectSearchLimit: 10,
					selectSearchNotFound: '╨í╨╛╨▓╨┐╨░╨┤╨╡╨╜╨╕╨╣ ╨╜╨╡ ╨╜╨░╨╣╨┤╨╡╨╜╨╛',
					selectSearchPlaceholder: '╨ƒ╨╛╨╕╤ü╨║...',
					selectVisibleOptions: 0,
					selectSmartPositioning: true,
					locale: 'ru',
					locales: {
						'en': {
							filePlaceholder: 'No file selected',
							fileBrowse: 'Browse...',
							fileNumber: 'Selected files: %s',
							selectPlaceholder: 'Select...',
							selectSearchNotFound: 'No matches found',
							selectSearchPlaceholder: 'Search...'
						}
					},
					onSelectOpened: function() {},
					onSelectClosed: function() {},
					onFormStyled: function() {}
				};
	
		function Plugin(element, options) {
			this.element = element;
			this.options = $.extend({}, defaults, options);
			var locale = this.options.locale;
			if (this.options.locales[locale] !== undefined) {
				$.extend(this.options, this.options.locales[locale]);
			}
			this.init();
		}
	
		Plugin.prototype = {
	
			// ╨╕╨╜╨╕╤å╨╕╨░╨╗╨╕╨╖╨░╤å╨╕╤Å
			init: function() {
	
				var el = $(this.element);
				var opt = this.options;
	
				var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i)) ? true : false;
				var Android = (navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i)) ? true : false;
	
				function Attributes() {
					if (el.attr('id') !== undefined && el.attr('id') !== '') {
						this.id = el.attr('id') + opt.idSuffix;
					}
					this.title = el.attr('title');
					this.classes = el.attr('class');
					this.data = el.data();
				}
	
				// checkbox
				if (el.is(':checkbox')) {
	
					var checkboxOutput = function() {
	
						var att = new Attributes();
						var checkbox = $('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>')
							.attr({
								id: att.id,
								title: att.title
							})
							.addClass(att.classes)
							.data(att.data)
						;
	
						el.after(checkbox).prependTo(checkbox);
						if (el.is(':checked')) checkbox.addClass('checked');
						if (el.is(':disabled')) checkbox.addClass('disabled');
	
						// ╨║╨╗╨╕╨║ ╨╜╨░ ╨┐╤ü╨╡╨▓╨┤╨╛╤ç╨╡╨║╨▒╨╛╨║╤ü
						checkbox.click(function(e) {
							e.preventDefault();
							el.triggerHandler('click');
							if (!checkbox.is('.disabled')) {
								if (el.is(':checked')) {
									el.prop('checked', false);
									checkbox.removeClass('checked');
								} else {
									el.prop('checked', true);
									checkbox.addClass('checked');
								}
								el.focus().change();
							}
						});
						// ╨║╨╗╨╕╨║ ╨╜╨░ label
						el.closest('label').add('label[for="' + el.attr('id') + '"]').on('click.styler', function(e) {
							if (!$(e.target).is('a') && !$(e.target).closest(checkbox).length) {
								checkbox.triggerHandler('click');
								e.preventDefault();
							}
						});
						// ╨┐╨╡╤Ç╨╡╨║╨╗╤Ä╤ç╨╡╨╜╨╕╨╡ ╨┐╨╛ Space ╨╕╨╗╨╕ Enter
						el.on('change.styler', function() {
							if (el.is(':checked')) checkbox.addClass('checked');
							else checkbox.removeClass('checked');
						})
						// ╤ç╤é╨╛╨▒╤ï ╨┐╨╡╤Ç╨╡╨║╨╗╤Ä╤ç╨░╨╗╤ü╤Å ╤ç╨╡╨║╨▒╨╛╨║╤ü, ╨║╨╛╤é╨╛╤Ç╤ï╨╣ ╨╜╨░╤à╨╛╨┤╨╕╤é╤ü╤Å ╨▓ ╤é╨╡╨│╨╡ label
						.on('keydown.styler', function(e) {
							if (e.which == 32) checkbox.click();
						})
						.on('focus.styler', function() {
							if (!checkbox.is('.disabled')) checkbox.addClass('focused');
						})
						.on('blur.styler', function() {
							checkbox.removeClass('focused');
						});
	
					}; // end checkboxOutput()
	
					checkboxOutput();
	
					// ╨╛╨▒╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╕ ╨┤╨╕╨╜╨░╨╝╨╕╤ç╨╡╤ü╨║╨╛╨╝ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╕
					el.on('refresh', function() {
						el.closest('label').add('label[for="' + el.attr('id') + '"]').off('.styler');
						el.off('.styler').parent().before(el).remove();
						checkboxOutput();
					});
	
				// end checkbox
	
				// radio
				} else if (el.is(':radio')) {
	
					var radioOutput = function() {
	
						var att = new Attributes();
						var radio = $('<div class="jq-radio"><div class="jq-radio__div"></div></div>')
							.attr({
								id: att.id,
								title: att.title
							})
							.addClass(att.classes)
							.data(att.data)
						;
	
						el.after(radio).prependTo(radio);
						if (el.is(':checked')) radio.addClass('checked');
						if (el.is(':disabled')) radio.addClass('disabled');
	
						// ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╨╡╨╝ ╨╛╨▒╤ë╨╡╨│╨╛ ╤Ç╨╛╨┤╨╕╤é╨╡╨╗╤Å ╤â ╤Ç╨░╨┤╨╕╨╛╨║╨╜╨╛╨┐╨╛╨║ ╤ü ╨╛╨┤╨╕╨╜╨░╨║╨╛╨▓╤ï╨╝ name
						// http://stackoverflow.com/a/27733847
						$.fn.commonParents = function() {
							var cachedThis = this;
							return cachedThis.first().parents().filter(function() {
								return $(this).find(cachedThis).length === cachedThis.length;
							});
						};
						$.fn.commonParent = function() {
							return $(this).commonParents().first();
						};
	
						// ╨║╨╗╨╕╨║ ╨╜╨░ ╨┐╤ü╨╡╨▓╨┤╨╛╤Ç╨░╨┤╨╕╨╛╨║╨╜╨╛╨┐╨║╨╡
						radio.click(function(e) {
							e.preventDefault();
							el.triggerHandler('click');
							if (!radio.is('.disabled')) {
								var inputName = $('input[name="' + el.attr('name') + '"]');
								inputName.commonParent().find(inputName).prop('checked', false).parent().removeClass('checked');
								el.prop('checked', true).parent().addClass('checked');
								el.focus().change();
							}
						});
						// ╨║╨╗╨╕╨║ ╨╜╨░ label
						el.closest('label').add('label[for="' + el.attr('id') + '"]').on('click.styler', function(e) {
							if (!$(e.target).is('a') && !$(e.target).closest(radio).length) {
								radio.triggerHandler('click');
								e.preventDefault();
							}
						});
						// ╨┐╨╡╤Ç╨╡╨║╨╗╤Ä╤ç╨╡╨╜╨╕╨╡ ╤ü╤é╤Ç╨╡╨╗╨║╨░╨╝╨╕
						el.on('change.styler', function() {
							el.parent().addClass('checked');
						})
						.on('focus.styler', function() {
							if (!radio.is('.disabled')) radio.addClass('focused');
						})
						.on('blur.styler', function() {
							radio.removeClass('focused');
						});
	
					}; // end radioOutput()
	
					radioOutput();
	
					// ╨╛╨▒╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╕ ╨┤╨╕╨╜╨░╨╝╨╕╤ç╨╡╤ü╨║╨╛╨╝ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╕
					el.on('refresh', function() {
						el.closest('label').add('label[for="' + el.attr('id') + '"]').off('.styler');
						el.off('.styler').parent().before(el).remove();
						radioOutput();
					});
	
				// end radio
	
				// file
				} else if (el.is(':file')) {
	
					var fileOutput = function() {
	
						var att = new Attributes();
						var placeholder = el.data('placeholder');
						if (placeholder === undefined) placeholder = opt.filePlaceholder;
						var browse = el.data('browse');
						if (browse === undefined || browse === '') browse = opt.fileBrowse;
	
						var file =
							$('<div class="jq-file">' +
									'<div class="jq-file__name">' + placeholder + '</div>' +
									'<div class="jq-file__browse">' + browse + '</div>' +
								'</div>')
							.attr({
								id: att.id,
								title: att.title
							})
							.addClass(att.classes)
							.data(att.data)
						;
	
						el.after(file).appendTo(file);
						if (el.is(':disabled')) file.addClass('disabled');
	
						var value = el.val();
						var name = $('div.jq-file__name', file);
	
						// ╤ç╤é╨╛╨▒╤ï ╨┐╤Ç╨╕ ╨┤╨╕╨╜╨░╨╝╨╕╤ç╨╡╤ü╨║╨╛╨╝ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╕ ╨╕╨╝╤Å ╤ä╨░╨╣╨╗╨░ ╨╜╨╡ ╤ü╨▒╤Ç╨░╤ü╤ï╨▓╨░╨╗╨╛╤ü╤î
						if (value) name.text(value.replace(/.+[\\\/]/, ''));
	
						el.on('change.styler', function() {
							var value = el.val();
							if (el.is('[multiple]')) {
								value = '';
								var files = el[0].files.length;
								if (files > 0) {
									var number = el.data('number');
									if (number === undefined) number = opt.fileNumber;
									number = number.replace('%s', files);
									value = number;
								}
							}
							name.text(value.replace(/.+[\\\/]/, ''));
							if (value === '') {
								name.text(placeholder);
								file.removeClass('changed');
							} else {
								file.addClass('changed');
							}
						})
						.on('focus.styler', function() {
							file.addClass('focused');
						})
						.on('blur.styler', function() {
							file.removeClass('focused');
						})
						.on('click.styler', function() {
							file.removeClass('focused');
						});
	
					}; // end fileOutput()
	
					fileOutput();
	
					// ╨╛╨▒╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╕ ╨┤╨╕╨╜╨░╨╝╨╕╤ç╨╡╤ü╨║╨╛╨╝ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╕
					el.on('refresh', function() {
						el.off('.styler').parent().before(el).remove();
						fileOutput();
					});
	
				// end file
	
				// number
				} else if (el.is('input[type="number"]')) {
	
					var numberOutput = function() {
	
						var att = new Attributes();
						var number =
							$('<div class="jq-number">' +
									'<div class="jq-number__spin minus"></div>' +
									'<div class="jq-number__spin plus"></div>' +
								'</div>')
							.attr({
								id: att.id,
								title: att.title
							})
							.addClass(att.classes)
							.data(att.data)
						;
	
						el.after(number).prependTo(number).wrap('<div class="jq-number__field"></div>');
						if (el.is(':disabled')) number.addClass('disabled');
	
						var min,
								max,
								step,
								timeout = null,
								interval = null;
						if (el.attr('min') !== undefined) min = el.attr('min');
						if (el.attr('max') !== undefined) max = el.attr('max');
						if (el.attr('step') !== undefined && $.isNumeric(el.attr('step')))
							step = Number(el.attr('step'));
						else
							step = Number(1);
	
						var changeValue = function(spin) {
							var value = el.val(),
									newValue;
	
							if (!$.isNumeric(value)) {
								value = 0;
								el.val('0');
							}
	
							if (spin.is('.minus')) {
								newValue = Number(value) - step;
							} else if (spin.is('.plus')) {
								newValue = Number(value) + step;
							}
	
							// ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╨╡╨╝ ╨║╨╛╨╗╨╕╤ç╨╡╤ü╤é╨▓╨╛ ╨┤╨╡╤ü╤Å╤é╨╕╤ç╨╜╤ï╤à ╨╖╨╜╨░╨║╨╛╨▓ ╨┐╨╛╤ü╨╗╨╡ ╨╖╨░╨┐╤Å╤é╨╛╨╣ ╨▓ step
							var decimals = (step.toString().split('.')[1] || []).length;
							if (decimals > 0) {
								var multiplier = '1';
								while (multiplier.length <= decimals) multiplier = multiplier + '0';
								// ╨╕╨╖╨▒╨╡╨│╨░╨╡╨╝ ╨┐╨╛╤Å╨▓╨╗╨╡╨╜╨╕╤Å ╨╗╨╕╤ê╨╜╨╕╤à ╨╖╨╜╨░╨║╨╛╨▓ ╨┐╨╛╤ü╨╗╨╡ ╨╖╨░╨┐╤Å╤é╨╛╨╣
								newValue = Math.round(newValue * multiplier) / multiplier;
							}
	
							if ($.isNumeric(min) && $.isNumeric(max)) {
								if (newValue >= min && newValue <= max) el.val(newValue);
							} else if ($.isNumeric(min) && !$.isNumeric(max)) {
								if (newValue >= min) el.val(newValue);
							} else if (!$.isNumeric(min) && $.isNumeric(max)) {
								if (newValue <= max) el.val(newValue);
							} else {
								el.val(newValue);
							}
						};
	
						if (!number.is('.disabled')) {
							number.on('mousedown', 'div.jq-number__spin', function() {
								var spin = $(this);
								changeValue(spin);
								timeout = setTimeout(function(){
									interval = setInterval(function(){ changeValue(spin); }, 40);
								}, 350);
							}).on('mouseup mouseout', 'div.jq-number__spin', function() {
								clearTimeout(timeout);
								clearInterval(interval);
							}).on('mouseup', 'div.jq-number__spin', function() {
								el.change().trigger('input');
							});
							el.on('focus.styler', function() {
								number.addClass('focused');
							})
							.on('blur.styler', function() {
								number.removeClass('focused');
							});
						}
	
					}; // end numberOutput()
	
					numberOutput();
	
					// ╨╛╨▒╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╕ ╨┤╨╕╨╜╨░╨╝╨╕╤ç╨╡╤ü╨║╨╛╨╝ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╕
					el.on('refresh', function() {
						el.off('.styler').closest('.jq-number').before(el).remove();
						numberOutput();
					});
	
				// end number
	
				// select
				} else if (el.is('select')) {
	
					var selectboxOutput = function() {
	
						// ╨╖╨░╨┐╤Ç╨╡╤ë╨░╨╡╨╝ ╨┐╤Ç╨╛╨║╤Ç╤â╤é╨║╤â ╤ü╤é╤Ç╨░╨╜╨╕╤å╤ï ╨┐╤Ç╨╕ ╨┐╤Ç╨╛╨║╤Ç╤â╤é╨║╨╡ ╤ü╨╡╨╗╨╡╨║╤é╨░
						function preventScrolling(selector) {
	
							var scrollDiff = selector.prop('scrollHeight') - selector.outerHeight(),
									wheelDelta = null,
									scrollTop = null;
	
							selector.off('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function(e) {
	
								/**
								 * ╨╜╨╛╤Ç╨╝╨░╨╗╨╕╨╖╨░╤å╨╕╤Å ╨╜╨░╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╤Å ╨┐╤Ç╨╛╨║╤Ç╤â╤é╨║╨╕
								 * (firefox < 0 || chrome etc... > 0)
								 * (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0)
								 */
								wheelDelta = (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) ? 1 : -1; // ╨╜╨░╨┐╤Ç╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╛╨║╤Ç╤â╤é╨║╨╕ (-1 ╨▓╨╜╨╕╨╖, 1 ╨▓╨▓╨╡╤Ç╤à)
								scrollTop = selector.scrollTop(); // ╨┐╨╛╨╖╨╕╤å╨╕╤Å ╤ü╨║╤Ç╨╛╨╗╨╗╨░
	
								if ((scrollTop >= scrollDiff && wheelDelta < 0) || (scrollTop <= 0 && wheelDelta > 0)) {
									e.stopPropagation();
									e.preventDefault();
								}
	
							});
						}
	
						var option = $('option', el);
						var list = '';
						// ╤ä╨╛╤Ç╨╝╨╕╤Ç╤â╨╡╨╝ ╤ü╨┐╨╕╤ü╨╛╨║ ╤ü╨╡╨╗╨╡╨║╤é╨░
						function makeList() {
							for (var i = 0; i < option.length; i++) {
								var op = option.eq(i);
								var li = '',
										liClass = '',
										liClasses = '',
										id = '',
										title = '',
										dataList = '',
										optionClass = '',
										optgroupClass = '',
										dataJqfsClass = '';
								var disabled = 'disabled';
								var selDis = 'selected sel disabled';
								if (op.prop('selected')) liClass = 'selected sel';
								if (op.is(':disabled')) liClass = disabled;
								if (op.is(':selected:disabled')) liClass = selDis;
								if (op.attr('id') !== undefined && op.attr('id') !== '') id = ' id="' + op.attr('id') + opt.idSuffix + '"';
								if (op.attr('title') !== undefined && option.attr('title') !== '') title = ' title="' + op.attr('title') + '"';
								if (op.attr('class') !== undefined) {
									optionClass = ' ' + op.attr('class');
									dataJqfsClass = ' data-jqfs-class="' + op.attr('class') + '"';
								}
	
								var data = op.data();
								for (var k in data) {
									if (data[k] !== '') dataList += ' data-' + k + '="' + data[k] + '"';
								}
	
								if ( (liClass + optionClass) !== '' )   liClasses = ' class="' + liClass + optionClass + '"';
								li = '<li' + dataJqfsClass + dataList + liClasses + title + id + '>'+ op.html() +'</li>';
	
								// ╨╡╤ü╨╗╨╕ ╨╡╤ü╤é╤î optgroup
								if (op.parent().is('optgroup')) {
									if (op.parent().attr('class') !== undefined) optgroupClass = ' ' + op.parent().attr('class');
									li = '<li' + dataJqfsClass + dataList + ' class="' + liClass + optionClass + ' option' + optgroupClass + '"' + title + id + '>'+ op.html() +'</li>';
									if (op.is(':first-child')) {
										li = '<li class="optgroup' + optgroupClass + '">' + op.parent().attr('label') + '</li>' + li;
									}
								}
	
								list += li;
							}
						} // end makeList()
	
						// ╨╛╨┤╨╕╨╜╨╛╤ç╨╜╤ï╨╣ ╤ü╨╡╨╗╨╡╨║╤é
						function doSelect() {
	
							var att = new Attributes();
							var searchHTML = '';
							var selectPlaceholder = el.data('placeholder');
							var selectSearch = el.data('search');
							var selectSearchLimit = el.data('search-limit');
							var selectSearchNotFound = el.data('search-not-found');
							var selectSearchPlaceholder = el.data('search-placeholder');
							var selectSmartPositioning = el.data('smart-positioning');
	
							if (selectPlaceholder === undefined) selectPlaceholder = opt.selectPlaceholder;
							if (selectSearch === undefined || selectSearch === '') selectSearch = opt.selectSearch;
							if (selectSearchLimit === undefined || selectSearchLimit === '') selectSearchLimit = opt.selectSearchLimit;
							if (selectSearchNotFound === undefined || selectSearchNotFound === '') selectSearchNotFound = opt.selectSearchNotFound;
							if (selectSearchPlaceholder === undefined) selectSearchPlaceholder = opt.selectSearchPlaceholder;
							if (selectSmartPositioning === undefined || selectSmartPositioning === '') selectSmartPositioning = opt.selectSmartPositioning;
	
							var selectbox =
								$('<div class="jq-selectbox jqselect">' +
										'<div class="jq-selectbox__select">' +
											'<div class="jq-selectbox__select-text"></div>' +
											'<div class="jq-selectbox__trigger">' +
												'<div class="jq-selectbox__trigger-arrow"></div></div>' +
										'</div>' +
									'</div>')
								.attr({
									id: att.id,
									title: att.title
								})
								.addClass(att.classes)
								.data(att.data)
							;
	
							el.after(selectbox).prependTo(selectbox);
	
							var selectzIndex = selectbox.css('z-index');
							selectzIndex = (selectzIndex > 0 ) ? selectzIndex : 1;
							var divSelect = $('div.jq-selectbox__select', selectbox);
							var divText = $('div.jq-selectbox__select-text', selectbox);
							var optionSelected = option.filter(':selected');
	
							makeList();
	
							if (selectSearch) searchHTML =
								'<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + selectSearchPlaceholder + '"></div>' +
								'<div class="jq-selectbox__not-found">' + selectSearchNotFound + '</div>';
							var dropdown =
								$('<div class="jq-selectbox__dropdown">' +
										searchHTML + '<ul>' + list + '</ul>' +
									'</div>');
							selectbox.append(dropdown);
							var ul = $('ul', dropdown);
							var li = $('li', dropdown);
							var search = $('input', dropdown);
							var notFound = $('div.jq-selectbox__not-found', dropdown).hide();
							if (li.length < selectSearchLimit) search.parent().hide();
	
							// ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╨╡╨╝ ╨╛╨┐╤å╨╕╤Ä ╨┐╨╛ ╤â╨╝╨╛╨╗╤ç╨░╨╜╨╕╤Ä
							// ╨╡╤ü╨╗╨╕ ╤â 1-╨╣ ╨╛╨┐╤å╨╕╨╕ ╨╜╨╡╤é ╤é╨╡╨║╤ü╤é╨░, ╨╛╨╜╨░ ╨▓╤ï╨▒╤Ç╨░╨╜╨░ ╨┐╨╛ ╤â╨╝╨╛╨╗╤ç╨░╨╜╨╕╤Ä ╨╕ ╨┐╨░╤Ç╨░╨╝╨╡╤é╤Ç selectPlaceholder ╨╜╨╡ false, ╤é╨╛ ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╨╡╨╝ ╨┐╨╗╨╡╨╣╤ü╤à╨╛╨╗╨┤╨╡╤Ç
							if (option.first().text() === '' && option.first().is(':selected') && selectPlaceholder !== false) {
								divText.text(selectPlaceholder).addClass('placeholder');
							} else {
								divText.text(optionSelected.text());
							}
	
							// ╨╛╨┐╤Ç╨╡╨┤╨╡╨╗╤Å╨╡╨╝ ╤ü╨░╨╝╤ï╨╣ ╤ê╨╕╤Ç╨╛╨║╨╕╨╣ ╨┐╤â╨╜╨║╤é ╤ü╨╡╨╗╨╡╨║╤é╨░
							var liWidthInner = 0,
									liWidth = 0;
							li.css({'display': 'inline-block'});
							li.each(function() {
								var l = $(this);
								if (l.innerWidth() > liWidthInner) {
									liWidthInner = l.innerWidth();
									liWidth = l.width();
								}
							});
							li.css({'display': ''});
	
							// ╨┐╨╛╨┤╤ü╤é╤Ç╨░╨╕╨▓╨░╨╡╨╝ ╤ê╨╕╤Ç╨╕╨╜╤â ╤ü╨▓╨╡╤Ç╨╜╤â╤é╨╛╨│╨╛ ╤ü╨╡╨╗╨╡╨║╤é╨░ ╨▓ ╨╖╨░╨▓╨╕╤ü╨╕╨╝╨╛╤ü╤é╨╕
							// ╨╛╤é ╤ê╨╕╤Ç╨╕╨╜╤ï ╨┐╨╗╨╡╨╣╤ü╤à╨╛╨╗╨┤╨╡╤Ç╨░ ╨╕╨╗╨╕ ╤ü╨░╨╝╨╛╨│╨╛ ╤ê╨╕╤Ç╨╛╨║╨╛╨│╨╛ ╨┐╤â╨╜╨║╤é╨░
							if (divText.is('.placeholder') && (divText.width() > liWidthInner)) {
								divText.width(divText.width());
							} else {
								var selClone = selectbox.clone().appendTo('body').width('auto');
								var selCloneWidth = selClone.outerWidth();
								selClone.remove();
								if (selCloneWidth == selectbox.outerWidth()) {
									divText.width(liWidth);
								}
							}
	
							// ╨┐╨╛╨┤╤ü╤é╤Ç╨░╨╕╨▓╨░╨╡╨╝ ╤ê╨╕╤Ç╨╕╨╜╤â ╨▓╤ï╨┐╨░╨┤╨░╤Ä╤ë╨╡╨│╨╛ ╤ü╨┐╨╕╤ü╨║╨░ ╨▓ ╨╖╨░╨▓╨╕╤ü╨╕╨╝╨╛╤ü╤é╨╕ ╨╛╤é ╤ü╨░╨╝╨╛╨│╨╛ ╤ê╨╕╤Ç╨╛╨║╨╛╨│╨╛ ╨┐╤â╨╜╨║╤é╨░
							if (liWidthInner > selectbox.width()) dropdown.width(liWidthInner);
	
							// ╨┐╤Ç╤Å╤ç╨╡╨╝ 1-╤Ä ╨┐╤â╤ü╤é╤â╤Ä ╨╛╨┐╤å╨╕╤Ä, ╨╡╤ü╨╗╨╕ ╨╛╨╜╨░ ╨╡╤ü╤é╤î ╨╕ ╨╡╤ü╨╗╨╕ ╨░╤é╤Ç╨╕╨▒╤â╤é data-placeholder ╨╜╨╡ ╨┐╤â╤ü╤é╨╛╨╣
							// ╨╡╤ü╨╗╨╕ ╨▓╤ü╨╡ ╨╢╨╡ ╨╜╤â╨╢╨╜╨╛, ╤ç╤é╨╛╨▒╤ï ╨┐╨╡╤Ç╨▓╨░╤Å ╨┐╤â╤ü╤é╨░╤Å ╨╛╨┐╤å╨╕╤Å ╨╛╤é╨╛╨▒╤Ç╨░╨╢╨░╨╗╨░╤ü╤î, ╤é╨╛ ╤â╨║╨░╨╖╤ï╨▓╨░╨╡╨╝ ╤â ╤ü╨╡╨╗╨╡╨║╤é╨░: data-placeholder=""
							if (option.first().text() === '' && el.data('placeholder') !== '') {
								li.first().hide();
							}
	
							var selectHeight = selectbox.outerHeight(true);
							var searchHeight = search.parent().outerHeight(true) || 0;
							var isMaxHeight = ul.css('max-height');
							var liSelected = li.filter('.selected');
							if (liSelected.length < 1) li.first().addClass('selected sel');
							if (li.data('li-height') === undefined) {
								var liOuterHeight = li.outerHeight();
								if (selectPlaceholder !== false) liOuterHeight = li.eq(1).outerHeight();
								li.data('li-height', liOuterHeight);
							}
							var position = dropdown.css('top');
							if (dropdown.css('left') == 'auto') dropdown.css({left: 0});
							if (dropdown.css('top') == 'auto') {
								dropdown.css({top: selectHeight});
								position = selectHeight;
							}
							dropdown.hide();
	
							// ╨╡╤ü╨╗╨╕ ╨▓╤ï╨▒╤Ç╨░╨╜ ╨╜╨╡ ╨┤╨╡╤ä╨╛╨╗╤é╨╜╤ï╨╣ ╨┐╤â╨╜╨║╤é
							if (liSelected.length) {
								// ╨┤╨╛╨▒╨░╨▓╨╗╤Å╨╡╨╝ ╨║╨╗╨░╤ü╤ü, ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╤Ä╤ë╨╕╨╣ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╡ ╤ü╨╡╨╗╨╡╨║╤é╨░
								if (option.first().text() != optionSelected.text()) {
									selectbox.addClass('changed');
								}
								// ╨┐╨╡╤Ç╨╡╨┤╨░╨╡╨╝ ╤ü╨╡╨╗╨╡╨║╤é╤â ╨║╨╗╨░╤ü╤ü ╨▓╤ï╨▒╤Ç╨░╨╜╨╜╨╛╨│╨╛ ╨┐╤â╨╜╨║╤é╨░
								selectbox.data('jqfs-class', liSelected.data('jqfs-class'));
								selectbox.addClass(liSelected.data('jqfs-class'));
							}
	
							// ╨╡╤ü╨╗╨╕ ╤ü╨╡╨╗╨╡╨║╤é ╨╜╨╡╨░╨║╤é╨╕╨▓╨╜╤ï╨╣
							if (el.is(':disabled')) {
								selectbox.addClass('disabled');
								return false;
							}
	
							// ╨┐╤Ç╨╕ ╨║╨╗╨╕╨║╨╡ ╨╜╨░ ╨┐╤ü╨╡╨▓╨┤╨╛╤ü╨╡╨╗╨╡╨║╤é╨╡
							divSelect.click(function() {
	
								// ╨║╨╛╨╗╨▒╨╡╨║ ╨┐╤Ç╨╕ ╨╖╨░╨║╤Ç╤ï╤é╨╕╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
								if ($('div.jq-selectbox').filter('.opened').length) {
									opt.onSelectClosed.call($('div.jq-selectbox').filter('.opened'));
								}
	
								el.focus();
	
								// ╨╡╤ü╨╗╨╕ iOS, ╤é╨╛ ╨╜╨╡ ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╨╡╨╝ ╨▓╤ï╨┐╨░╨┤╨░╤Ä╤ë╨╕╨╣ ╤ü╨┐╨╕╤ü╨╛╨║,
								// ╤é.╨║. ╨╛╤é╨╛╨▒╤Ç╨░╨╢╨░╨╡╤é╤ü╤Å ╨╜╨░╤é╨╕╨▓╨╜╤ï╨╣ ╨╕ ╨╜╨╡╨╕╨╖╨▓╨╡╤ü╤é╨╜╨╛, ╨║╨░╨║ ╨╡╨│╨╛ ╤ü╨┐╤Ç╤Å╤é╨░╤é╤î
								if (iOS) return;
	
								// ╤â╨╝╨╜╨╛╨╡ ╨┐╨╛╨╖╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡
								var win = $(window);
								var liHeight = li.data('li-height');
								var topOffset = selectbox.offset().top;
								var bottomOffset = win.height() - selectHeight - (topOffset - win.scrollTop());
								var visible = el.data('visible-options');
								if (visible === undefined || visible === '') visible = opt.selectVisibleOptions;
								var minHeight = liHeight * 5;
								var newHeight = liHeight * visible;
								if (visible > 0 && visible < 6) minHeight = newHeight;
								if (visible === 0) newHeight = 'auto';
	
								var dropDown = function() {
									dropdown.height('auto').css({bottom: 'auto', top: position});
									var maxHeightBottom = function() {
										ul.css('max-height', Math.floor((bottomOffset - 20 - searchHeight) / liHeight) * liHeight);
									};
									maxHeightBottom();
									ul.css('max-height', newHeight);
									if (isMaxHeight != 'none') {
										ul.css('max-height', isMaxHeight);
									}
									if (bottomOffset < (dropdown.outerHeight() + 20)) {
										maxHeightBottom();
									}
								};
	
								var dropUp = function() {
									dropdown.height('auto').css({top: 'auto', bottom: position});
									var maxHeightTop = function() {
										ul.css('max-height', Math.floor((topOffset - win.scrollTop() - 20 - searchHeight) / liHeight) * liHeight);
									};
									maxHeightTop();
									ul.css('max-height', newHeight);
									if (isMaxHeight != 'none') {
										ul.css('max-height', isMaxHeight);
									}
									if ((topOffset - win.scrollTop() - 20) < (dropdown.outerHeight() + 20)) {
										maxHeightTop();
									}
								};
	
								if (selectSmartPositioning === true || selectSmartPositioning === 1) {
									// ╤Ç╨░╤ü╨║╤Ç╤ï╤é╨╕╨╡ ╨▓╨╜╨╕╨╖
									if (bottomOffset > (minHeight + searchHeight + 20)) {
										dropDown();
										selectbox.removeClass('dropup').addClass('dropdown');
									// ╤Ç╨░╤ü╨║╤Ç╤ï╤é╨╕╨╡ ╨▓╨▓╨╡╤Ç╤à
									} else {
										dropUp();
										selectbox.removeClass('dropdown').addClass('dropup');
									}
								} else if (selectSmartPositioning === false || selectSmartPositioning === 0) {
									// ╤Ç╨░╤ü╨║╤Ç╤ï╤é╨╕╨╡ ╨▓╨╜╨╕╨╖
									if (bottomOffset > (minHeight + searchHeight + 20)) {
										dropDown();
										selectbox.removeClass('dropup').addClass('dropdown');
									}
								} else {
									// ╨╡╤ü╨╗╨╕ ╤â╨╝╨╜╨╛╨╡ ╨┐╨╛╨╖╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡ ╨╛╤é╨║╨╗╤Ä╤ç╨╡╨╜╨╛
									dropdown.height('auto').css({bottom: 'auto', top: position});
									ul.css('max-height', newHeight);
									if (isMaxHeight != 'none') {
										ul.css('max-height', isMaxHeight);
									}
								}
	
								// ╨╡╤ü╨╗╨╕ ╨▓╤ï╨┐╨░╨┤╨░╤Ä╤ë╨╕╨╣ ╤ü╨┐╨╕╤ü╨╛╨║ ╨▓╤ï╤à╨╛╨┤╨╕╤é ╨╖╨░ ╨┐╤Ç╨░╨▓╤ï╨╣ ╨║╤Ç╨░╨╣ ╨╛╨║╨╜╨░ ╨▒╤Ç╨░╤â╨╖╨╡╤Ç╨░,
								// ╤é╨╛ ╨╝╨╡╨╜╤Å╨╡╨╝ ╨┐╨╛╨╖╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╨╡ ╤ü ╨╗╨╡╨▓╨╛╨│╨╛ ╨╜╨░ ╨┐╤Ç╨░╨▓╨╛╨╡
								if (selectbox.offset().left + dropdown.outerWidth() > win.width()) {
									dropdown.css({left: 'auto', right: 0});
								}
								// ╨║╨╛╨╜╨╡╤å ╤â╨╝╨╜╨╛╨│╨╛ ╨┐╨╛╨╖╨╕╤å╨╕╨╛╨╜╨╕╤Ç╨╛╨▓╨░╨╜╨╕╤Å
	
								$('div.jqselect').css({zIndex: (selectzIndex - 1)}).removeClass('opened');
								selectbox.css({zIndex: selectzIndex});
								if (dropdown.is(':hidden')) {
									$('div.jq-selectbox__dropdown:visible').hide();
									dropdown.show();
									selectbox.addClass('opened focused');
									// ╨║╨╛╨╗╨▒╨╡╨║ ╨┐╤Ç╨╕ ╨╛╤é╨║╤Ç╤ï╤é╨╕╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
									opt.onSelectOpened.call(selectbox);
								} else {
									dropdown.hide();
									selectbox.removeClass('opened dropup dropdown');
									// ╨║╨╛╨╗╨▒╨╡╨║ ╨┐╤Ç╨╕ ╨╖╨░╨║╤Ç╤ï╤é╨╕╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
									if ($('div.jq-selectbox').filter('.opened').length) {
										opt.onSelectClosed.call(selectbox);
									}
								}
	
								// ╨┐╨╛╨╕╤ü╨║╨╛╨▓╨╛╨╡ ╨┐╨╛╨╗╨╡
								if (search.length) {
									search.val('').keyup();
									notFound.hide();
									search.keyup(function() {
										var query = $(this).val();
										li.each(function() {
											if (!$(this).html().match(new RegExp('.*?' + query + '.*?', 'i'))) {
												$(this).hide();
											} else {
												$(this).show();
											}
										});
										// ╨┐╤Ç╤Å╤ç╨╡╨╝ 1-╤Ä ╨┐╤â╤ü╤é╤â╤Ä ╨╛╨┐╤å╨╕╤Ä
										if (option.first().text() === '' && el.data('placeholder') !== '') {
											li.first().hide();
										}
										if (li.filter(':visible').length < 1) {
											notFound.show();
										} else {
											notFound.hide();
										}
									});
								}
	
								// ╨┐╤Ç╨╛╨║╤Ç╤â╤ç╨╕╨▓╨░╨╡╨╝ ╨┤╨╛ ╨▓╤ï╨▒╤Ç╨░╨╜╨╜╨╛╨│╨╛ ╨┐╤â╨╜╨║╤é╨░ ╨┐╤Ç╨╕ ╨╛╤é╨║╤Ç╤ï╤é╨╕╨╕ ╤ü╨┐╨╕╤ü╨║╨░
								if (li.filter('.selected').length) {
									if (el.val() === '') {
										ul.scrollTop(0);
									} else {
										// ╨╡╤ü╨╗╨╕ ╨╜╨╡╤ç╨╡╤é╨╜╨╛╨╡ ╨║╨╛╨╗╨╕╤ç╨╡╤ü╤é╨▓╨╛ ╨▓╨╕╨┤╨╕╨╝╤ï╤à ╨┐╤â╨╜╨║╤é╨╛╨▓,
										// ╤é╨╛ ╨▓╤ï╤ü╨╛╤é╤â ╨┐╤â╨╜╨║╤é╨░ ╨┤╨╡╨╗╨╕╨╝ ╨┐╨╛╨┐╨╛╨╗╨░╨╝ ╨┤╨╗╤Å ╨┐╨╛╤ü╨╗╨╡╨┤╤â╤Ä╤ë╨╡╨│╨╛ ╤Ç╨░╤ü╤ç╨╡╤é╨░
										if ( (ul.innerHeight() / liHeight) % 2 !== 0 ) liHeight = liHeight / 2;
										ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - ul.innerHeight() / 2 + liHeight);
									}
								}
	
								preventScrolling(ul);
	
							}); // end divSelect.click()
	
							// ╨┐╤Ç╨╕ ╨╜╨░╨▓╨╡╨┤╨╡╨╜╨╕╨╕ ╨║╤â╤Ç╤ü╨╛╤Ç╨░ ╨╜╨░ ╨┐╤â╨╜╨║╤é ╤ü╨┐╨╕╤ü╨║╨░
							li.hover(function() {
								$(this).siblings().removeClass('selected');
							});
							var selectedText = li.filter('.selected').text();
	
							// ╨┐╤Ç╨╕ ╨║╨╗╨╕╨║╨╡ ╨╜╨░ ╨┐╤â╨╜╨║╤é ╤ü╨┐╨╕╤ü╨║╨░
							li.filter(':not(.disabled):not(.optgroup)').click(function() {
								el.focus();
								var t = $(this);
								var liText = t.text();
								if (!t.is('.selected')) {
									var index = t.index();
									index -= t.prevAll('.optgroup').length;
									t.addClass('selected sel').siblings().removeClass('selected sel');
									option.prop('selected', false).eq(index).prop('selected', true);
									selectedText = liText;
									divText.text(liText);
	
									// ╨┐╨╡╤Ç╨╡╨┤╨░╨╡╨╝ ╤ü╨╡╨╗╨╡╨║╤é╤â ╨║╨╗╨░╤ü╤ü ╨▓╤ï╨▒╤Ç╨░╨╜╨╜╨╛╨│╨╛ ╨┐╤â╨╜╨║╤é╨░
									if (selectbox.data('jqfs-class')) selectbox.removeClass(selectbox.data('jqfs-class'));
									selectbox.data('jqfs-class', t.data('jqfs-class'));
									selectbox.addClass(t.data('jqfs-class'));
	
									el.change();
								}
								dropdown.hide();
								selectbox.removeClass('opened dropup dropdown');
								// ╨║╨╛╨╗╨▒╨╡╨║ ╨┐╤Ç╨╕ ╨╖╨░╨║╤Ç╤ï╤é╨╕╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
								opt.onSelectClosed.call(selectbox);
	
							});
							dropdown.mouseout(function() {
								$('li.sel', dropdown).addClass('selected');
							});
	
							// ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╡ ╤ü╨╡╨╗╨╡╨║╤é╨░
							el.on('change.styler', function() {
								divText.text(option.filter(':selected').text()).removeClass('placeholder');
								li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel');
								// ╨┤╨╛╨▒╨░╨▓╨╗╤Å╨╡╨╝ ╨║╨╗╨░╤ü╤ü, ╨┐╨╛╨║╨░╨╖╤ï╨▓╨░╤Ä╤ë╨╕╨╣ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╡ ╤ü╨╡╨╗╨╡╨║╤é╨░
								if (option.first().text() != li.filter('.selected').text()) {
									selectbox.addClass('changed');
								} else {
									selectbox.removeClass('changed');
								}
							})
							.on('focus.styler', function() {
								selectbox.addClass('focused');
								$('div.jqselect').not('.focused').removeClass('opened dropup dropdown').find('div.jq-selectbox__dropdown').hide();
							})
							.on('blur.styler', function() {
								selectbox.removeClass('focused');
							})
							// ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╡ ╤ü╨╡╨╗╨╡╨║╤é╨░ ╤ü ╨║╨╗╨░╨▓╨╕╨░╤é╤â╤Ç╤ï
							.on('keydown.styler keyup.styler', function(e) {
								var liHeight = li.data('li-height');
								if (el.val() === '') {
									divText.text(selectPlaceholder).addClass('placeholder');
								} else {
									divText.text(option.filter(':selected').text());
								}
								li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel');
								// ╨▓╨▓╨╡╤Ç╤à, ╨▓╨╗╨╡╨▓╨╛, Page Up, Home
								if (e.which == 38 || e.which == 37 || e.which == 33 || e.which == 36) {
									if (el.val() === '') {
										ul.scrollTop(0);
									} else {
										ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top);
									}
								}
								// ╨▓╨╜╨╕╨╖, ╨▓╨┐╤Ç╨░╨▓╨╛, Page Down, End
								if (e.which == 40 || e.which == 39 || e.which == 34 || e.which == 35) {
									ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - ul.innerHeight() + liHeight);
								}
								// ╨╖╨░╨║╤Ç╤ï╨▓╨░╨╡╨╝ ╨▓╤ï╨┐╨░╨┤╨░╤Ä╤ë╨╕╨╣ ╤ü╨┐╨╕╤ü╨╛╨║ ╨┐╤Ç╨╕ ╨╜╨░╨╢╨░╤é╨╕╨╕ Enter
								if (e.which == 13) {
									e.preventDefault();
									dropdown.hide();
									selectbox.removeClass('opened dropup dropdown');
									// ╨║╨╛╨╗╨▒╨╡╨║ ╨┐╤Ç╨╕ ╨╖╨░╨║╤Ç╤ï╤é╨╕╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
									opt.onSelectClosed.call(selectbox);
								}
							}).on('keydown.styler', function(e) {
								// ╨╛╤é╨║╤Ç╤ï╨▓╨░╨╡╨╝ ╨▓╤ï╨┐╨░╨┤╨░╤Ä╤ë╨╕╨╣ ╤ü╨┐╨╕╤ü╨╛╨║ ╨┐╤Ç╨╕ ╨╜╨░╨╢╨░╤é╨╕╨╕ Space
								if (e.which == 32) {
									e.preventDefault();
									divSelect.click();
								}
							});
	
							// ╨┐╤Ç╤Å╤ç╨╡╨╝ ╨▓╤ï╨┐╨░╨┤╨░╤Ä╤ë╨╕╨╣ ╤ü╨┐╨╕╤ü╨╛╨║ ╨┐╤Ç╨╕ ╨║╨╗╨╕╨║╨╡ ╨╖╨░ ╨┐╤Ç╨╡╨┤╨╡╨╗╨░╨╝╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
							if (!onDocumentClick.registered) {
								$(document).on('click', onDocumentClick);
								onDocumentClick.registered = true;
							}
	
						} // end doSelect()
	
						// ╨╝╤â╨╗╤î╤é╨╕╤ü╨╡╨╗╨╡╨║╤é
						function doMultipleSelect() {
	
							var att = new Attributes();
							var selectbox =
								$('<div class="jq-select-multiple jqselect"></div>')
								.attr({
									id: att.id,
									title: att.title
								})
								.addClass(att.classes)
								.data(att.data)
							;
	
							el.after(selectbox);
	
							makeList();
							selectbox.append('<ul>' + list + '</ul>');
							var ul = $('ul', selectbox);
							var li = $('li', selectbox);
							var size = el.attr('size');
							var ulHeight = ul.outerHeight();
							var liHeight = li.outerHeight();
							if (size !== undefined && size > 0) {
								ul.css({'height': liHeight * size});
							} else {
								ul.css({'height': liHeight * 4});
							}
							if (ulHeight > selectbox.height()) {
								ul.css('overflowY', 'scroll');
								preventScrolling(ul);
								// ╨┐╤Ç╨╛╨║╤Ç╤â╤ç╨╕╨▓╨░╨╡╨╝ ╨┤╨╛ ╨▓╤ï╨▒╤Ç╨░╨╜╨╜╨╛╨│╨╛ ╨┐╤â╨╜╨║╤é╨░
								if (li.filter('.selected').length) {
									ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top);
								}
							}
	
							// ╨┐╤Ç╤Å╤ç╨╡╨╝ ╨╛╤Ç╨╕╨│╨╕╨╜╨░╨╗╤î╨╜╤ï╨╣ ╤ü╨╡╨╗╨╡╨║╤é
							el.prependTo(selectbox);
	
							// ╨╡╤ü╨╗╨╕ ╤ü╨╡╨╗╨╡╨║╤é ╨╜╨╡╨░╨║╤é╨╕╨▓╨╜╤ï╨╣
							if (el.is(':disabled')) {
								selectbox.addClass('disabled');
								option.each(function() {
									if ($(this).is(':selected')) li.eq($(this).index()).addClass('selected');
								});
	
							// ╨╡╤ü╨╗╨╕ ╤ü╨╡╨╗╨╡╨║╤é ╨░╨║╤é╨╕╨▓╨╜╤ï╨╣
							} else {
	
								// ╨┐╤Ç╨╕ ╨║╨╗╨╕╨║╨╡ ╨╜╨░ ╨┐╤â╨╜╨║╤é ╤ü╨┐╨╕╤ü╨║╨░
								li.filter(':not(.disabled):not(.optgroup)').click(function(e) {
									el.focus();
									var clkd = $(this);
									if(!e.ctrlKey && !e.metaKey) clkd.addClass('selected');
									if(!e.shiftKey) clkd.addClass('first');
									if(!e.ctrlKey && !e.metaKey && !e.shiftKey) clkd.siblings().removeClass('selected first');
	
									// ╨▓╤ï╨┤╨╡╨╗╨╡╨╜╨╕╨╡ ╨┐╤â╨╜╨║╤é╨╛╨▓ ╨┐╤Ç╨╕ ╨╖╨░╨╢╨░╤é╨╛╨╝ Ctrl
									if(e.ctrlKey || e.metaKey) {
										if (clkd.is('.selected')) clkd.removeClass('selected first');
											else clkd.addClass('selected first');
										clkd.siblings().removeClass('first');
									}
	
									// ╨▓╤ï╨┤╨╡╨╗╨╡╨╜╨╕╨╡ ╨┐╤â╨╜╨║╤é╨╛╨▓ ╨┐╤Ç╨╕ ╨╖╨░╨╢╨░╤é╨╛╨╝ Shift
									if(e.shiftKey) {
										var prev = false,
												next = false;
										clkd.siblings().removeClass('selected').siblings('.first').addClass('selected');
										clkd.prevAll().each(function() {
											if ($(this).is('.first')) prev = true;
										});
										clkd.nextAll().each(function() {
											if ($(this).is('.first')) next = true;
										});
										if (prev) {
											clkd.prevAll().each(function() {
												if ($(this).is('.selected')) return false;
													else $(this).not('.disabled, .optgroup').addClass('selected');
											});
										}
										if (next) {
											clkd.nextAll().each(function() {
												if ($(this).is('.selected')) return false;
													else $(this).not('.disabled, .optgroup').addClass('selected');
											});
										}
										if (li.filter('.selected').length == 1) clkd.addClass('first');
									}
	
									// ╨╛╤é╨╝╨╡╤ç╨░╨╡╨╝ ╨▓╤ï╨▒╤Ç╨░╨╜╨╜╤ï╨╡ ╨╝╤ï╤ê╤î╤Ä
									option.prop('selected', false);
									li.filter('.selected').each(function() {
										var t = $(this);
										var index = t.index();
										if (t.is('.option')) index -= t.prevAll('.optgroup').length;
										option.eq(index).prop('selected', true);
									});
									el.change();
	
								});
	
								// ╨╛╤é╨╝╨╡╤ç╨░╨╡╨╝ ╨▓╤ï╨▒╤Ç╨░╨╜╨╜╤ï╨╡ ╤ü ╨║╨╗╨░╨▓╨╕╨░╤é╤â╤Ç╤ï
								option.each(function(i) {
									$(this).data('optionIndex', i);
								});
								el.on('change.styler', function() {
									li.removeClass('selected');
									var arrIndexes = [];
									option.filter(':selected').each(function() {
										arrIndexes.push($(this).data('optionIndex'));
									});
									li.not('.optgroup').filter(function(i) {
										return $.inArray(i, arrIndexes) > -1;
									}).addClass('selected');
								})
								.on('focus.styler', function() {
									selectbox.addClass('focused');
								})
								.on('blur.styler', function() {
									selectbox.removeClass('focused');
								});
	
								// ╨┐╤Ç╨╛╨║╤Ç╤â╤ç╨╕╨▓╨░╨╡╨╝ ╤ü ╨║╨╗╨░╨▓╨╕╨░╤é╤â╤Ç╤ï
								if (ulHeight > selectbox.height()) {
									el.on('keydown.styler', function(e) {
										// ╨▓╨▓╨╡╤Ç╤à, ╨▓╨╗╨╡╨▓╨╛, PageUp
										if (e.which == 38 || e.which == 37 || e.which == 33) {
											ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - liHeight);
										}
										// ╨▓╨╜╨╕╨╖, ╨▓╨┐╤Ç╨░╨▓╨╛, PageDown
										if (e.which == 40 || e.which == 39 || e.which == 34) {
											ul.scrollTop(ul.scrollTop() + li.filter('.selected:last').position().top - ul.innerHeight() + liHeight * 2);
										}
									});
								}
	
							}
						} // end doMultipleSelect()
	
						if (el.is('[multiple]')) {
	
							// ╨╡╤ü╨╗╨╕ Android ╨╕╨╗╨╕ iOS, ╤é╨╛ ╨╝╤â╨╗╤î╤é╨╕╤ü╨╡╨╗╨╡╨║╤é ╨╜╨╡ ╤ü╤é╨╕╨╗╨╕╨╖╤â╨╡╨╝
							// ╨┐╤Ç╨╕╤ç╨╕╨╜╨░ ╨┤╨╗╤Å Android - ╨▓ ╤ü╤é╨╕╨╗╨╕╨╖╨╛╨▓╨░╨╜╨╜╨╛╨╝ ╤ü╨╡╨╗╨╡╨║╤é╨╡ ╨╜╨╡╤é ╨▓╨╛╨╖╨╝╨╛╨╢╨╜╨╛╤ü╤é╨╕ ╨▓╤ï╨▒╤Ç╨░╤é╤î ╨╜╨╡╤ü╨║╨╛╨╗╤î╨║╨╛ ╨┐╤â╨╜╨║╤é╨╛╨▓
							// ╨┐╤Ç╨╕╤ç╨╕╨╜╨░ ╨┤╨╗╤Å iOS - ╨▓ ╤ü╤é╨╕╨╗╨╕╨╖╨╛╨▓╨░╨╜╨╜╨╛╨╝ ╤ü╨╡╨╗╨╡╨║╤é╨╡ ╨╜╨╡╨┐╤Ç╨░╨▓╨╕╨╗╤î╨╜╨╛ ╨╛╤é╨╛╨▒╤Ç╨░╨╢╨░╤Ä╤é╤ü╤Å ╨▓╤ï╨▒╤Ç╨░╨╜╨╜╤ï╨╡ ╨┐╤â╨╜╨║╤é╤ï
							if (Android || iOS) return;
	
							doMultipleSelect();
						} else {
							doSelect();
						}
	
					}; // end selectboxOutput()
	
					selectboxOutput();
	
					// ╨╛╨▒╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤Ç╨╕ ╨┤╨╕╨╜╨░╨╝╨╕╤ç╨╡╤ü╨║╨╛╨╝ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╕
					el.on('refresh', function() {
						el.off('.styler').parent().before(el).remove();
						selectboxOutput();
					});
	
				// end select
	
				// reset
				} else if (el.is(':reset')) {
					el.on('click', function() {
						setTimeout(function() {
							el.closest('form').find('input, select').trigger('refresh');
						}, 1);
					});
				} // end reset
	
			}, // init: function()
	
			// ╨┤╨╡╤ü╤é╤Ç╤â╨║╤é╨╛╤Ç
			destroy: function() {
	
				var el = $(this.element);
	
				if (el.is(':checkbox') || el.is(':radio')) {
					el.removeData('_' + pluginName).off('.styler refresh').removeAttr('style').parent().before(el).remove();
					el.closest('label').add('label[for="' + el.attr('id') + '"]').off('.styler');
				} else if (el.is('input[type="number"]')) {
					el.removeData('_' + pluginName).off('.styler refresh').closest('.jq-number').before(el).remove();
				} else if (el.is(':file') || el.is('select')) {
					el.removeData('_' + pluginName).off('.styler refresh').removeAttr('style').parent().before(el).remove();
				}
	
			} // destroy: function()
	
		}; // Plugin.prototype
	
		$.fn[pluginName] = function(options) {
			var args = arguments;
			if (options === undefined || typeof options === 'object') {
				this.each(function() {
					if (!$.data(this, '_' + pluginName)) {
						$.data(this, '_' + pluginName, new Plugin(this, options));
					}
				})
				// ╨║╨╛╨╗╨▒╨╡╨║ ╨┐╨╛╤ü╨╗╨╡ ╨▓╤ï╨┐╨╛╨╗╨╜╨╡╨╜╨╕╤Å ╨┐╨╗╨░╨│╨╕╨╜╨░
				.promise()
				.done(function() {
					var opt = $(this[0]).data('_' + pluginName);
					if (opt) opt.options.onFormStyled.call();
				});
				return this;
			} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
				var returns;
				this.each(function() {
					var instance = $.data(this, '_' + pluginName);
					if (instance instanceof Plugin && typeof instance[options] === 'function') {
						returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
					}
				});
				return returns !== undefined ? returns : this;
			}
		};
	
		// ╨┐╤Ç╤Å╤ç╨╡╨╝ ╨▓╤ï╨┐╨░╨┤╨░╤Ä╤ë╨╕╨╣ ╤ü╨┐╨╕╤ü╨╛╨║ ╨┐╤Ç╨╕ ╨║╨╗╨╕╨║╨╡ ╨╖╨░ ╨┐╤Ç╨╡╨┤╨╡╨╗╨░╨╝╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
		function onDocumentClick(e) {
			// e.target.nodeName != 'OPTION' - ╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╛ ╨┤╨╗╤Å ╨╛╨▒╤à╨╛╨┤╨░ ╨▒╨░╨│╨░ ╨▓ Opera ╨╜╨░ ╨┤╨▓╨╕╨╢╨║╨╡ Presto
			// (╨┐╤Ç╨╕ ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░ ╤ü ╨║╨╗╨░╨▓╨╕╨░╤é╤â╤Ç╤ï ╤ü╤Ç╨░╨▒╨░╤é╤ï╨▓╨░╨╡╤é ╤ü╨╛╨▒╤ï╤é╨╕╨╡ onclick)
			if (!$(e.target).parents().hasClass('jq-selectbox') && e.target.nodeName != 'OPTION') {
				if ($('div.jq-selectbox.opened').length) {
					var selectbox = $('div.jq-selectbox.opened'),
							search = $('div.jq-selectbox__search input', selectbox),
							dropdown = $('div.jq-selectbox__dropdown', selectbox),
							opt = selectbox.find('select').data('_' + pluginName).options;
	
					// ╨║╨╛╨╗╨▒╨╡╨║ ╨┐╤Ç╨╕ ╨╖╨░╨║╤Ç╤ï╤é╨╕╨╕ ╤ü╨╡╨╗╨╡╨║╤é╨░
					opt.onSelectClosed.call(selectbox);
	
					if (search.length) search.val('').keyup();
					dropdown.hide().find('li.sel').addClass('selected');
					selectbox.removeClass('focused opened dropup dropdown');
				}
			}
		}
		onDocumentClick.registered = false;
	
	}));

/***/ }

})
//# sourceMappingURL=0.1eea411858ce989d03a0.hot-update.js.map