import {useState, useEffect} from 'react';
import Color from 'color';
import { Stage, Layer, Circle } from 'react-konva';
import type { Theme } from './consts'

const Canvas = (props: {
    theme: Theme
}) => {
    // Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [minViewLength, setMinViewLength] = useState(0);
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setMinViewLength(Math.min(window.innerWidth, window.innerHeight));
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const halfViewLength = minViewLength / 2;
    const spinnerRadius = halfViewLength - 8;
    const spinnerSegment = spinnerRadius / 14;
    const noteRadii = Array.from({length: 14}, (v, i) => (1 - ((i + 1) * spinnerSegment)));
    console.log(noteRadii);
    const spinLayer: JSX.Element = (<Layer name={'spinLayer'}></Layer>)
    const bottomLayer: JSX.Element = (<Layer name={'bottomLayer'}>
        <Circle
            x={minViewLength} y={minViewLength} radius={minViewLength-8}
            fill={props.theme.base.primary}
            stroke={props.theme.base.secondary} strokeWidth={16}
        /></Layer>)
    const topLayer: JSX.Element = (<Layer name={'topLayer'}></Layer>)
    
    return (
        <Stage width={minViewLength?minViewLength*2:0} height={minViewLength?minViewLength*2:0}
            style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}
        >
            {bottomLayer}
            {spinLayer}
            {topLayer}
        </Stage>
    )
};

export default Canvas;