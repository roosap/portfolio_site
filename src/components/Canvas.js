import React, {Component} from 'react';
import ProfilePicture from '../assets/images/roosapp_circle.png';

class Canvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const start = null
        const drops = [
            { x: 180, y: 0 },
            { x: 280, y: 50 },
            { x: 350, y: 120 },
            { x: 470, y: 40 },
            { x: 300, y: 170 },
            { x: 400, y: 290 },
            { x: 500, y: 0 },
            { x: 160, y: 220 }
        ]

      const requestAnimationFrame = (anim) => {
    }

      const rain = (posX, posY) => {
            ctx.beginPath();
            ctx.moveTo(posX - 5, posY);
            ctx.lineTo(posX, posY - 7);
            ctx.lineTo(posX + 5, posY);
            ctx.arc(posX, posY, 5, 0, Math.PI);
            ctx.closePath();
            ctx.fillStyle = '#7094cf';
            ctx.fill();
      }

      const anim = (timestamp) => {
        if (!start) start = timestamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw()
        if ((timestamp - start) < 2000) {
            start = null;
            requestAnimationFrame(anim)
          }
      }

      const draw = () => {
        drops.forEach((drop) => {
            rain(drop.x, drop.y);
            drop.y += 1;
            if (drop.y > canvas.height) {
            drop.y = 0;
            }
        }
        )}
    }


    render() { 
        return ( 
            <div>
                <canvas ref="canvas" width={640} height={425}></canvas>
            </div>
         );
    }
}

 
export default Canvas;