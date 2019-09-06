import React from 'react';

const preview = {
    width: "50%",
    margin: "1rem",
    background: "white",
    padding: 10
}

function Preview(props) {
    return (
        <div style={preview}>
            <p id="preview">{props.input}</p>
        </div>
    )
}

export default Preview;