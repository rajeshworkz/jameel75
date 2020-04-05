import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, title}) => (
    
<div>
    <Head>
  
   
    <title>jameel75</title>
    <script src="/static/js/jquery-3.2.1.slim.min.js"></script>
    <script src="/static/js/bootstrap.min.js"></script>
    <script src="static/js/jquery.inviewport.js"></script>
  <script src="static/js/globe/countries.js"></script>
  <script src="static/js/journey/timeline.js"></script>
  {/*   <script src="static/js/globe/miniature.earth.js"></script>
    <script src="static/js/globe/custom.js"></script>  */}
    <script src="static/js/wow.min.js"></script>
    <script src="static/js/default.js"></script>
    
    
     <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/static/css/fonts.css" rel="stylesheet" />
    <link href="/static/css/default.css" rel="stylesheet" />
    <link href="/static/css/timeline.css" rel="stylesheet" />
    <link href="/static/css/stories.css" rel="stylesheet" />
    <link href="/static/css/globe.css" rel="stylesheet" />
    <link href="/static/css/animate.css" rel="stylesheet" />
    <link href="/static/css/media.css" rel="stylesheet" />
    </Head>

    <Header />
    {children}
    <Footer />


</div>
)

export default Layout;