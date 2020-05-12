import React, {Component} from 'react';
import ProfilePicture from '../assets/images/roosapp_circle.png';

class Canvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        const start = null

      const requestAnimationFrame = (anim) => {
        createRaindrops()
    }

      const createRaindrops = () => {
        const drops = []
        drops.push({ x: 180, y: 0 });
        drops.push({ x: 280, y: 50 });
        drops.push({ x: 350, y: 120 });
        drops.push({ x: 470, y: 40 });
        drops.push({ x: 300, y: 170 });
        drops.push({ x: 400, y: 290 });
        drops.push({ x: 500, y: 0 });
        drops.push({ x: 160, y: 220 });
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
        this.draw()
        if ((timestamp - start) < 2000) {
            start = null;
            requestAnimationFrame(anim)
          }
      }

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