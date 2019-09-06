import React from 'react';

function Editor(props) {
    return (
        <div>
            <textarea
            id="editor"
            value={props.input}
            onChange={props.handleChange}
            />
        </div>
    )
}

export default Editor;