import React from 'react';
import InputBox from "./InputBox";
import TextareaBox from "./TextareaBox";

function BoxWrapper({id, name}) {
    function checkTypeBoxes() {
        if (name === "Input") {
            return <InputBox id={id} name={name} />
        } else if (name === "Textarea") {
            return <TextareaBox id={id} name={name} />
        }
    }

    return (
        checkTypeBoxes()
    );
}

export default BoxWrapper;