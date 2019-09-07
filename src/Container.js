import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

const container = {
  display: "flex",
}

class Container extends React.Component {
    state = {
      input: 'This is _Markdown_.'
    }
    handleChange = (event) => {
      this.setState({ input: event.target.value });
    }
    getMarkdownText() {
      let rawMarkup = window.marked(this.state.input, {sanitize: true});
      return { __html: rawMarkup };
    }
    render() {
      let markDownText = this.getMarkdownText();
      return (

        <div style={container}>
          <Editor input={this.state.input} handleChange={this.handleChange}/>
          <Preview input={this.state.input} markdownText={markDownText}/>
        </div>
      );
    }
  };

  export default Container;