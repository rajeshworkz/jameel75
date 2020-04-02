// import React,{Component} from "react";
import Layout from "../components/Layout";
import React, { useEffect, useState } from 'react'



export default function test() {
    const [isComponentMounted, setIsComponentMounted] = useState(false)

    useEffect(() => setIsComponentMounted(true), [])

    if(!isComponentMounted) {
      return null
    }
  
    return (
    <Layout>
    <div className="globe-wrapper">
    <div id="earth-col">
            <div id="element" className="little-earth"></div>
        </div>
    </div>
        </Layout>
    )
   
         
        
    
}



// export default class test extends Component {
//     componentDidMount () {
//         console.log('hi')
//     }

//     render(){
//     return (


        
//         <Layout>
//          <section className="container-fluid fixed-page journey-page p-0">
//     <div className="globe-wrapper">

     

//         <div id="earth-col">
//             <div id="element" className="little-earth"></div>
//         </div>

     
//     </div>
// </section>
//         </Layout>
//     )
// }
// }
