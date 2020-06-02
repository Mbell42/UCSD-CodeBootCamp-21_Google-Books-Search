// Dependencies
import React from "react";

// List component
const List = ({ children }) => (
    <ul className = "list-group">{ children }</ul>
);

// List Entries
function ListEntry({ children }) {
    return <li className = "list-group-item">{ children }</li>
};

module.exports = { List, ListEntry }