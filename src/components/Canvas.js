import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Canvas = () => {
    const canvasRef = useRef(null);
    const downloadLinkRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
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
        context.lineWidth = 7;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }

    const addBackground = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.globalCompositeOperation = 'destination-over'
        context.fillStyle = "#f8bfb0";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    const createDownload = () => {
        addBackground()
        const canvas = canvasRef.current;
        const downloadLink = downloadLinkRef.current;
        const downloadURL = canvas.toDataURL();
        downloadLink.href = downloadURL;
    }

    // mobile-friendly versions of drawing functions

    const handleTouchStart = (e) => {
        e.preventDefault()

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];

        setX(touch.clientX - rect.left);
        setY(touch.clientY - rect.top);
        setIsDrawing(true);
        console.log("hello from touchstart")
    }

    const handleTouchMove = (e) => {
        e.preventDefault()
        console.log("hello from touchmove")

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];

        if (isDrawing === true) {
            drawLine(ctx, x, y, touch.clientX - rect.left, touch.clientY - rect.top);
            setX(touch.clientX - rect.left);
            setY(touch.clientY - rect.top);
        }
    }

    const handleTouchEnd = (e) => {
        e.preventDefault()
        console.log("hello from touchend")

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];

        if (isDrawing === true) {
            drawLine(ctx, x, y, touch.clientX - rect.left, touch.clientY - rect.top);
            setX(0);
            setY(0);
            setIsDrawing(false);
        }
    }

    useEffect(() => {
        if (!!canvasRef.current) {
            console.log('registering event listenetrN');
            canvasRef.current.addEventListener("touchstart", handleTouchStart, { passive: false });
            canvasRef.current.addEventListener("touchend", handleTouchEnd, { passive: false });
            canvasRef.current.addEventListener("touchmove", handleTouchMove, { passive: false });
        }
    }, [canvasRef]);

    return ( 
        <div>
            <h4>Nice to meet you!</h4>
            <h6>If you're here to read more about me, head to my <span className="white"><Link to='/about'>About Me</Link></span> section.<br /><br />
            If you're here to have a sneak peek at my recent projects, please see <span className="white"><Link to='/projects'>My Projects</Link></span>.<br /><br />
            Or, if you're here because you're bored, why don't you draw something below:</h6>
                <canvas
                    ref={canvasRef}
                    width={window.innerWidth - 200}
                    height={window.innerHeight}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    >
                    <h6>Sorry, your browser doesn't support this element!</h6>
                </canvas><br />
                <a ref={downloadLinkRef} id="download-button" download='myDrawing.png' onClick={createDownload}>Download Image</a>
        </div>
     );
}
 
export default Canvas;