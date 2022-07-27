import React from 'react';
import InputComponent from "../components-render/InputComponent";
import TextareaComponent from "../components-render/TextareaComponent";
import IntegerComponent from "../components-render/IntegerComponent";

function CheckTypeRenderComponent(name) {
    if (name === "input") {
        return (
            <InputComponent/>
        )
    } else if (name === "textarea") {
        return (
            <TextareaComponent/>
        )
    } else if (name === "integer") {
        return (
            <IntegerComponent/>
        )
    }
}

export default CheckTypeRenderComponent;