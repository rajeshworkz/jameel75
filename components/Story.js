import React from 'react'

export default function Story({name, description, order, image}) {
    return (
        
<div className={`box-story img-${order}`}>
    <img src={image} />
    <div className="tooltiptext">
        <h4>{name}</h4>
        <p>{description}</p>
        </div>
        </div>
        
    )
}
