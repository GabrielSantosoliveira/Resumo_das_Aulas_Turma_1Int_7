import Head from "../components/Head/Head";
import { Paragrafo, Titulo ,Box } from "../themes/components";

export default function EnergiaScreen (){


    return (


    <>
    <Head titulo="|Energia">

    </Head>
    <main>  
 <Box tag="section">
     
        
   
        <Titulo tag="h1" tm="g" cl="pr" > O que e Energia </Titulo>
        <Paragrafo tag="p">
            Capacidade de realizar trabalho
        </Paragrafo>
        <Titulo tag="h2" tm="m" cl="pr"> O que e trabalho  </Titulo>
        <Paragrafo tag="p">
            Trabalho e trasferencia de energia devido a ação de uma
        </Paragrafo>
        <section><iframe  src="https://www.youtube.com/embed/3VLPyOLC1nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section>
        
        
    </Box>
    </main>
    
    

    <style jsx>

        {`
        
            main{ 
                color: #ffffff;
                background-image:url(/img/bg.jpg);
                min-height: 100vh;
                
                }
                section{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
                iframe{
                    width:768px;
                    height:432px;
                }
                @media screen and (max-width: 356px) {
            
            iframe{ 
                width:300px
                
                
                 }

                
        
        }
            


        `}
    </style>
    
    </>

    )

}



