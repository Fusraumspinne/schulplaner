<<<<<<< HEAD
import Head from "next/head";
import Navigation from "@/komponenten/Navigation"
import Fusszeile from "@/komponenten/Fusszeile"


export default function Layout({children}){
    return(
        <div>
            <Head>
                <title>Schulplaner | Dein Planer</title>
                <meta name="description" content="Next.js App"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <div className="conatiner">
                {children}                
            </div>
        </div>
    )
=======
import Head from "next/head";
import Navigation from "@/komponenten/Navigation"
import Fusszeile from "@/komponenten/Fusszeile"


export default function Layout({children}){
    return(
        <div>
            <Head>
                <title>Schulplaner | Dein Planer</title>
                <meta name="description" content="Next.js App"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <div className="conatiner">
                {children}                
            </div>
        </div>
    )
>>>>>>> 498112700623a2389969422fb980c429cbe86d64
}