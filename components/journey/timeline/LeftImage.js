import React from 'react'

export default function LeftImage({title, description, link, linktitle, image, flag}) {
    return (
        <div className="timeline-list timeline-box">
        <div className="row box">
        <div className="col-4 pl-2 pr-0">
            
            <img src={image} className="img-fluid" />
            </div>
            
          <div className="col-8 pl-2">
            
               <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
              
          <div className="box-footer d-flex justify-content-between align-items-center">
               <img src={flag} className="img-fluid" />
              <a href={link}>{linktitle}</a>
          
              
          </div>    
            
            </div>  
        
        
        </div>
        
   
    </div>
      
      
    )
}
