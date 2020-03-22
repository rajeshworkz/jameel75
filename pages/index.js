import React from 'react'
import Layout from '../components/Layout'

export default function index() {
    return (
        <Layout>
            
            <section className="container-fluid landing-page fixed-page d-flex align-items-center p-0">
        
        <div>
        
        <div className="row d-none d-md-block">
        
            <div className="jameel-logo-top w-100 text-center"><img src="static/images/75_abdul_latif_jameel_logo_en.png" /></div>
        </div>
        
        <div className="row d-flex align-items-center text p-0">
        
            <div className="col order-2 order-md-1 pl-0 pr-1">
                <h3 className="text-center">Journey.</h3>
                <hr />
                
                <div className="d-flex align-items-center">
                <a href="#"><img src="static/images/icons/lading-arrow-left.png" /></a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. </p>
                    
                
                </div>
            
            
            </div>
            <div className="col-md-5 order-1 order-md-2">
            
            <div className="video">
  <video width="320" height="" muted=""  loop="">
  <source src="static/images/Jameel75_Landing_Page9.mp4" type="video/mp4" /> 
</video> 
    </div>
            
            
            
            
            </div>
            <div className="col order-3 order-md-3  pr-0  pr-1 text-right">
            
            
           
                
                <div className="d-flex align-items-center">
                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. </p>
                    <a href="#"><img src="static/images/icons/landing-arrow-right.png" /></a>
                
                </div>
                     <hr />
                    <h3 className="text-center">Journey.</h3>
            
            
            
            </div>
        
        
        
        
        </div>
        
        
           <div className="row d-none d-md-block">
        
            <div className="community-logo-bottom text-center w-100"><img src="static/images/75_community_jameel_logo_en.png" /></div>
        </div>
        
        </div>
        




</section>



        </Layout>
    )
}
