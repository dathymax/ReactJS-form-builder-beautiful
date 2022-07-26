import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../Components/ItemTypes";

const InputSidebar = (props) => {
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.CARD,
        item: {
            type: ItemTypes.CARD,
            id: props._id,
            name: props.name,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return (
        <div ref={drag} style={{margin: 10}}>
            Input
        </div>
    );
};

export default InputSidebar;
