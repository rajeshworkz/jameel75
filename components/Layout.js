import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, title}) => (
    
<div>
    <Head>
  
   
    <title>jameel75</title>
    <script src="/static/js/jquery-3.2.1.slim.min.js"></script>
    <script src="/static/js/bootstrap.min.js"></script>
    <script src="/static/js/default.js"></script>
    
     <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/static/css/fonts.css" rel="stylesheet" />
    <link href="/static/css/default.css" rel="stylesheet" />
    <link href="/static/css/stories.css" rel="stylesheet" />
    <link href="/static/css/media.css" rel="stylesheet" />
    </Head>

    <Header />

    {children}
    <Footer />


</div>
)

export default Layout;