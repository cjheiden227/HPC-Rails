/*
 * stickyNavbar.js v1.1.2
 * https://github.com/jbutko/stickyNavbar.js
 * Fancy sticky navigation jQuery plugin with smart anchor links highlighting
 *
 * Developed and maintenained under MIT licence by Jozef Butko - www.jozefbutko.com
 * http://www.opensource.org/licenses/MIT

 * Original jquery-browser code Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * CREDITS:
 * Daniel Eden for Animate.CSS:
 * http://daneden.github.io/animate.css/
 * jQuery easing plugin:
 * http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * COPYRIGHT (C) 2014 Jozef Butko
 * https://github.com/jbutko
 * LAST UPDATE: 25/08/2014
 *
 */

!function(a,b,c){"use strict";a.fn.stickyNavbar=function(d){var e=a.extend({activeClass:"active",sectionSelector:"scrollto",animDuration:350,startAt:0,easing:"swing",animateCSS:!0,animateCSSRepeat:!1,cssAnimation:"fadeInDown",jqueryEffects:!1,jqueryAnim:"slideDown",selector:"a",mobile:!1,mobileWidth:480,zindex:9999,stickyModeClass:"sticky",unstickyModeClass:"unsticky"},d),f=a("."+e.sectionSelector);return this.each(function(){var d=a(this),g=d.css("position"),h=d.css("zIndex"),i=d.offset().top,j="auto"===d.css("top")?0:d.css("top"),k="a"===e.selector?d.find("li a"):d.find("li"),m=(d.find("li a[href*=#]"),d.outerHeight(!0)),n=0;k.click(function(b){var c=a(this).attr("href");if("http"===c.substring(0,4)||"mailto:"===c.substring(0,7))return!0;var f=k.index(this),g=c;++n,"0"===f&&(n=0),b.preventDefault(),1===n&&d.offset().top>i?a("html, body").stop().animate({scrollTop:a(g).offset().top-m+2+"px"},{duration:e.animDuration,easing:e.easing}):1===n||d.offset().top===i||0===f?a("html, body").stop().animate({scrollTop:a(g).offset().top-2*m+2+"px"},{duration:e.animDuration,easing:e.easing}):2===n&&d.offset().top<i?a("html, body").stop().animate({scrollTop:a(g).offset().top+2+"px"},{duration:e.animDuration,easing:e.easing}):a("html, body").stop().animate({scrollTop:a(g).offset().top-m+2+"px"},{duration:e.animDuration,easing:e.easing})});var o=function(){var l=a(b),n=l.scrollTop(),o=l.width(),p=l.height();return!e.mobile&&o<e.mobileWidth?(d.css("position",g),void 0):(k.removeClass(e.activeClass),f.each(function(){var b=a(this).offset().top-m,c=a(this).outerHeight(!0)+b;n>=b&&c>=n&&("a"===e.selector?d.find('li a[href~="#'+this.id+'"]').addClass(e.activeClass):d.find('li a[href~="#'+this.id+'"]').parent().addClass(e.activeClass))}),n>=i+e.startAt?(d.removeClass(e.unstickyModeClass).addClass(" "+e.stickyModeClass),d.css({position:"fixed",zIndex:e.zindex}).stop(),e.jqueryEffects?(e.animateCSSRepeat||d.hide().stop()[e.jqueryAnim](e.animDuration,e.easing),d.hide().stop()[e.jqueryAnim](e.animDuration,e.easing)):e.animateCSS?e.animateCSSRepeat?d.addClass(e.cssAnimation+" animated").one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){d.removeClass(e.cssAnimation+" animated")}):d.addClass(e.cssAnimation+" animated").one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd"):d.stop()):d.css({position:e.$selfPosition,zIndex:h}).removeClass(e.stickyModeClass).addClass(" "+e.unstickyModeClass),l.scrollTop()+p>=a(c).height()&&k.removeClass(e.activeClass).last().addClass(e.activeClass),i>=n&&(d.removeClass(e.cssAnimation+" animated"),e.jqueryEffects?(0===n&&k.removeClass(e.activeClass),n>=i?d.css({position:"fixed",zIndex:e.zindex}).hide().stop()[e.jqueryAnim](e.animDuration,e.easing):d.css({position:g,zIndex:e.zindex})):(0===n&&k.removeClass(e.activeClass),d.css({position:g,top:j}).stop().animate({top:j},e.animDuration,e.easing))),void 0)};a(b).scroll(o),a(b).ready(o),a(b).resize(o)})}}(jQuery,window,document);
