import React from 'react'

export default function Title({title, year}) {
    return (
        <div className={`timeline-list timeline-title ${year}`} data-year={year}>
    <div className="">
        <p>{title}<span> - </span> <span className="t-year">{year}</span></p>
    </div>
  </div>
    )
}
