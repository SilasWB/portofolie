import Header from "../components/header"
import KompKontakt from "../components/komp-kontakt"
import OmMig from "../components/ommig"
import Projects from "../components/projekter"


function Index() {


    return (
      <>
         <Header />   
         <main>  
        <Projects />
         <OmMig />
         <KompKontakt />
         </main>
       
      </>
    )
  }
  
  export default Index