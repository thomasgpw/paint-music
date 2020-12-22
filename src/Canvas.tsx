import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import Color from 'color';
import { Stage, Layer, Circle } from 'react-konva';
import CONSTS from './consts';

const Canvas = (props: {
    theme: any
}) => {
    // Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [R, setR]:[number | undefined, Dispatch<SetStateAction<number | undefined>>]
        = useState<number | undefined>(undefined);

        
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                console.log((window.innerWidth, window.innerHeight)/2);
                setR(Math.min(window.innerWidth, window.innerHeight)/2);
            }
            
            // Add event listener
            window.addEventListener("resize", handleResize);
            
            // Call handler right away so state gets updated with initial window size
            handleResize();
            
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    const NOTE_RINGS:Array<number> = [];
    const bottomLayer: JSX.Element = (<Layer name={'bottomLayer'}></Layer>)
    const spinLayer: JSX.Element = (<Layer name={'spinLayer'}></Layer>)
    const topLayer: JSX.Element = (<Layer name={'topLayer'}></Layer>)
    
    return (
        <Stage width={R?R*2:0} height={R?R*2:0}
            style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}
        >
            {bottomLayer}
            {spinLayer}
            {topLayer}
        </Stage>
    )
};

export default Canvas;