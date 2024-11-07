import React from 'react';
import { useDrop } from 'react-dnd';

const Canvas = ({ elements, setSelectedElement }) => {
  const [, drop] = useDrop(() => ({
    accept: 'element',
    drop: () => ({ name: 'Canvas' }), 
  }));

  return (
    <div
      ref={drop}
      className="canvas"
      style={{
        minHeight: '400px',
        border: '1px dashed #bbb',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          onClick={() => setSelectedElement(element)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            margin: '10px',
            cursor: 'pointer',
          }}
        >
          {element.type === 'text' && <p>Text Element</p>}
          {element.type === 'image' && <img src="https://via.placeholder.com/100" alt="placeholder" />}
          {element.type === 'button' && <button>Button</button>}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
