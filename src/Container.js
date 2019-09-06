import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

const container = {
  display: "flex",
}

class Container extends React.Component {
    state = {
      input: 'markup here'
    }
    handleChange = (event) => {
      this.setState({ input: event.target.value });
    }
    render() {
      return (
        <div style={container}>
          <Editor input={this.state.input} handleChange={this.handleChange}/>
          <Preview input={this.state.input}/>
        </div>
      );
    }
  };

  export default Container;