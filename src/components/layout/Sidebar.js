import React from 'react';
import {Droppable, Draggable} from "react-beautiful-dnd";
import {Clone, Item, Kiosk} from "../items/Styled";
import {ITEMS} from "../items/items";

function SidebarFormBuilder(props) {
    return (
        <Droppable droppableId="ITEMS" isDropDisabled={true}>
            {(provided, snapshot) => (
                <Kiosk
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                >
                    {ITEMS.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <React.Fragment>
                                    <Item
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        isDragging={snapshot.isDragging}
                                        style={provided.draggableProps.style}
                                    >
                                        {item.content}
                                    </Item>
                                    {snapshot.isDragging && <Clone>{item.content}</Clone>}
                                </React.Fragment>
                            )}
                        </Draggable>
                    ))}
                </Kiosk>
            )}
        </Droppable>
    );
}

export default SidebarFormBuilder;