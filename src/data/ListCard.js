import React from "react";


function ListCard(props) {
    return (
        <div>
            <ul>
                <li>{props.id}</li>
                <li>{props.title}</li>
                <li>{props.date}</li>
                <li>{props.preview}</li>
                <li>{props.minutes}</li>
            </ul>
        </div>
    )
}




export default ListCard