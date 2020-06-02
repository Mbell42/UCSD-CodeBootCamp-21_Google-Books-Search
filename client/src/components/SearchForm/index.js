// Dependencies
import React from "react";

// SearchForm component
function SearchForm(props) {
    return (
        <form className = "form-group">
            <div>
                {/* Label will update with search */}
                <label htmlFor = "Search"></label>
                <input />
                {/* Search Button */}
                <button>
                    Search
                </button>
                {/* Reset Button - Clears search */}
                <button>Reset</button>
            </div>
        </form>
    );
}

export default SearchForm;