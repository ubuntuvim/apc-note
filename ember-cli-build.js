/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // <script src="//cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>
  // app.import("bower_components/editor.md/lib/codemirror/codemirror.min.css");
  // app.import("bower_components/editor.md/lib/codemirror/addon/dialog/dialog.css");
  // app.import("bower_components/editor.md/lib/codemirror/addon/search/matchesonscrollbar.css");
  // app.import("bower_components/editor.md/lib/codemirror/codemirror.min.js");
  //
  // app.import("bower_components/editor.md/css/editormd.css");
  // app.import("bower_components/editor.md/editormd.js");
  // app.import("bower_components/editor.md/editormd.amd.js");

  app.import("bower_components/showdown/dist/showdown.js");

  return app.toTree();
};
