module Config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 640;
        public static SCREEN_HEIGHT:number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
        public static ASSETS: createjs.LoadQueue;
        public static FPS: number = 60; // 60 Frames per second
    }
}