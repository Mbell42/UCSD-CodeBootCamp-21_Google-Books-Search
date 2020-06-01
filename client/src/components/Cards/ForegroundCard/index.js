// Dependencies
import React from "react";
import Col from "../../Grid/Col"

// Foreground Card Component
function ForegroundCard(props) {
    return (
        <div>
            <div className  = "card mb-4" key = {props.id}>
                <h2 className = "card-title">
                    {props.title}
                </h2>
                <h3 className = "card-subtitle">
                    by {props.authors}
                </h3>
                <div className = "card-text">
                    {props.description}
                </div>
                <div>
                    <Col size = "md-3">
                        <img
                            alt={props.title}
                            className="img-fluid"
                            src={props.image}
                        />
                    </Col>
                </div>
                <div>
                    <a href = {props.link} className = "btn btn-primary">
                        Open
                    </a>
                    <button className = "btn btn-secondary">
                        Save
                    </button>
                </div> 
            </div>
            <hr></hr>
        </div>
    );
}

export default ForegroundCard;