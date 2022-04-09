import { dataLista } from "../src/data/data";
import HomeScreen from "../src/screens/HomeScreen"

export async function getStaticProps() {
    
    return {
     props:{
         dataLista
     }
    };
  }
export default function Home ({dataLista}){
    return (

        <HomeScreen lista={dataLista}/>

    )
}