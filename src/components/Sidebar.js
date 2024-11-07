import React from 'react';
import DraggableElement from './DraggableElement';

const Sidebar = ({ addElement }) => {
  const elements = [
    { type: 'text', label: 'Text' },
    { type: 'image', label: 'Image' },
    { type: 'button', label: 'Button' },
  ];

  return (
    <div className="sidebar">
      <h3>Elements</h3>
      {elements.map((element, index) => (
        <DraggableElement key={index} element={element} addElement={addElement} />
      ))}
    </div>
  );
};

export default Sidebar;
