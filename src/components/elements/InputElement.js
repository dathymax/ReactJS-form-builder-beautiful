import React from 'react';
import {Input} from "antd";

export const styleElement = {
    padding: "20px",
    border: "1px dash #000",
    backgroundColor: "lightgray"
}

function InputElement() {
    return (
        <div style={styleElement}>
            <Input/>
        </div>
    );
}

export default InputElement;