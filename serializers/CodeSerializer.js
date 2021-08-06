import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const CodeSerializer = (props) => {
    if(props.node.language = "text") {
        props.node.language = "go"
    }
    if(props.node.language = "sh") {
        props.node.language = "powershell"
    }
    return(
        <CopyBlock
        text={props.node.code}
        language= {props.node.language}
        theme={dracula}
        wrapLines>
        </CopyBlock>

    )
}

export default CodeSerializer;