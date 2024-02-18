import Layout from "@/komponenten/Layout";
import "bootstrap/dist/css/bootstrap.min.css" 
import "@/styles/index.css"

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component	{...pageProps}/>
    </Layout>
  )
}
