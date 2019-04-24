import { getWebGLContext } from "./WebGLUtil";

interface IViewport {
    x: number;
    y: number;
    width: number;
    height: number;
}

class BaseRenderer {
    protected viewport = {} as IViewport;
    private _gl: WebGLRenderingContext | WebGL2RenderingContext;
 
    constructor(canvas: HTMLCanvasElement) {
        this._gl = getWebGLContext(canvas);
        // initialize the size of viewport
        this.viewport.width = canvas.clientWidth;
        this.viewport.height = canvas.clientHeight;
    }

    get context(): WebGLRenderingContext | WebGL2RenderingContext {
        return this._gl;
    }

    setClearColor(r: number, g: number, b: number, a: number) {
        this._gl.clearColor(r, g, b, a);
    }

    clear(color: boolean, depth: boolean, stencil: boolean) {
        let bits = 0;

        if (color === undefined || color) bits |= this._gl.COLOR_BUFFER_BIT;
        if (depth === undefined || depth) bits |= this._gl.DEPTH_BUFFER_BIT;
        if (stencil === undefined || stencil) bits |= this._gl.STENCIL_BUFFER_BIT;

        this._gl.clear(bits);
    }

    clearColorBuffer() {
        this.clear(true, false, false);
    }

    updateViewport(left?: number, top?: number, width?: number, height?: number) {
        this._gl.viewport(left, top, width, height);
    }

    /**
     * Update the viewport size
     * @param x
     * @param y 
     * @param width 
     * @param height 
     */
    updateSize(x: number, y: number, width: number, height: number) {
        this.viewport.width = width;
        this.viewport.height = height;
        this.updateViewport(x, y, width, height);
    }
}

export { BaseRenderer };
