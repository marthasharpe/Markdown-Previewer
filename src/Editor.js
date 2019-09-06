import React from 'react';

const editor = {
    width: "50%",
    margin: "1rem",
    textAlign: "center"
}

function Editor(props) {
    return (
        <div style={editor}>
            <textarea
            id="editor"
            value={props.input}
            onChange={props.handleChange}
            style={{width: "80%", minHeight: 300, padding: 10}}
            />
        </div>
    )
}

export default Editor;