import React from 'react'
import Globe from '../globe/Globe';
import Test from '../../../pages/test';

export default function GlobeSection() {


    
    return (
        <div className="globe-wrapper">
		
        
             <div className="stories-search">
              <div>
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button className="btn" type="submit"><img src="static/images/icons/search.png" width="17" height="17" /></button>
    </form>
  </div></div><div id="earth-col"><div id="element" className="little-earth"></div></div><div id="globe-slider" className="globe-slider carousel slide" data-ride="carousel" data-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item globe-slider-item active">
      <div className="row m-0">
        <div className="col-4 p-1">
            <div className="box">
            <img src="static/images/globe/01.png" className="img-fluid" />
                <span>1945</span>
                <h5>Saudi Arabia</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sdsds.</p>
            </div>
          
          </div>
          
              <div className="col-4 p-1">
            <div className="box">
            <img src="static/images/globe/01.png" className="img-fluid" />
                <span>1945</span>
                <h5>Saudi Arabia</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sdsds.</p>
            </div>
          
          </div>
          
              <div className="col-4 p-1">
            <div className="box">
            <img src="static/images/globe/01.png" className="img-fluid" />
                <span>1945</span>
                <h5>Saudi Arabia</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sdsds.</p>
            </div>
          
          </div>

        
        </div>
        
        
    </div>
 
  </div>
  
  
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <img src="static/images/icons/slider-arrow-prev.png" className="img-fluid" />
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <img src="static/images/icons/slider-arrow-next.png" className="img-fluid" />
  </a>
</div>
        
        
        
        

		
		

		
	</div>	
    
    )
}
