import React from "react";
import {Input} from "antd";

const InputContainer = ({ filter, title, style }) => {
    return (
        <Input placeholder={title} onChange={e => filter(e.target.value)} style={style}/>
    )
}

export default InputContainer;