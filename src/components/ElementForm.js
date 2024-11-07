import React, { useState, useEffect } from 'react';

const ElementForm = ({ element, updateElement }) => {
  const [formState, setFormState] = useState({ ...element });

  useEffect(() => {
    setFormState({ ...element });
  }, [element]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSave = () => {
    updateElement(element.id, formState);
  };

  return (
    <div className="element-form">
      <h3>Configure Element</h3>
      {element.type === 'text' && (
        <div>
          <label>Text Content:</label>
          <input
            type="text"
            name="content"
            value={formState.content || ''}
            onChange={handleChange}
          />
        </div>
      )}
      {element.type === 'button' && (
        <div>
          <label>Button Label:</label>
          <input
            type="text"
            name="label"
            value={formState.label || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ElementForm;
