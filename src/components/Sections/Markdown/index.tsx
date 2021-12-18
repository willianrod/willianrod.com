import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const PLUGINS = [
  remarkGfm
]

interface IMarkdownProps {
  source: string
}

const Markdown: React.FC<IMarkdownProps> = ({ source }) => {
  return (
    <ReactMarkdown plugins={PLUGINS}>{source}</ReactMarkdown>
  )
}

export default Markdown