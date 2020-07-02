import React from "react";
import {Switch} from "antd";

const SwitchSlider = ({toggle} : {toggle: any}) => {
    return (
        <Switch onChange={toggle}/>
    )
}   

export default SwitchSlider;