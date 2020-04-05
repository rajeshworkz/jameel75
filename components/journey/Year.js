import React from 'react'

export default function Year({year, description}) {
    console.log(year)
    return (
        
            <div className={`years-list ${year} ${ description ? "on" : ""}`}  data-year={year}><div className="year">{year}</div><div className="year-text on">{description}</div></div>
        
    )
}
