export class AnimationLoop {
    private _context: Window = typeof window !== 'undefined' ? window : null
    private _isAnimating = false;
    private _animationLoop: (time: number, frame?: number) => void = null;

    // animation state
    private _LastFrame = null;
    private _fps: number;

    private _isDebug = false;

    private _onAnimationFrame(time: DOMHighResTimeStamp) {
        if (this._isAnimating === false) {
            return;
        }
        const currentFrame = performance.now();
        const msDelta = (currentFrame - this._LastFrame);
        const deltaTime = msDelta / 1000.0;
        this._fps = Math.floor(1 / deltaTime);
        this._LastFrame = currentFrame;

        if (this._isDebug) {
            this.log();
        }

        // run callback
        this._animationLoop(deltaTime);

        // for continuing looping
        this._context.requestAnimationFrame(this._onAnimationFrame.bind(this));
    }

    /** check debug state */
    set isDebug(value: boolean) {
        this._isDebug = value;
    }

    /** toggle loop state */
    toggle() {
        if (this._isAnimating) {
            this.stop();
        } else {
            this.start();
        }
    }

    start() {
        // To avoid duplicating call
        this._LastFrame = performance.now();
        if (this._isAnimating === true) {
            return;
        }
        if (this._animationLoop === null) {
            console.warn('Set FrameRequestCallback');
            return;
        }

        this._context.requestAnimationFrame(this._onAnimationFrame.bind(this));
        this._isAnimating = true;
    }

    stop() {
        this._isAnimating = false;
    }

    setAnimationLoop(callback: (time: number, frame?: number) => void) {
        this._animationLoop = callback;
    }

    log() {
        console.log(`fpx: ${this._fps}`);
    }

    turnOnDebug() {
        this._isDebug = true;
    }

    turnOffDebug() {
        this._isDebug = false;
    }
}
