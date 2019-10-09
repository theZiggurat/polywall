class GlCommander {
    constructor(){
        this.clearColor = [0.0, 0.0, 0.0, 1.0];
    }

    init(gl) {
        this.gl = gl;
        console.log(gl);
    }

    clear = () => {
        this.gl.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    viewport = () => this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    depthTest = (use) => use ? this.gl.enable(this.gl.DEPTH_TEST): this.gl.disable(this.gl.DEPTH_TEST);

    createBuffer = () => this.gl.createBuffer();

    bindArrayBuffer = (buffer) => this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
    unbindArrayBuffer = () => this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    addArrayBufferData = (vertices) => this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

    bindElementArrayBuffer = (buffer) => this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
    unbindElementArrayBuffer = () => this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    addElementArrayBufferData = (indices) => this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);

    createVertexShader = () => this.gl.createShader(this.gl.VERTEX_SHADER);
    createFragmentShader = () => this.gl.createShader(this.gl.FRAGMENT_SHADER);

    addShaderSource = (shader, source) => this.gl.shaderSource(shader, source);
    compileShader = (shader) => this.gl.compileShader(shader);
    createShaderProgram = () => this.gl.createProgram();
    attachShaderProgram = (program, shader) => this.gl.attachShader(program, shader);
    linkProgram = (program) => this.gl.linkProgram(program);
    useProgram = (program) => this.gl.useProgram(program);

    getAttribLocation = (program, attribute) => this.gl.getAttribLocation(program, attribute);
    enableVertexAttribArray = (attribute) => this.gl.enableVertexAttribArray(attribute);
    pointToAttribute = (data, dimensions) => this.gl.vertexAttribPointer(data, dimensions, this.gl.FLOAT, false, 3*Float32Array.BYTES_PER_ELEMENT, 0);

    drawTriangles = (indiciesNum) => {
        console.log(indiciesNum);
        this.gl.drawElements(this.gl.TRIANGLES, indiciesNum, this.gl.UNSIGNED_SHORT, 0);
    }
}

export const GLC = new GlCommander();
export default GLC;