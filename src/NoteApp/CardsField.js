import React from "react";

const CardsField = ({ searchTerm, items }) => {
    return (
        <div className="cards-container">
            {items 
                ? items
                .filter(i => i.body.includes(searchTerm))
                .map(i => <div className="card"> {i.body} </div>)
                :
                "empty"
            }
        </div>
    )
}

export default CardsField;