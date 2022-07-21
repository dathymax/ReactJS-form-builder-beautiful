import React, {useCallback, useState} from 'react';
import {ItemTypes} from "../items/type";
import {useDrop} from "react-dnd";
import {Responsive, WidthProvider} from "react-grid-layout";
import BoxElement from "../elements/BoxElement";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const rowHeights = {lg: 5, md: 3, sm: 2, xs: 1};
const cols = {lg: 24, md: 24, sm: 24, xs: 24};
const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480};

function ContentFormBuilder({change}) {
    const [row, setRow] = useState([]);

    const [height, setHeight] = useState(rowHeights.lg);

    const onBreakpointChange = useCallback(
        (newBreakpoint) => {
            setHeight(rowHeights[newBreakpoint]);
        },
        [setHeight]
    );

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (item, monitor) => {
            setRow((old) => {
                change([...old, {name: item.name, id: item.id}]);
                return [...old, {name: item.name, id: item.id}];
            });
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });
    return (
        <div
            ref={drop}
            style={{
                maxWidth: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #000",
                width: "100%"
            }}
        >
            <ResponsiveReactGridLayout
                className="layout border"
                cols={cols}
                breakpoints={breakpoints}
                rowHeight={height}
                onBreakpointChange={onBreakpointChange}
                measureBeforeMount={false}
                style={{
                    height: "100%",
                    width: "100%"
                }}
            >
                {row.length !== 0 ? (
                    row.map((ele, index) => {
                        return (
                            <BoxElement key={index} id={ele.id} name={ele.name}/>
                        );
                    })
                ) : (
                    <div style={{height: 500}}/>
                )}
            </ResponsiveReactGridLayout>
        </div>
    );
}

export default ContentFormBuilder;