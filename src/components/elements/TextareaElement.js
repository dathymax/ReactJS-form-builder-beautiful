import React from 'react';
import {Input} from "antd";
import {styleElement} from "./InputElement";

function TextareaElement() {
    return (
        <div style={styleElement}>
            <Input.TextArea/>
        </div>
    );
}

export default TextareaElement;