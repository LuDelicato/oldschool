import React, { useRef, useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

const Canvas = () => {
  const canvasRef = useRef();
  const linePickerRef = useRef();
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(1);
  const [ctx, setCtx] = useState();

  const form = document.createElement('form');
  form.action = 'https://formspree.io/f/mlekbegj';
  form.method = 'POST';

  const drawing = document.createElement('input');
  drawing.type = 'hidden';
  drawing.name = 'drawing';
  form.appendChild(drawing);

  const save = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');

    const form = document.createElement('form');
    form.action = 'https://formspree.io/f/mlekbegj';
    form.method = 'POST';

    const drawing = document.createElement('input');
    drawing.type = 'hidden';
    drawing.name = 'drawing';
    drawing.value = dataURL;
    form.appendChild(drawing);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let clicking = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 300;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    canvas.addEventListener('touchstart', (event) => {
      const canvasX = event.touches[0].pageX - canvas.offsetLeft;
      const canvasY = event.touches[0].pageY - canvas.offsetTop;

      clicking = true;

      ctx.beginPath();

      ctx.moveTo(canvasX, canvasY);
    });

    canvas.addEventListener('touchmove', (e) => {
      if (clicking === true) {
        const canvasX = e.touches[0].pageX - canvas.offsetLeft;
        const canvasY = e.touches[0].pageY - canvas.offsetTop;

        ctx.lineTo(canvasX, canvasY);
        ctx.stroke();
      }
    });

    canvas.addEventListener('touchend', (e) => {
      clicking = false;
    });

    canvas.addEventListener('touchcancel', () => {
      clicking = false;
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!('ontouchstart' in window) && clicking === true) {
        const canvasX = e.pageX - canvas.offsetLeft;
        const canvasY = e.pageY - canvas.offsetTop;

        ctx.lineTo(canvasX, canvasY);
        ctx.stroke();
      }
    });

    canvas.addEventListener('mousedown', (event) => {
      const canvasX = event.pageX - canvas.offsetLeft;
      const canvasY = event.pageY - canvas.offsetTop;

      clicking = true;

      ctx.beginPath();

      ctx.moveTo(canvasX, canvasY);
    });

    canvas.addEventListener('mouseup', (e) => {
      clicking = false;
    });

    canvas.addEventListener('mouseout', () => {
      clicking = false;
    });

    setCtx(ctx);
  }, []);

  const reset = () => {
    if (window.confirm('Hey! Tens a certeza que queres apagar sem enviar antes?')) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const linePicker = linePickerRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      linePicker.value = 1;
      setLineWidth(1);
      ctx.lineWidth = 1;

      setColor('#000000');
      ctx.strokeStyle = '#000000';
    }
  };

  return (
    <div className='button-container'>
      <button className='canvasButton' onClick={reset}>
        Reset
      </button>
      <button className='canvasButton' onClick={save}>
        Save
      </button>
      <div className='canvas-container'>
        <canvas ref={canvasRef} style={{ touchAction: 'none' }} />
        <div className='controls-container'>
          <div className='line-picker-container'>
            <input
              type='range'
              name='linePicker'
              min='10'
              max='30'
              value={lineWidth}
              step='2'
              onChange={(e) => {
                setLineWidth(e.target.value);
                if (ctx) {
                  ctx.lineWidth = e.target.value;
                }
              }}
              ref={linePickerRef}
            />
          </div>
          <div className='color-picker-container'>
            <SketchPicker
              color={color}
              onChange={(newColor) => {
                setColor(newColor.hex);
                if (ctx) {
                  ctx.strokeStyle = newColor.hex;
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
