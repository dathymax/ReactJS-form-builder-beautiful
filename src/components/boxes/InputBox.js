import React from 'react';
import {ItemTypes} from "../items/type";
import {useDrag} from "react-dnd";

export const styleBoxes = {
    color: "black",
    margin: 10,
    border: "1px solid #000",
    width: "400px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

function InputBox({id, name}) {
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

export default InputBox;