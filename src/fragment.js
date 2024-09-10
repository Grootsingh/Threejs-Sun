export default /*glsl*/ `
precision mediump float;
uniform vec3 uColorTwo;
uniform vec3 uColorOne;
varying vec2 vUv;

void main()
{
    float strength = smoothstep(0.3,0.9,vUv.y);
    vec3 blend = mix(uColorOne,uColorTwo,strength);    
    gl_FragColor = vec4(blend,1.0);
}
`;
