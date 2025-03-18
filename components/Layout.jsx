import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>=::Player Sonoplastia::=</title>
                <meta name='description' content="Para facilitar o seu dia a dia." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.svg' />
            </Head>
            <Navbar class="md:backdrop-blur-md"/>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout