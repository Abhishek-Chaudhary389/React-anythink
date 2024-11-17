/*  */
import React from "react";
import React from "react-dom/client";
//const heading = React.createElement( "h1",{ id: "heading" },"Hello World");
//const divElement1 = React.createElement( "div",{id:"child1"}, [heading,heading]);
//const divElement2 = React.createElement( "div",{id:"child2"},[heading,heading]);
//const parentdivElement = React.createElement("div",{id:"parent"},[divElement1,divElement2])


//console.log(heading);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(parentdivElement);
    const Component = () => {
        return(
                <div>
                   <h1> Hello World from react !!!</h1>
           
                </div>
        )

    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Component/>);