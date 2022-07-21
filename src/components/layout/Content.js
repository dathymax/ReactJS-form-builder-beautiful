import React from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";
import {Container, Handle, Item, Notice, Content} from "../items/Styled";

function ContentFormBuilder({state}) {
    return (
        <Content>
            {Object.keys(state).map((list, i) => (
                <Droppable key={list} droppableId={list}>
                    {(provided, snapshot) => (
                        <Container
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {state[list].length
                                ? state[list].map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <Item
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                isDragging={snapshot.isDragging}
                                                style={provided.draggableProps.style}
                                            >
                                                <Handle {...provided.dragHandleProps}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                                        />
                                                    </svg>
                                                </Handle>
                                                {item.content}
                                            </Item>
                                        )}
                                    </Draggable>
                                ))
                                : !provided.placeholder && <Notice>Drop items here</Notice>}
                            {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
            ))}
        </Content>
    );
}

export default ContentFormBuilder;