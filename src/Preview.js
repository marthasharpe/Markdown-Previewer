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
            <div id="preview" dangerouslySetInnerHTML={props.markdownText}></div>
        </div>
    )
}

export default Preview;