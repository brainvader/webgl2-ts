import { BaseApp } from './Application';
import { BaseRenderer } from './Renderer';

class WebGLApp extends BaseApp {
    protected renderer: BaseRenderer;
    protected canvas: HTMLCanvasElement;

    protected onInitGL() { }
    protected onPainGL() { }
    protected onResizeGL(event: Event) { }

    get x() {
        return this.canvas.offsetLeft;
    }

    get y() {
        return this.canvas.offsetTop;
    }

    get width() {
        return this.canvas.clientWidth;
    }

    get height() {
        return this.canvas.clientHeight;
    }

    onInit() {
        super.onInit();
        this.onInitGL();
    }

    onRender() {
        super.onRender();
        this.onPainGL();
    }

    onResize(event: Event) {
        super.onResize(event);
        this.onResizeGL(event);
    }    
}

export { WebGLApp };
