// Dependencies
import React from "react";

// This Row component lets us use a bootstrap row without having to think about class names
// Row Component
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
};