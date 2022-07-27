import React, {useState} from "react";
import {ItemTypes} from "./ItemTypes";
import {useDrop} from "react-dnd";
import RGL, {WidthProvider} from "react-grid-layout";
import "./Content.css";
import CheckTypeRenderComponent from "../functions/CheckTypeRenderComponent";

const ReactGridLayout = WidthProvider(RGL);
const Content = (props) => {
    const [row, setRow] = useState([]);
    const [layout, setLayout] = useState([
        {i: 1, x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1}, // *** -- minH & maxH doesnt effect the grid items
        {i: 2, x: 2, y: 0, w: 1, h: 1, minH: 1, maxH: 1},
    ]);
    const [resizeplotly, setResizePlotly] = useState(false);
    const onLayoutChange = (layout) => {
        console.log("data", layout);
        setLayout(layout);
    };

    const onResize = (layouts) => {
        console.log("data", layouts);
        setLayout(layouts);
    };

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {
            setRow((old) => {
                props.change([...old, {name: item.name, id: item.id}]);
                return [...old, {name: item.name, id: item.id}];
            });
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div>
            <div ref={drop} style={{maxWidth: "100%", height: "auto"}}>
                <ReactGridLayout
                    compactType={"horizontal"}
                    cols={4}
                    onResize={onResize}
                    width={100}
                    layout={layout}
                    onLayoutChange={onLayoutChange}
                    draggableCancel=".MyDragCancel"
                    isBounded={true}
                >
                    {row.length !== 0 ? (
                        row.map((ele, index) => {
                            console.log(index);
                            return (
                                <div key={index + 1}>
                                    {CheckTypeRenderComponent(ele.name)}
                                </div>
                            );
                        })
                    ) : (
                        <div style={{height: 500}}/>
                    )}
                </ReactGridLayout>
            </div>
        </div>
    );
};

export default Content;
