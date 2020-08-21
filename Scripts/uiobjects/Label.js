"use strict";
var UIObjects;
(function (UIObjects) {
    class Label extends createjs.Text {
        // constructor
        constructor(labelString = "empty label", fontSize = "12px", fontFamily = "Consolas", fontColour = "#000000", x = 0, y = 0, isCentered = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);
            this.labelString = labelString;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColour = fontColour;
            this.isCentered = isCentered;
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
        // methods
        setText(newText) {
            this.text = newText;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getMeasuredLineHeight() * 0.5;
        }
    }
    UIObjects.Label = Label;
})(UIObjects || (UIObjects = {}));
//# sourceMappingURL=Label.js.map