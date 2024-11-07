# Drag-and-Drop Canvas Editor

This project is a dynamic drag-and-drop editor built with React. It allows users to drag UI elements (Text, Image, Button) from a sidebar onto a canvas and customize their properties. The project is structured with modular components, using React and React DnD for efficient rendering and seamless drag-and-drop functionality.

---

## Architecture

### 1. Component Structure

The application is organized into the following primary components:

- **App.js**: Main component that holds the application state and manages communication between other components.
- **Sidebar**: Displays draggable UI elements (Text, Image, Button) that users can drag onto the canvas.
- **Canvas**: Serves as the drop target where elements are dynamically rendered based on the `elements` state.
- **ElementForm**: Provides a form-based interface to edit the properties of the selected element (e.g., text content, image URL, button label) based on its type.

### 2. State Management

- **App Component State**:
  - `elements`: Stores all elements placed on the canvas, with properties like `id`, `type`, and custom properties (content, src, label).
  - `selectedElement`: Tracks the currently selected element on the canvas for editing in the form.
  
- **ElementForm Component State**:
  - `formData`: Manages form data for the selected element, including content, image URL, and button label. Changes are saved to the main state on clicking the "Save" button.

### 3. Drag-and-Drop Functionality

The project utilizes **React DnD** for managing drag-and-drop interactions:

- **Draggable Elements**: Sidebar items are draggable, each containing data about its type (e.g., text, image).
- **Droppable Canvas**: Canvas component is set as a drop target, accepting draggable elements and triggering the `addElement` function in `App.js` to add the new element.

---

## Tools and Libraries

- **React**: Core JavaScript library for building the user interface.
- **React DnD**: Manages drag-and-drop interactions in React, using HTML5Backend for native drag-and-drop events.
- **CSS**: Custom CSS provides a clean, minimalist design with responsive styling.
- **Node.js & npm**: Manages project dependencies and development scripts.

---

## Approach

1. **Component-Based Design**: Each UI element and section is split into reusable React components, allowing for a modular and maintainable codebase.
  
2. **Form-Based Element Customization**: Each canvas element can be selected and edited through a form in `ElementForm`, which allows structured, consistent customization.

3. **Single Source of Truth**: All dynamic data is stored in `App.js`’s state, ensuring instant reflection of changes across components.

4. **Flexibility for Expansion**:
   - **Adding New Elements**: Easily add new element types by updating `Sidebar`, `Canvas`, and `ElementForm`.
   - **Extensible Form Options**: Additional properties like color, size, or alignment can be easily added in the future.

---

## Project Setup and Running

### Requirements
- **Node.js** and **npm** must be installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sahil7733/Dynamic-Drag-and-Drop-Form.git
