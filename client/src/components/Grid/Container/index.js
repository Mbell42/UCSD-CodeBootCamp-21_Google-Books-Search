// Dependencies
import React from "react";

// Container Component
function Container(props) {
    return <div className = "container fluid">{props.children}</div>;
};

// Exports
export default Container;