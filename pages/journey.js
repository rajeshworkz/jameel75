import React,{Component} from "react";
import Layout from "../components/Layout";
import Year from '../components/journey/Year';
import Title from '../components/journey/timeline/Title';
import LeftImage from '../components/journey/timeline/LeftImage';
import NoImage from '../components/journey/timeline/NoImage';
import TopImage from '../components/journey/timeline/TopImage';
import GlobeSection from '../components/journey/globe/GlobeSection';
import Detail from '../components/journey/Detail';





export default class stories extends Component {
// export default function stories() {
  
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "/static/js/globe/miniature.earth.js";
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);





    var myearth;
    var localNewsMarker;
    var news = [];
    
    window.addEventListener( "earthjsload", function() {
    
      myearth = new Earth( document.getElementById('element'), {
    
        location : {lat: 18, lng: 50},
        zoom: 1.05,
        light: 'none',
        
        transparent : true,
        mapSeaColor : 'RGBA(255,255,255,0.76)',
        mapLandColor : '#383838',
        mapBorderColor : '#5D5D5D',
        mapBorderWidth : 0.25,
        mapStyles : ' #CU, #DO, #HT, #JM, #PR { fill: red; stroke: red; } ',
        mapHitTest : true,
    
        autoRotate: true,
        autoRotateSpeed: 0.7,
        autoRotateDelay: 4000,
        
      } );
      
      
      myearth.addEventListener( "ready", function() {
      
        this.startAutoRotate();
        
        
        // Caribbean
        
        news[0] = myearth.addOverlay( {
          location: {lat: 27.5, lng: -71},
          offset: 0.3,
          depthScale : 0.25,
          className : 'warning',
          transform: 'translate(-50%, -50%)',
          occlude : "custom",
          newsId : 0
        } );
        
        news[0].element.addEventListener( 'click', highlightBreakingNews );
        
        
        // Mongolia
        
        news[1] = myearth.addOverlay( {
          location: {lat: 49, lng: 106},
          offset: 0.3,
          depthScale : 0.25,
          className : 'warning',
          transform: 'translate(-50%, -50%)',
          occlude : "custom",
          newsId : 1
        } );
        
        news[1].element.addEventListener( 'click', highlightBreakingNews );
      
        myearth.addLine({
          polyLine : true,
          locations: [
            {lat: 50, lng: 100},
            {lat: 43, lng: 100},
            {lat: 43, lng: 96},
            {lat: 46, lng: 90},
            {lat: 50, lng: 90},
            {lat: 50, lng: 100}
          ],
          color : "red",
          width: 0.75
        });
    
        
        // Sumatra
        
        news[2] = myearth.addOverlay( {
          location: {lat: 4, lng: 91.5},
          offset: 0.3,
          depthScale : 0.25,
          className : 'warning',
          transform: 'translate(-50%, -50%)',
          occlude : "custom",
          newsId : 2
        } );
        
        news[2].element.addEventListener( 'click', highlightBreakingNews );
        
        myearth.addMarker( {
          location: {lat: 3.52, lng: 97.3},
          mesh : "Pin3",
          color : "red",
          scale: 0.4,
          hotspot: false,
        } );
        
        
      } );
      
      
      
      var startLocation, rotationAngle;
      
      myearth.addEventListener( "dragstart", function() {
        
        startLocation = myearth.location;
        
      } );
      
      myearth.addEventListener( "dragend", function() {
        
        rotationAngle = Earth.getAngle( startLocation, myearth.location );			
        
      } );
      
      var selectedCountry;
      
      myearth.addEventListener( 'click', function( event ) {
      
        if ( rotationAngle > 5 ) return; // mouseup after drag
        
        if ( event.id ) {
        
          if ( selectedCountry != event.id ) {
            selectedCountry = event.id;
            document.getElementById('country-name').innerHTML = countries[ event.id ];
            document.getElementById('local-news').classList.add( 'has-news' );
            document.getElementById('local-news').classList.toggle( 'toggle-news' );
          }
          
          // create news marker on first click
          
          if ( ! localNewsMarker ) {
          
            localNewsMarker = this.addMarker( {
              mesh : "Marker",
              color: '#257cff',
              location : event.location,
              scale: 0.01
            } );
            
            localNewsMarker.animate( 'scale', 0.9, { easing: 'out-back' } );
          
          } else {
            
            localNewsMarker.animate( 'location', event.location, { duration: 200, relativeDuration: 50, easing: 'in-out-cubic' } );
          
          }
          
        }
        
      } );
      
    } );
    
    
    function highlightBreakingNews( event ) {
    
      var overlay = event.target.closest('.earth-overlay').overlay;
      var newsId = overlay.newsId;
      
      document.getElementById( 'breaking-news-'+ newsId ).classList.add( 'news-highlight' );
      setTimeout( function(){
        document.getElementById( 'breaking-news-'+ newsId ).classList.remove( 'news-highlight' );
      }, 500 );
      
      myearth.goTo( overlay.location, { duration: 250, relativeDuration: 70 } );
      
      event.stopPropagation();
    }
    
    function gotoBreakingNews( newsId ) {
    
      myearth.goTo( news[ newsId ].location, { duration: 250, relativeDuration: 70 } );
      
    }




}


render(){
    return (
      
      <Layout>
       <section className="container-fluid fixed-page journey-page p-0">
        <div className="title"><span></span><h1>Journey</h1></div>
        <div className="d-block d-lg-none">
        <div className="timeline-globe-switch d-flex">
        <div className="timeline-click active">TimeLine</div>
        <div className="globe-click">Globe</div>
        </div>
            </div>
 
        
        
<div className="journey d-flex justify-content-between p-0">

<div className="year-col">


<div className="year-wrapper">
<div className="year-header">
    
<img src="static/images/icons/arrow-up.png" />    
</div>            
<div className="years-scroll">
<Year year="1990"/>
    <Year year="1992"/>
    <Year year="1993"  description="hello world"/>
    <Year year="1994"/>
    <Year year="1995" /> 

</div>                
<div className="year-footer">
    
<img src="static/images/icons/arrow-down.png" />     
</div>    
 </div> 

 

        
</div>    
    
<div className="timeline-col">
<div className="timeline">

<Title
title="Start of a journey"
year="1990"
/>

<LeftImage
title="Abdul Latif Jameel establish"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
link="#"
linktitle="ALJ News"
image="https://dummyimage.com/200x200/bababa/737373"
flag="static/images/flags/ind.png"
/>

<NoImage
title="Abdul Latif Jameel establish"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
link="#"
linktitle="ALJ News"
flag="static/images/flags/ind.png"
/>


<TopImage
title="Abdul Latif Jameel establish"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
link="#"
linktitle="ALJ News"
image="https://dummyimage.com/600x200/bababa/737373"
flag="static/images/flags/ind.png"
/>

      
 

</div>
</div>    
    
    
<div className="globe-col">
    


{ //!isServer() && <GlobeSection /> 
}
<GlobeSection /> 

    </div>    
    
    
    <div className="detail-col">
    <div className="journey-detail-section">
        <div className="detail-header d-flex justify-content-end align-items-center">
                    <div className="share"><img src="static/images/icons/share.png" /></div>
                    <div className="close"><img src="static/images/icons/close.png" /></div>
                    
                </div>

            <Detail />


                <div className="detail-footer d-flex justify-content-between align-items-center">
                <div><img src="static/images/icons/prev.png" /> PREVIOUS</div>
                <div>NEXT <img src="static/images/icons/next.png" /></div>
                
                </div>    
        </div>




    
    </div>   
    
    
        </div>
        
        
        
        
        
        
</section>
      
      </Layout>
    );
  }
  
}
