import React, {useRef} from 'react';

function draw(ctx, posX, posY) {
    ctx.beginPath();
    ctx.moveTo(posX - 5, posY);
    ctx.lineTo(posX, posY - 7);
    ctx.lineTo(posX + 5, posY);
    ctx.arc(posX, posY, 5, 0, Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
}

const Canvas = () => {
    const canvasRef = useRef(null);
    const divRef = useRef(null);


    return ( 
        <div ref={divRef}>
                <canvas
                    ref={canvasRef}
                    width={1000}
                    height={500}
                    onClick={e => {
                        const canvas = canvasRef.current
                        const ctx = canvas.getContext('2d')
                        draw(ctx, e.clientX, e.clientY)
                    }}>
                </canvas>
        </div>
     );
}
 
export default Canvas;