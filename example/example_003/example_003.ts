import { WebGLApp } from '../../src/WebGLApp';
import { BaseRenderer } from '../../src/Renderer';

const generateRandomRGB = () => {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    return {
        r: r,
        g: g,
        b: b
    };
};

class MyApp extends WebGLApp {
    onClick(event: MouseEvent) {
        // super.onClick(event);
        // console.log('click', (<HTMLElement>event.target).tagName);
        // console.log('click current', event.currentTarget);

        // toggle animation
        // if (this.isAnimating) {
        //     this.stop();
        // } else {
        //     console.log('start', this.isAnimating);
        //     this.start();
        // }
    }

    onInitGL() {
        this.canvas = document.querySelector('.gl-canvas') as HTMLCanvasElement;
        this.renderer = new BaseRenderer(this.canvas);
        // clear a color buffer in white
        this.renderer.setClearColor(1.0, 1.0, 1.0, 1.0);
        this.renderer.clearColorBuffer();
        // console.log(this.canvas.getBoundingClientRect());
    }

    onResizeGL(event: Event) {
        const { r, g, b } = generateRandomRGB();
        this.renderer.setClearColor(r, g, b, 1.0);
        this.renderer.clearColorBuffer();
        this.renderer.updateSize(
            0.0,
            0.0,
            this.width,
            this.height,
        );
    }

    onPainGL() { }
}

const webglApp = new MyApp();
