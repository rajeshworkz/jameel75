import React, { useEffect, useState } from 'react'



export default function Globe() {
    const [isComponentMounted, setIsComponentMounted] = useState(false)

    useEffect(() => setIsComponentMounted(true), [])

    if(!isComponentMounted) {
      return null
    }
  
    return (
    
    <div id="earth-col">
            <div id="element" className="little-earth"></div>
        </div>
    
    )
   
         
        
    
}

