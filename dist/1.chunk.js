webpackJsonp([1,9],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stationlist_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stationlist_routing__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pieChart_pieChart_service__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_angular2_ui_switch_src__ = __webpack_require__(690);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationList", function() { return StationList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StationList = (function () {
    function StationList() {
    }
    return StationList;
}());
StationList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__stationlist_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_7__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__stationlist_component__["a" /* StationlistComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__pieChart_pieChart_service__["a" /* PieChartService */]
        ]
    })
], StationList);

//# sourceMappingURL=stationlist.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieChartService = (function () {
    function PieChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    PieChartService.prototype.getData = function () {
        var pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
        return [
            {
                color: pieColor,
                description: 'SOIL',
                stats: 'ID: 3KE9K5',
                icon: 'person',
            },
            {
                color: pieColor,
                description: 'VPD',
                stats: 'ID: SEKKD23',
                icon: 'person',
            }
        ];
    };
    return PieChartService;
}());
PieChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], PieChartService);

var _a;
//# sourceMappingURL=pieChart.service.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_services_socketService_socket_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pieChart_pieChart_service__ = __webpack_require__(688);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StationlistComponent = (function () {
    function StationlistComponent(io, pi) {
        var _this = this;
        this.io = io;
        this.pi = pi;
        this.data = {
            humi: 0,
            light: 0,
            soil: 0,
            temp: 0,
            time: 0,
            user: "",
            mid: ""
        };
        this.relay01 = false;
        this.relay02 = false;
        this.relay03 = false;
        this.io.socket.emit('join-wa', { 'user': 'admin' });
        this.io.socket.on('connect', function () { return _this.connect(); });
        this.io.socket.on('SENSORS_DATA', function (data) { return _this.Sensor(data); });
    }
    StationlistComponent.prototype.ngOnInit = function () {
    };
    StationlistComponent.prototype.connect = function () {
        console.log("[SocketIO] Connected");
        this.io.socket.emit('join-wa', { 'user': 'admin' });
    };
    StationlistComponent.prototype.Sensor = function (data) {
        // console.log(data);
        this.data.humi = data.humi;
        this.data.light = data.light;
        this.data.soil = data.soil;
        this.data.temp = data.temp;
        this.data.time = data.time;
        this.data.user = data.user;
        this.data.mid = data.mid;
        this.data.vpd = data.vpd;
        // console.log(this.data);
    };
    StationlistComponent.prototype.onChange = function ($evnt, relay) {
        var r = {
            'relay': relay,
            'evnt': $evnt,
            'user': 'admin'
        };
        this.io.socket.emit("RELAYS", r);
    };
    return StationlistComponent;
}());
StationlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Component */])({
        selector: 'app-stationlist',
        template: __webpack_require__(744),
        styles: [__webpack_require__(729)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme_services_socketService_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme_services_socketService_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__pieChart_pieChart_service__["a" /* PieChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pieChart_pieChart_service__["a" /* PieChartService */]) === "function" && _b || Object])
], StationlistComponent);

var _a, _b;
//# sourceMappingURL=stationlist.component.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_switch_component__ = __webpack_require__(691);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSwitchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiSwitchModule = (function () {
    function UiSwitchModule() {
    }
    return UiSwitchModule;
}());
UiSwitchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ui_switch_component__["a" /* UiSwitchComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ui_switch_component__["a" /* UiSwitchComponent */]]
    })
], UiSwitchModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* forwardRef */])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = (function () {
    function UiSwitchComponent() {
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
        this.size = 'medium';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    UiSwitchComponent.prototype.getColor = function (flag) {
        if (flag === 'borderColor')
            return this.defaultBoColor;
        if (flag === 'switchColor') {
            if (this.reverse)
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse)
            return !this.checked ? this.color : this.defaultBgColor;
        return this.checked ? this.color : this.defaultBgColor;
    };
    UiSwitchComponent.prototype.onToggle = function () {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    UiSwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    UiSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    UiSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return UiSwitchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "checked", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "disabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "reverse", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchOffColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UiSwitchComponent.prototype, "onToggle", null);
UiSwitchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Component */])({
        selector: 'ui-switch',
        template: "\n  <span class=\"switch\" \n  [class.checked]=\"checked\" \n  [class.disabled]=\"disabled\"\n  [class.switch-large]=\"size === 'large'\"\n  [class.switch-medium]=\"size === 'medium'\"\n  [class.switch-small]=\"size === 'small'\"\n  [style.background-color]=\"getColor()\"\n  [style.border-color]=\"getColor('borderColor')\"\n  >\n  <small [style.background]=\"getColor('switchColor')\">\n  </small>\n  </span>\n  ",
        styles: ["\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;            \n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }        \n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          \n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n    "],
        providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
    })
], UiSwitchComponent);

//# sourceMappingURL=ui-switch.component.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stationlist_component__ = __webpack_require__(689);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__stationlist_component__["a" /* StationlistComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=stationlist.routing.js.map

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".switch {\n  height: 90px;\n  line-height: 90px;\n  text-align: center;\n  border: 2px dashed #f69c55; }\n\nlabel {\n  font-size: 25px;\n  font: bold;\n  margin-left: 20px;\n  margin-right: 10px; }\n\nform {\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ba-card title=\"Live data\">\n        <table class=\"table table-bordered table-hover\">\n            <thead>\n                <tr>\n                    <th>Node ID</th>\n                    <th>Time</th>\n                    <th>Soil</th>\n                    <th>Vpd</th>\n                    <th>Temperature</th>\n                    <th>Humidity</th>\n                    <th>Light</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>{{data.mid}}</td>\n                    <td>{{data.time}}</td>\n                    <td>{{data.soil}}</td>\n                    <td>{{data.vpd}}</td>\n                    <td>{{data.temp}}</td>\n                    <td>{{data.humi}}</td>\n                    <td>{{data.light}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"row\">\n            <form>\n                <label style=\"text-align: center\">Relay01 :</label>\n                <ui-switch [(ngModel)]=\"relay01\" name=\"relay01\" (change)=\"onChange($event,1)\"></ui-switch>\n            </form>\n        </div>\n        <div class=\"row\">\n            <form>\n                <label style=\"text-align: center\">Relay02 :</label>\n                <ui-switch [(ngModel)]=\"relay02\" name=\"relay02\" (change)=\"onChange($event,2)\"></ui-switch>\n            </form>\n        </div>\n        <div class=\"row\">\n            <form>\n                <label style=\"text-align: center\">Relay03 :</label>\n                <ui-switch [(ngModel)]=\"relay03\" name=\"relay03\" (change)=\"onChange($event,3)\"></ui-switch>\n            </form>\n        </div>\n\n\n\n\n\n    </ba-card>\n\n\n\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map