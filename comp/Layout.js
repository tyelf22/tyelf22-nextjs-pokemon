import Navbar from './Navbar'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Pokemon</title>
            <link href="https://fonts.googleapis.com/css?family=Oxanium&display=swap" rel="stylesheet"></link>
        </Head>
        <Navbar/>
        {props.children}
    </div>
)

export default Layout