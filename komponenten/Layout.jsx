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
}