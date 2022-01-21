import ReactMarkdown from 'react-markdown';
import StructureStyles from "../../styles/Markdown.module.css";

const MarkdownContainer = (props)=>{
        return(
            <div className={`${StructureStyles[props.class]} ${StructureStyles.ReactMarkdown}`}>
                <ReactMarkdown>{props.children}</ReactMarkdown>
            </div>
        )
}
export default MarkdownContainer 