import { getWebGLContext } from '../../src/WebGLUtil';
import { WebGLApp } from '../../src/WebGLApp';
import { BaseRenderer } from '../../src/Renderer';

class MyApp extends WebGLApp {
    onInitGL() {
        this.canvas = document.querySelector('.gl-canvas') as HTMLCanvasElement;
        this.renderer = new BaseRenderer(this.canvas);
        this.renderer.setClearColor(1.0, 1.0, 1.0, 1.0);
        this.renderer.clearColorBuffer();
    }
}

const webglApp = new MyApp();
