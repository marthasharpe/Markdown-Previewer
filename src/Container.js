import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

const container = {
  display: "flex",
}

const initialInput =
`# Make a Header

## Or a Sub-header
  
Write some code: \`<div></div>\`

\`\`\`
// or some multi-line code:

reactTest(type) {
  if (type === ReactApp) {
    console.log('You're a React developer!');
  }
}
\`\`\`
  
Make text **bold** or _italic_ or ~~crossed out~~.

Create a [link](https://www.freecodecamp.com)
> Write a block quote.

Monday | Tuesday | Wednesday
------ | ------ | ------ 
coffee | coffee | coffee
code | code | code

1. First item
2. Second item
3. Third item

- Unordered
* Lists

![Pretty blue daisies.](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmIP_D17O_R39N1GyQ7htSvkJS2e_Z_1wN0Xjl-6KYUQaWDRg)
`

class Container extends React.Component {
    state = {
      input: initialInput
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
          <Editor
            input={this.state.input}
            handleChange={this.handleChange}
            />
          <Preview
            input={this.state.input}
            markdownText={markDownText}
            />
        </div>
      );
    }
  };

  export default Container;