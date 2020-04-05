import React from 'react'


export default function GlobeSection() {


    
    return (
        <div className="globe-wrapper">
		
        <div className="filter-wrapper">

          <div className="fliter-click"><img src="/static/images/icons/filter.png" className="img-fluid" /></div>
          <div className="filters">
          <form action="/action_page.php">

 <div> <label for="f1"> Lorem ipsum one</label>
    <input type="checkbox" id="f1" name="f2" value="v" /></div>

    <div> <label for="f2"> Lorem ipsum two</label>
<input type="checkbox" id="f2" name="f2" value="v" /></div>

<div> <label for="f3"> Lorem ipsum three</label>
<input type="checkbox" id="f3" name="f3" value="v" /></div>


<div>  <label for="f4"> Lorem ipsum four</label>
<input type="checkbox" id="f4" name="f4" value="v" /></div>

  
</form>
            
          </div>



        </div>
             <div className="stories-search">
              <div>
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button className="btn" type="submit"><img src="static/images/icons/search.png" width="17" height="17" /></button>
    </form>
  </div></div><div id="earth-col"><div id="element" className="little-earth"></div></div>
  <div id="globe-slider" className="globe-slider carousel slide" data-ride="carousel" data-interval="false">
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
 
    <div className="carousel-item globe-slider-item">
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
