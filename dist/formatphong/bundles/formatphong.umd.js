(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('formatphong', ['exports', '@angular/core'], factory) :
    (factory((global.formatphong = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatphongService = /** @class */ (function () {
        function FormatphongService() {
        }
        FormatphongService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormatphongService.ctorParameters = function () { return []; };
        /** @nocollapse */ FormatphongService.ngInjectableDef = i0.defineInjectable({ factory: function FormatphongService_Factory() { return new FormatphongService(); }, token: FormatphongService, providedIn: "root" });
        return FormatphongService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatphongComponent = /** @class */ (function () {
        function FormatphongComponent() {
        }
        /**
         * @return {?}
         */
        FormatphongComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FormatphongComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lv-formatphong',
                        template: "\n    <p>\n      Test format font ch\u1EEF\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        FormatphongComponent.ctorParameters = function () { return []; };
        return FormatphongComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatphongModule = /** @class */ (function () {
        function FormatphongModule() {
        }
        FormatphongModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FormatphongComponent],
                        imports: [],
                        exports: [FormatphongComponent]
                    },] }
        ];
        return FormatphongModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FormatphongService = FormatphongService;
    exports.FormatphongComponent = FormatphongComponent;
    exports.FormatphongModule = FormatphongModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=formatphong.umd.js.map