import React, {useRef, useState} from 'react';

function draw(ctx, posX, posY) {
    ctx.beginPath();
    ctx.moveTo(posX - 5, posY);
    ctx.lineTo(posX, posY - 7);
    ctx.lineTo(posX + 5, posY);
    ctx.arc(posX, posY, 5, 0, Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();

    // const words = ["you look nice", "hello", "have a great day", "you're the best", "hey"]
    // ctx.font = "1.2em Helvetica";
    // ctx.fillStyle = "white";
    // ctx.textAlign = "center";
    // ctx.fillText(words[Math.floor(Math.random() * words.length)], posX, posY);
}

const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // const handleCanvasClick = (e) => {
    //     const canvas = canvasRef.current
    //     const ctx = canvas.getContext('2d')
    //     draw(ctx, e.clientX, e.clientY)
    // }

    const handleMouseDown = (e) => {
        setX(e.clientX);
        setY(e.clientY);
        setIsDrawing(true);
        console.log("mousedown X", x, "mousedownY:", y)
    }

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (isDrawing === true) {
            drawLine(ctx, x, y, e.clientX, e.clientY);
            setX(e.clientX);
            setY(e.clientY);
            console.log("mousemove X", x, "mousedownY:", y)
        }
    }

    const handleMouseUp = (e) => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (isDrawing === true) {
            drawLine(ctx, x, y, e.clientX, e.clientY);
            setX(0);
            setY(0);
            setIsDrawing(false);
        }
    }

    const drawLine = (context, x1, y1, x2, y2) => {
        context.beginPath();
        context.strokeStyle = 'white';
        context.lineWidth = 5;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }


    return ( 
        <div>
                <canvas
                    ref={canvasRef}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}>
                </canvas>
        </div>
     );
}
 
export default Canvas;