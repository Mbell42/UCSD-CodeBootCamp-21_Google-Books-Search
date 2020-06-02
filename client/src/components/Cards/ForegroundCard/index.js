// Dependencies
import React from "react";
import Col from "../../Grid/Col";

// Foreground Card Component
function ForegroundCard(props) {
    return (
        <div>
            <div className  = "card bg-dark mb-4" key = {props.id}>
                <div>
                    <Col size = "md-3">
                        <img
                            alt={props.title}
                            className="card-img-top"
                            src={props.image}
                        />
                    </Col>
                </div>
                <h3 className = "card-title">
                    {props.title}
                </h3>
                <h4 className = "card-subtitle">
                    by {props.authors}
                </h4>
                <div className = "card-text">
                    {props.description}
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