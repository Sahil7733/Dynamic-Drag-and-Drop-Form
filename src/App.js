import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ElementForm from './components/ElementForm';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const addElement = (element) => {
    setElements([...elements, { ...element, id: elements.length + 1 }]);
  };

  const updateElement = (id, newProps) => {
    setElements(elements.map(el => (el.id === id ? { ...el, ...newProps } : el)));
    setSelectedElement(null); 
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <Sidebar addElement={addElement} />
        <Canvas elements={elements} setSelectedElement={setSelectedElement} />
        {selectedElement && (
          <ElementForm 
            element={selectedElement} 
            updateElement={updateElement} 
          />
        )}
      </div>
    </DndProvider>
  );
}

export default App;
