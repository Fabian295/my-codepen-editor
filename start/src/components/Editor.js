import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor(props) {
  const {
    displayName,
    language,
  } = props;
  return (
    <div className='editor-container'>
      <div className="editor-title">
        { displayName }Hello
        <button>O/C</button>
      </div>
      <ControlledEditor className='code-mirror-wrapper'
      onBeforeChange={handleChange}
      value={value}
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        lineNumbers: true,
      }}
      />
    </div>
  )
}

export default Editor