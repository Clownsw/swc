//// [usingDeclarationsWithLegacyClassDecorators.6.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "D", {
    enumerable: true,
    get: function() {
        return C;
    }
});
using before = null
@dec
class C {
}
