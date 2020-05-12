import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';

const Canvas = () => {
    const canvasRef = useRef(null);
    const divRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        setX(e.clientX - rect.left);
        setY(e.clientY - rect.top);
        setIsDrawing(true);
    }

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        if (isDrawing === true) {
            drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
            setX(e.clientX - rect.left);
            setY(e.clientY - rect.top);
        }
    }

    const handleMouseUp = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        if (isDrawing === true) {
            drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
            setX(0);
            setY(0);
            setIsDrawing(false);
        }
    }

    const drawLine = (context, x1, y1, x2, y2) => {
        context.beginPath();
        context.strokeStyle = 'white';
        context.lineWidth = 10;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }

    return ( 
        <div ref={divRef}>
            <h4>Nice to meet you!</h4>
            <h6>If you're here to read more about me, head to my <span className="white"><Link to='/about'>About Me</Link></span> section.<br /><br />
            If you're here to have a sneak peek at my recent projects, please see <span className="white"><Link to='/projects'>My Projects</Link></span>.<br /><br />
            Or, if you're here because you're bored, why don't you draw something below:</h6>
                <canvas
                    ref={canvasRef}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}>
                        <h6>Sorry, your browser doesn't support this element!</h6>
                </canvas>
        </div>
     );
}
 
export default Canvas;