import React from 'react';

const editor = {
    width: "50%",
    margin: "1rem",
    textAlign: "center"
}

function Editor(props) {
    return (
        <div style={editor}>
            <h1 style={{color: "white"}}>Editor</h1>
            <textarea
            id="editor"
            value={props.input}
            onChange={props.handleChange}
            style={{width: "80%", height: 400, padding: "1rem"}}
            />
        </div>
    )
}

export default Editor;