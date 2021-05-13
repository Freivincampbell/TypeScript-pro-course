"use strict";
exports.__esModule = true;
var hyperscript = require("hyperscript");
var Hello = function (_a) {
    var place = _a.place;
    return hyperscript("h1", null,
        "Hello, ",
        place,
        "!");
};
hyperscript.render(hyperscript(Hello, { place: "World" }), document.getElementById('example'));
