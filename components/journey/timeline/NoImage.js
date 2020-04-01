import React from 'react'

export default function NoImage({title, description, link, linktitle, flag}) {
    return (
        <div className="timeline-list timeline-box">
        <div className="row box">
  
          <div className="col-12">
            
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
