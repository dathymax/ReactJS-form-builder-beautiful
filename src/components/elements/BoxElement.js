import React from 'react';
import InputElement from "./InputElement";
import TextareaElement from "./TextareaElement";

function BoxElement({name}) {
    function checkTypeElement() {
        if (name === "Input") {
            return <InputElement/>
        } else if (name === "Textarea") {
            return <TextareaElement/>
        }
    }

    return (
        checkTypeElement()
    );
}

export default BoxElement;