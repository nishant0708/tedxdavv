import React from "react";
import './heading.css';

export default function Heading (props) {
    return(
        <div className="app__heading">
            <p className="subtext whitetext">
                {props.sub}
            </p>
            <h1 className="title redtext">
                {props.title}
            </h1>
        </div>
    )
}