(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[320],{6593:function(e,t,i){"use strict";i(7327),i(5827);var o,a=i(3609),n=i(3609);a.extend(BookReader.defaultOptions,{enableAutoPlayPlugin:!0}),BookReader.prototype.setup=(o=BookReader.prototype.setup,function(e){o.call(this,e),this.auto=!1,this.autoTimer=null,this.flipDelay=5e3}),BookReader.prototype.init=function(e){return function(t){var i=this;e.call(this,t),this.options.enableAutoPlayPlugin&&this.bind(BookReader.eventNames.stop,(function(){return i.autoStop()}))}}(BookReader.prototype.init),BookReader.prototype.bindNavigationHandlers=function(e){return function(){var t=this;if(e.call(this),this.options.enableAutoPlayPlugin){var i=this.$(".BRicon").add(".BRmobileMenu .BRicon");i.filter(".play").click((function(){return t.autoToggle(),!1})),i.filter(".pause").click((function(){return t.autoToggle(),!1}))}}}(BookReader.prototype.bindNavigationHandlers),BookReader.prototype.autoToggle=function(e){var t=this;if(this.options.enableAutoPlayPlugin){var i=n.extend({flipSpeed:this.flipSpeed,flipDelay:this.flipDelay},e);this.flipSpeed="number"==typeof i.flipSpeed?i.flipSpeed:this.flipSpeed,this.flipDelay="number"==typeof i.flipDelay?i.flipDelay:this.flipDelay,this.trigger(BookReader.eventNames.stop);var o=!1;this.constMode2up!=this.mode&&(o=!0,this.switchMode(this.constMode2up)),this.reduce<this.twoPageGetAutofitReduce()&&this.zoom("auto"),null==this.autoTimer?("rl"==this.pageProgression&&o||this.flipFwdToIndex(),this.$(".play").hide(),this.$(".pause").show(),this.autoTimer=setInterval((function(){t.animating||(Math.max(t.twoPage.currentIndexL,t.twoPage.currentIndexR)>=t.lastDisplayableIndex()?t.flipBackToIndex(1):t.flipFwdToIndex())}),this.flipDelay)):this.autoStop()}},BookReader.prototype.autoStop=function(){this.options.enableAutoPlayPlugin&&null!=this.autoTimer&&(clearInterval(this.autoTimer),this.flipSpeed="fast",this.$(".pause").hide(),this.$(".play").show(),this.autoTimer=null)}}},0,[[6593,898]]]);
//# sourceMappingURL=plugin.autoplay.js.map