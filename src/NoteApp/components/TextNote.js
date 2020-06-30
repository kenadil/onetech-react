import React from "react";
import {Input} from "antd";

const {TextArea} = Input;

let style = {
    position: "relative",
    top: "30px",
    width: "75%",
    left: "180px"
}

const TextNote = ({ onChange, noteText }) => {
    return (
        <TextArea placeholder="Enter your note here..." allowClear rows={4} style={style}
            onChange={e => onChange(e.target.value)}
        >
            {noteText}
        </TextArea>
    )
}

export default TextNote;