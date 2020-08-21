"use strict";
var Util;
(function (Util) {
    class Mathf {
        static Clamp(value, min, max) {
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        }
        static Clamp01(value) {
            if (value < 0.0) {
                return 0.0;
            }
            if (value > 1.0) {
                return 1.0;
            }
            return value;
        }
        static Lerp(a, b, t) {
            return a + (b - a) * Mathf.Clamp01(t);
        }
        static LerpUnclamped(a, b, t) {
            return a + (b - a) * t;
        }
        static RandomRange(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
    }
    Util.Mathf = Mathf;
})(Util || (Util = {}));
//# sourceMappingURL=Mathf.js.map