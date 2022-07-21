import React from 'react';
import {useDrag} from "react-dnd";
import {ItemTypes} from "../items/type";
import {styleBoxes} from "./InputBox";

function TextareaBox({id, name}) {
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.BOX,
        item: {
            id: id,
            name: name
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div ref={drag} style={styleBoxes}>
            {name}
        </div>
    );
}

export default TextareaBox;