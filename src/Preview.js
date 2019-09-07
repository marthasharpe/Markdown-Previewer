import React from 'react';

const preview = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "1rem",  
}

function Preview(props) {
    return (
        <div style={preview}>
            <h1 style={{color: "white"}}>Preview</h1>
            <div
            id="preview"
            dangerouslySetInnerHTML={props.markdownText}
            style={{
                background: "white",
                width: "80%",
                height: 400,
                padding: "1rem 2rem",
                overflow: "scroll"
            }}
            >
            </div>
        </div>
    )
}

export default Preview;