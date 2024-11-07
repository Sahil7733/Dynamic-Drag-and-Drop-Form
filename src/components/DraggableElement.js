import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableElement = ({ element, addElement }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'element',
    item: element,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        addElement(item);  
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="draggable-element"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '8px',
        margin: '8px 0',
        border: '1px solid #ccc',
        backgroundColor: '#f4f4f4',
      }}
    >
      {element.label}
    </div>
  );
};

export default DraggableElement;
