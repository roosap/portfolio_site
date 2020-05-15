import React, {useRef, useEffect} from 'react';


const Canvas = () => {
    const canvasRef = useRef(null);
    const downloadLinkRef = useRef(null);

    // Below to imitate React Hooks that couldn't be used due to Canvas and Chrome restrictions when supporting touch events
   
    let x = 0;
    let y = 0;
    let isDrawing = false;

    const setIsDrawing = (v) => { isDrawing = v; };
    const setX = (xx) => { x = xx; };
    const setY = (yy) => { y = yy };


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
    }

    const handleTouchMove = (e) => {
        e.preventDefault()

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

        if (isDrawing === true) {
            setX(0);
            setY(0);
            setIsDrawing(false);
        }
    }

    useEffect(() => {
        
        if (!!canvasRef.current) {
            canvasRef.current.addEventListener("touchstart", handleTouchStart, { passive: false });
            canvasRef.current.addEventListener("touchmove", handleTouchMove, { passive: false });
            canvasRef.current.addEventListener("touchend", handleTouchEnd, { passive: false });
        }
    }, [canvasRef]);

    
    return ( 
        <div>
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