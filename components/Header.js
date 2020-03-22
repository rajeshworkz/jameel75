import React from 'react'

export default function Header() {
    return (
        <>
        <div className="header-logo d-flex justify-content-between align-items-center">
                            <div className="language d-flex align-items-center">
                            <img className="globe" src="static/images/globe.png" />
                                <span className="language-text">English</span>
                            </div>
        
        
        
                            <div>
                            <a href="/"><img className="logo" src="static/images/abdul-latif-jameel-logo.png" /></a>
                                
                            </div>
                        </div>
                    
                        <div className="alj-navbar">
                                <div className="container-lg px-0">
        
                                <nav className="navbar navbar-expand-lg navbar-light px-0">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
              <img className="burger-menu" src="static/images/icons/burger-menu.png" />
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-between">
              <li className="nav-item active">
                <a className="nav-link" href="#">Journey</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Stories</a>
              </li>
          
              <li className="nav-item">
                <a className="nav-link" href="#">Chairman's Message</a>
              </li>
        
        
              <li className="nav-item">
                <a className="nav-link" href="#">Our Founder</a>
              </li>
        
        
        
              <li className="nav-item">
                <a className="nav-link" href="#">Anniversary Event</a>
              </li>
        
        
              <li className="nav-item">
                <a className="nav-link" href="#">Downloads</a>
              </li>
        
        
              <li className="nav-item">
                <a className="nav-link" href="#">Quiz</a>
              </li>
        
        
        
              <li className="nav-item">
                <a className="nav-link" href="#">Celebrations</a>
              </li>
        
        
            </ul>
           
          </div>
        </nav>
        
        
                                </div>
        
        
                        </div>
        </>
    )
}
