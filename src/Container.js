import React from 'react';

class Container extends React.Component {
    state = {
      input: 'markup here'
    }
    handleChange = (event) => {
      this.setState({ input: event.target.value });
    }
    render() {
      return (
        <div>
          <textarea
              id="editor"
              value={this.state.input}
              onChange={this.handleChange}
              />
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  export default Container;