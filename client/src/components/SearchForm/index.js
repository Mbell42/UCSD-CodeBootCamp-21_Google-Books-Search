// Dependencies
import React from "react";

// SearchForm component
function SearchForm(props) {
    return (
        <form className = "form-group">
            <div>
                {/* Label will update with search */}
                <label htmlFor = "Search"></label>
                <input
                    onChange={props.inputChangeHandler}
                    name="search"
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search for a Book..."
                />
                {/* Search Button */}
                <button onClick = {props.FormSubmissionHandler} className = "btn btn-primary">
                    Search
                </button>
                {/* Reset Button - Clears search */}
                <button onClick = {props.refreshPage} className = "btn btn-danger">
                    Reset
                </button>
            </div>
        </form>
    );
}

export default SearchForm;