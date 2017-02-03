define(function(require, exports, module) {
	var $ = require("jquery");
	var marionette = require('marionette');
	var _ = require("underscore");
	var app = require("app/app");

	var NamecodesTemplate = require("hbs!../templates/namecodes");
	var HeaderView = require("./header-view").HeaderView;

	var Namecodes = marionette.LayoutView.extend({
		
		className: "contact row",

		template: NamecodesTemplate,

		regions: {
			header: ".js-header",
			deck: ".js-deck",
			footer: ".js-footer"
		},

		getWordsList: function() {

			// _.bindAll(this, "onGetWordsSuccess");

			$.get("data.json")
				.done(onGetWordsSuccess.bind(this))
				.fail(onGetWordsFail);

			function onGetWordsSuccess(words) {
				this.wordsList = words.data;

				this.getRegion("header").show(new HeaderView({ wordsList: this.wordsList }));
			}

			function onGetWordsFail(words) {
				alert('failed to get words from data.json');
			}
		},

		initialize: function() {
			this.app = app;

			this.getWordsList();
		}
		
	});

	exports.Namecodes = Namecodes;
});