import React from 'react';
import './teamcard.css';

const TeamCard = (props) => {
    return (
        <div className="teamcard">
            <div className="hovered-image">
                <div className="image" style={{ backgroundImage: `url(${props.image})` }} />
                <div className="details">
                    <h3 className="name">{props.name}</h3>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
