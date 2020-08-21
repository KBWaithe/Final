"use strict";
var Core;
(function (Core) {
    class GameObject extends createjs.Bitmap {
        // CONSTRUCTOR
        constructor(asset_name = "placeholder", x = 0, y = 0, centered = false) {
            super(Config.Game.ASSETS.getResult(asset_name));
            // initialization
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._position = new Util.Vector2(0, 0, this);
            this._velocity = new Util.Vector2(0, 0);
            this._isColliding = false;
            this._isCentered = false;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.isCentered = centered;
            this.position = new Util.Vector2(x, y, this);
        }
        // PUBLIC PROPERTIES
        get width() {
            return this._width;
        }
        set width(newWidth) {
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }
        get height() {
            return this._height;
        }
        set height(newHeight) {
            this._height = newHeight;
            this._halfHeight = this._computeHalfHeight();
        }
        get halfWidth() {
            return this._halfWidth;
        }
        get halfHeight() {
            return this._halfHeight;
        }
        get position() {
            return this._position;
        }
        set position(newPosition) {
            this._position = newPosition;
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
        get velocity() {
            return this._velocity;
        }
        set velocity(newVelocity) {
            this._velocity = newVelocity;
        }
        get isColliding() {
            return this._isColliding;
        }
        set isColliding(newState) {
            this._isColliding = newState;
        }
        get isCentered() {
            return this._isCentered;
        }
        set isCentered(newState) {
            this._isCentered = newState;
            if (newState) {
                this._centerGameObject();
            }
        }
        // PRIVATE METHODS
        _computeHalfWidth() {
            return this.width * 0.5;
        }
        _computeHalfHeight() {
            return this.height * 0.5;
        }
        _centerGameObject() {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
    }
    Core.GameObject = GameObject;
})(Core || (Core = {}));
//# sourceMappingURL=GameObject.js.map