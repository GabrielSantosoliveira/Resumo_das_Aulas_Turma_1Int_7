import Head from "../components/Head/Head";
import { Box, Principal , Titulo , Paragrafo } from "../themes/components";

export default function LinguaLinguagemScreen () {
    return(
        
        
        
        <>
        
        <Head titulo="lingua || linguagem ">

        </Head>
        <Principal>


            <Box tag="section">

                <Titulo   cl="pr" tag="h1" tm="g">
                    
                Qual a diferença entre língua e linguagem ? 
                
                </Titulo>  



                <Titulo tag="h2" cl="pr" tm="m">
                A linguagem
                    
                </Titulo>     

                <Paragrafo tag="p">
                é a capacidade que os seres humanos têm para produzir, desenvolver e compreender a língua
                e outras manifestações, como a pintura, a música e a dança.
                
                    
                </Paragrafo>           


                <Titulo   cl="pr" tag="h2" tm="m">
                língua


                </Titulo>

                <Paragrafo tag="p">


                Já a  é um conjunto organizado de elementos (sons e gestos) que possibilitam a comunicação. Ela surge em sociedade, e todos os grupos humanos desenvolvem sistemas com esse fim. As línguas podem se manifestar de forma oral ou gestual, como a Língua Brasileira de Sinais (Libras).

                </Paragrafo>

                 



                

                <Titulo   cl="pr" tag="h2" tm="p">  

                um video sobre o assunto  ↡ ⇓   
                
                </Titulo>

                <section><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VpcdVhQaKqc?start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section>


            </Box>

        </Principal>
        
        
        <style jsx>


            {`
            
            
                section{


                    width:100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }


            
            `}
        </style>

        
        </>



        
        
        )
}



