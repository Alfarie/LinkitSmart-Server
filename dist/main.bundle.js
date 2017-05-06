webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(121);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_live_data_component_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_point_set_point_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'live', component: __WEBPACK_IMPORTED_MODULE_2__live_live_data_component_component__["a" /* LiveDataComponentComponent */] },
    { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_3__set_point_set_point_component__["a" /* SetPointComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(197),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shares_socket_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__live_live_data_component_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__set_point_set_point_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shares_data_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shares_user_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_app_routing_module__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__live_live_data_component_component__["a" /* LiveDataComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__set_point_set_point_component__["a" /* SetPointComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shares_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_9__shares_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_10__shares_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
        this.isAuthen = false;
    }
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "body {\n    padding-top: 90px;\n}\n\n.title {\n    text-align: center;\n    color: #666;\n    font-size: 18px;\n    margin-bottom: 20px;\n}\n\n.panel-login {\n    border-color: #ccc;\n    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);\n}\n\n.panel-login>.panel-heading {\n    color: #00415d;\n    background-color: #fff;\n    border-color: #fff;\n    text-align: center;\n}\n\n.panel-login>.panel-heading a {\n    text-decoration: none;\n    color: #666;\n    font-weight: bold;\n    font-size: 15px;\n    transition: all 0.1s linear;\n}\n\n.panel-login>.panel-heading a.active {\n    color: #029f5b;\n    font-size: 18px;\n}\n\n.panel-login>.panel-heading hr {\n    margin-top: 10px;\n    margin-bottom: 0px;\n    clear: both;\n    border: 0;\n    height: 1px;\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));\n}\n\n.panel-login input[type=\"text\"],\n.panel-login input[type=\"email\"],\n.panel-login input[type=\"password\"] {\n    height: 45px;\n    border: 1px solid #ddd;\n    font-size: 16px;\n    transition: all 0.1s linear;\n}\n\n.panel-login input:hover,\n.panel-login input:focus {\n    outline: none;\n    box-shadow: none;\n    border-color: #ccc;\n}\n\n.btn-login {\n    background-color: #59B2E0;\n    outline: none;\n    color: #fff;\n    font-size: 14px;\n    height: auto;\n    font-weight: normal;\n    padding: 14px 0;\n    text-transform: uppercase;\n    border-color: #59B2E6;\n}\n\n.btn-login:hover,\n.btn-login:focus {\n    color: #fff;\n    background-color: #53A3CD;\n    border-color: #53A3CD;\n}\n\n.forgot-password {\n    text-decoration: underline;\n    color: #888;\n}\n\n.forgot-password:hover,\n.forgot-password:focus {\n    text-decoration: underline;\n    color: #666;\n}\n\n.btn-register {\n    background-color: #1CB94E;\n    outline: none;\n    color: #fff;\n    font-size: 14px;\n    height: auto;\n    font-weight: normal;\n    padding: 14px 0;\n    text-transform: uppercase;\n    border-color: #1CB94A;\n}\n\n.btn-register:hover,\n.btn-register:focus {\n    color: #fff;\n    background-color: #1CA347;\n    border-color: #1CA347;\n}\n\n#fountainG {\n    position: relative;\n    width: 108px;\n    height: 13px;\n    margin: auto;\n}\n\n.fountainG {\n    position: absolute;\n    top: 0;\n    background-color: rgb(0, 0, 0);\n    width: 13px;\n    height: 13px;\n    animation-name: bounce_fountainG;\n    -o-animation-name: bounce_fountainG;\n    -ms-animation-name: bounce_fountainG;\n    -webkit-animation-name: bounce_fountainG;\n    -moz-animation-name: bounce_fountainG;\n    animation-duration: 1.5s;\n    -o-animation-duration: 1.5s;\n    -ms-animation-duration: 1.5s;\n    -webkit-animation-duration: 1.5s;\n    -moz-animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    -o-animation-iteration-count: infinite;\n    -ms-animation-iteration-count: infinite;\n    -webkit-animation-iteration-count: infinite;\n    -moz-animation-iteration-count: infinite;\n    animation-direction: normal;\n    -o-animation-direction: normal;\n    -ms-animation-direction: normal;\n    -webkit-animation-direction: normal;\n    -moz-animation-direction: normal;\n    transform: scale(.3);\n    -o-transform: scale(.3);\n    -ms-transform: scale(.3);\n    -webkit-transform: scale(.3);\n    -moz-transform: scale(.3);\n    border-radius: 9px;\n    -o-border-radius: 9px;\n    -ms-border-radius: 9px;\n    -webkit-border-radius: 9px;\n    -moz-border-radius: 9px;\n}\n\n#fountainG_1 {\n    left: 0;\n    animation-delay: 0.6s;\n    -o-animation-delay: 0.6s;\n    -ms-animation-delay: 0.6s;\n    -webkit-animation-delay: 0.6s;\n    -moz-animation-delay: 0.6s;\n}\n\n#fountainG_2 {\n    left: 13px;\n    animation-delay: 0.75s;\n    -o-animation-delay: 0.75s;\n    -ms-animation-delay: 0.75s;\n    -webkit-animation-delay: 0.75s;\n    -moz-animation-delay: 0.75s;\n}\n\n#fountainG_3 {\n    left: 27px;\n    animation-delay: 0.9s;\n    -o-animation-delay: 0.9s;\n    -ms-animation-delay: 0.9s;\n    -webkit-animation-delay: 0.9s;\n    -moz-animation-delay: 0.9s;\n}\n\n#fountainG_4 {\n    left: 40px;\n    animation-delay: 1.05s;\n    -o-animation-delay: 1.05s;\n    -ms-animation-delay: 1.05s;\n    -webkit-animation-delay: 1.05s;\n    -moz-animation-delay: 1.05s;\n}\n\n#fountainG_5 {\n    left: 54px;\n    animation-delay: 1.2s;\n    -o-animation-delay: 1.2s;\n    -ms-animation-delay: 1.2s;\n    -webkit-animation-delay: 1.2s;\n    -moz-animation-delay: 1.2s;\n}\n\n#fountainG_6 {\n    left: 67px;\n    animation-delay: 1.35s;\n    -o-animation-delay: 1.35s;\n    -ms-animation-delay: 1.35s;\n    -webkit-animation-delay: 1.35s;\n    -moz-animation-delay: 1.35s;\n}\n\n#fountainG_7 {\n    left: 81px;\n    animation-delay: 1.5s;\n    -o-animation-delay: 1.5s;\n    -ms-animation-delay: 1.5s;\n    -webkit-animation-delay: 1.5s;\n    -moz-animation-delay: 1.5s;\n}\n\n#fountainG_8 {\n    left: 94px;\n    animation-delay: 1.64s;\n    -o-animation-delay: 1.64s;\n    -ms-animation-delay: 1.64s;\n    -webkit-animation-delay: 1.64s;\n    -moz-animation-delay: 1.64s;\n}\n\n@keyframes bounce_fountainG {\n    0% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        background-color: rgb(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: scale(.3);\n                transform: scale(.3);\n        background-color: rgb(255, 255, 255);\n    }\n}\n\n@-webkit-keyframes bounce_fountainG {\n    0% {\n        -webkit-transform: scale(1);\n        background-color: rgb(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: scale(.3);\n        background-color: rgb(255, 255, 255);\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 50px; margin-bottom: 20px;\">\n    <h3>GreenHouse</h3>\n    <div class=\"btn-group-lg\" role=\"group\" aria-label=\"...\">\n        <a routerLink=\"/live\"><button type=\"button\" class=\"btn btn-default\">Live</button></a>\n        <!--<a routerLink=\"/setting\"><button type=\"button\" class=\"btn btn-default\">Setting</button></a>-->\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n        <!-- Default panel contents -->\n        <div class=\"panel-heading\">Live Sensor</div>\n\n        <!-- Table -->\n        <table class=\"table\">\n            <tbody>\n                <tr>\n                    <td>time</td>\n                    <td>{{data.sensor.time}}</td>\n                </tr>\n                <tr>\n                    <td>vpd</td>\n                    <td>{{data.sensor.vpd}} kPa</td>\n                </tr>\n                <tr>\n                    <td>soil</td>\n                    <td>{{data.sensor.soil}} %</td>\n                </tr>\n                <tr>\n                    <td>temp</td>\n                    <td>{{data.sensor.temp}} C</td>\n                </tr>\n                <tr>\n                    <td>humi</td>\n                    <td>{{data.sensor.humi}} %</td>\n                </tr>\n                <tr>\n                    <td>light</td>\n                    <td>{{data.sensor.light}} Lux</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n<app-set-point></app-set-point>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row title\">\n        <h1> Intelligent Agro</h1>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <div class=\"panel panel-login\">\n                <div class=\"panel-heading\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <a href=\"#\" id=\"register-form-link\">Register</a>\n                        </div>\n                    </div>\n                    <hr>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <form id=\"login-form\" action=\"http://phpoll.com/login/process\" method=\"post\" role=\"form\" style=\"display: block;\">\n                                <div class=\"form-group\">\n                                    <input [(ngModel)]=\"User.name\" type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input [(ngModel)]=\"User.pass\" type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                                </div>\n                                <div class=\"form-group text-center\">\n                                    <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n                                    <label for=\"remember\"> Remember Me</label>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\n                                            <input (click)=\"ClickLogin()\" type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n                                        </div>\n                                        <div class=\"col-sm-6 col-sm-offset-3\" style=\"margin-top: 30px;\">\n                                            <div id=\"fountainG\">\n                                                <div id=\"fountainG_1\" class=\"fountainG\"></div>\n                                                <div id=\"fountainG_2\" class=\"fountainG\"></div>\n                                                <div id=\"fountainG_3\" class=\"fountainG\"></div>\n                                                <div id=\"fountainG_4\" class=\"fountainG\"></div>\n                                                <div id=\"fountainG_5\" class=\"fountainG\"></div>\n                                                <div id=\"fountainG_6\" class=\"fountainG\"></div>\n                                                <div id=\"fountainG_7\" class=\"fountainG\"></div>\n                                                <div id=\"fountainG_8\" class=\"fountainG\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-12\">\n                                            <div class=\"text-center\">\n                                                <a href=\"http://phpoll.com/recover\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                            <form id=\"register-form\" action=\"http://phpoll.com/register/process\" method=\"post\" role=\"form\" style=\"display: none;\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\n                                            <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table>\n        <td>Channel :</td>\n        <td>\n            <div class=\"dropdown\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Choose\n        <span class=\"caret\"></span>\n        </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                    <li><a (click)=\"selected=0\">Channel 1</a></li>\n                    <li><a (click)=\"selected=1\">Channel 2</a></li>\n                    <li><a (click)=\"selected=2\">Channel 3</a></li>\n                    <li><a (click)=\"selected=3\">Channel 4</a></li>\n                </ul>\n            </div>\n        </td>\n    </table>\n\n    <div *ngFor=\"let data of data.setpoint.setPoint; let i = index;\">\n        <div *ngIf=\"selected==i\">\n            <h4>Channel {{i+1}}</h4>\n            <div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                    <h4><input type=\"checkbox\"  [(ngModel)]=\"data.vpd[2]\" (change)=\"data.vpd[2]=($event.target.checked)\" aria-label=\"...\"> <b>VPD</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"data.vpd[2]\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>from</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.vpd[0]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>to</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.vpd[1]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n\n            <div style=\"margin-top: 30px;\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                <h4><input type=\"checkbox\" [(ngModel)]=\"data.soil[2]\" (change)=\"data.soil[2]=($event.target.checked)\" aria-label=\"...\"> <b>SOIL</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"data.soil[2]\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>from</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.soil[0]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>to</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.soil[1]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n\n            <div class=\"btn-group-lg\" role=\"group\" aria-label=\"...\" style=\"margin-top: 20px; margin-bottom: 20px;\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"UpdateSetPoint()\">Update</button>\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(io) {
        var _this = this;
        this.io = io;
        this.sensor = new SensorModel();
        this.setpoint = new SetPointModel();
        console.log("[DataService] dataservice init");
        this.io.socket.on("SENSOR", function (data) {
            _this.sensor.setValue(data.time, data.vpd, data.soil, data.temp, data.humi, data.light);
            //console.log(this.sensor)
        });
        this.io.socket.on("SET_POINT", function (data) {
            console.log('[DataService] Set Point\n ' + JSON.stringify(data));
            _this.setpoint.setPoint = data;
        });
    }
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], DataService);

var SensorModel = (function () {
    function SensorModel() {
        this.time = "00:00:00";
        this.vpd = 0.0;
        this.soil = 0.0;
        this.temp = 0.0;
        this.humi = 0.0;
        this.light = 0;
    }
    SensorModel.prototype.setValue = function (time, vpd, soil, temp, humi, light) {
        this.time = time;
        this.vpd = vpd;
        this.soil = soil;
        this.temp = temp;
        this.humi = humi;
        this.light = light;
    };
    return SensorModel;
}());
var SetPointModel = (function () {
    function SetPointModel() {
        this.setPoint = [
            {
                "ch": 1,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 2,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 3,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 4,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            }
        ];
    }
    return SetPointModel;
}());
var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shares_data_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveDataComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveDataComponentComponent = (function () {
    function LiveDataComponentComponent(data) {
        this.data = data;
        this.authen = false;
    }
    LiveDataComponentComponent.prototype.ngOnInit = function () {
    };
    return LiveDataComponentComponent;
}());
LiveDataComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-live-data-component',
        template: __webpack_require__(198),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shares_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shares_data_service__["a" /* DataService */]) === "function" && _a || Object])
], LiveDataComponentComponent);

var _a;
//# sourceMappingURL=live-data-component.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.User = {
            "name": "",
            "pass": ""
        };
        this.photo = './assets/img/bg.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#login-form-link').click(function (e) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#login-form").delay(100).fadeIn(100);
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#register-form").fadeOut(100);
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#register-form-link').removeClass('active');
            __WEBPACK_IMPORTED_MODULE_1_jquery__(this).addClass('active');
            e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#register-form-link').click(function (e) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#register-form").delay(100).fadeIn(100);
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#login-form").fadeOut(100);
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#login-form-link').removeClass('active');
            __WEBPACK_IMPORTED_MODULE_1_jquery__(this).addClass('active');
            e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#fountainG').hide();
    };
    LoginComponent.prototype.ClickLogin = function () {
        console.log("click Login");
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#fountainG').show();
        if (this.User.name == "admin" && this.User.pass == "admin") {
            console.log("success");
            this.router.navigateByUrl('/live');
        }
        else {
            console.log("fail");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(199),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shares_data_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetPointComponent = (function () {
    function SetPointComponent(data) {
        this.data = data;
        this.selected = 0;
    }
    SetPointComponent.prototype.ngOnInit = function () {
    };
    SetPointComponent.prototype.UpdateSetPoint = function () {
        console.log(this.data.setpoint.setPoint);
    };
    return SetPointComponent;
}());
SetPointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-set-point',
        template: __webpack_require__(200),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shares_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shares_data_service__["a" /* DataService */]) === "function" && _a || Object])
], SetPointComponent);

var _a;
//# sourceMappingURL=set-point.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + 3001;
        console.log("[SocketService] socket service");
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.host);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("reconect", function () { return _this.reconnect(); });
        // this.socket.on("SENSOR", (data:any)=> this.sensor(data))
    }
    SocketService.prototype.connect = function () {
        console.log("[SocketIO] Connected");
    };
    SocketService.prototype.disconnect = function () {
        console.log("[SocketIO] Disconnect");
    };
    SocketService.prototype.reconnect = function () {
        console.log("[SocketIO] Reconnect");
    };
    SocketService.prototype.sensor = function (data) {
        console.log(data);
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ })

},[238]);
//# sourceMappingURL=main.bundle.js.map