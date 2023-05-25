import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import "./styles.css";


const defaultContent = `
![Markdown Logo](https://cdn.dribbble.com/users/1469094/screenshots/14321140/markdown_tekengebied_1_kopie.png)

# Hello, 
## You'r welcome at
### Aman's Markdown Previewer project


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My GitHub](https://github.com/Aman-137)

> Block Quot

1. First list item
2. Second list item
- another list
`



marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => {
  return (
    <div>
      <textarea id="editor" value={content} onChange={handleTextareaChange} />
    </div>
  )
}

const Previewer = ({ content }) => {
  return (
    <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked.parse(content, { renderer: renderer })
    }}
  />
  )
}

const App = () => {
  const [content, setContent] = React.useState(defaultContent)
  const handleTextareaChange = (e) => {
    setContent(e.target.value)
  }
  
  return (
    <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
