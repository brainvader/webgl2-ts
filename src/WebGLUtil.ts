const getWebGLContext = (
    canvas: HTMLCanvasElement,
    attributes?: WebGLContextAttributes): WebGL2RenderingContext => {

    let gl: WebGL2RenderingContext;

    gl = canvas.getContext('webgl2', attributes) as WebGL2RenderingContext ||
        canvas.getContext('experimental-webgl2', attributes);

    try {
        if (gl === null) {
            if (canvas.getContext('webgl') !== null) {
                throw new Error(
                    'Error creating WebGL context with your selected attributes.');

            } else {
                throw new Error('Error creating WebGL context.');
            }
        }

        // see https://qiita.com/tonkotsuboy_com/items/cdffcdd7bdccac371292
        if (gl.getShaderPrecisionFormat === undefined) {
            gl.getShaderPrecisionFormat = function () {
                return { 'rangeMin': 1, 'rangeMax': 1, 'precision': 1 };
            };
        }
    } catch (error) {
        console.error('WebGLRenderer: ' + error.message);
    }

    return gl;
};

export {
    getWebGLContext
}
