import { AnimationLoop } from './AnimationLoop';

interface IEventListenrOption {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}

class BaseApp {
    private _width: number;
    private _height: number;

    private _scaleX: number;
    private _scaleY: number;

    protected isAnimating = false;
    private _LastFrame = null;
    protected fps: number;

    protected isDebuging = false;

    constructor() {
        window.addEventListener('load', this.onInit.bind(this));
    }

    get scaleX() {
        return this._scaleX;
    }

    get scaleY() {
        return this._scaleY;
    }

    private _updateSize() {
        this._width = window.innerWidth;
        this._height = window.innerHeight;
    }

    protected onInit() {
        window.addEventListener('click', this.onClick.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));
        this._width = window.innerWidth;
        this._height = window.innerHeight;
    }

    protected onResize(event: Event) {
        this._scaleX = window.innerWidth / this._width;
        this._scaleY = window.innerHeight / this._height;
        this._updateSize();
    }

    protected onClick(event: MouseEvent) { }

    protected onDebug() {
        const currentFrame = performance.now();
        const msDelta = (currentFrame - this._LastFrame);
        const deltaTime = msDelta / 1000.0;
        this.fps = Math.floor(1 / deltaTime);
        this._LastFrame = currentFrame;
        console.log(`fps ${this.fps}`);
    }

    protected onBeforeRender() { }

    protected onAfterRender() { }

    protected onRender() {
        if (this.isAnimating === false) {
            return;
        }

        if (this.isDebuging === true) {
            this.onDebug();
        }

        this.onBeforeRender();
        window.requestAnimationFrame(this.onRender.bind(this));
        this.onAfterRender();
    }

    start() {
        // To avoid duplicating call
        // this._LastFrame = performance.now();
        if (this.isAnimating === true) {
            return;
        }

        window.requestAnimationFrame(this.onRender.bind(this));
        this.isAnimating = true;
    }

    stop() {
        this.isAnimating = false;
    }

    turnOnDebug() {
        this.isDebuging = true;
    }

    turnOffDebug() {
        this.isDebuging = false;
    }
}

export { BaseApp };
