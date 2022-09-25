import React, { useState } from 'react';
import Editor from './Editor';
import Logo from "../../src/fk-logo-bg.png";

function App() {

  return (
    <>
      <div className="pane top-pane">
        <Editor />
        <Editor />
        <Editor />
      </div>

      <div className="pane">
        <iframe src="" 
        title="output"
        sandbox="allow-scripts"
        frameborder="0"
        width="100%"
        height="100%"
        >
        </iframe>
      </div>
    
    </>
  )
}

export default App