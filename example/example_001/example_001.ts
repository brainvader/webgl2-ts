import { getWebGLContext } from '../../src/WebGLUtil';

window.addEventListener('load', () => {
    const canvas: HTMLCanvasElement =  document.querySelector('.gl-canvas');
    const gl = getWebGLContext(canvas);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const canvas2: HTMLCanvasElement =  document.querySelector('.gl-canvas2');
    const gl2 = getWebGLContext(canvas2);
    gl2.clearColor(1.0, 0.0, 0.0, 1.0);
    gl2.clear(gl.COLOR_BUFFER_BIT);
});
