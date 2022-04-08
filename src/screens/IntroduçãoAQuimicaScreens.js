import { Principal ,Box, Titulo, Paragrafo, TextoForte, Imagem} from "../themes/components"

export default function IntroduçãoAQuimicaScreen ({posts}) { 


    return (
        <>
        
        <Principal>


            <Box tag="section">
                <Titulo   cl="pr" tag="h1" tm="g">
                    Introdução A Quimica
                </Titulo>
                <Paragrafo tag="p">
                    A Quimica e um ramo na ciências que estuda a 
                    <br/>
                    &rarr; <TextoForte> Mataria </TextoForte>
                    <br/>
                    &rarr;   <TextoForte>  trasformaçoes </TextoForte>
                    <br/>
                    &rarr;  <TextoForte>  energias envolvidas </TextoForte>
                </Paragrafo>
                <Titulo   cl="pr" tag="h2" tm="g"> 
                    construçao da materia
                </Titulo>
                <Paragrafo tag="p"> 
                    um filosofo grego que sustenta que toda materia e constituida de particulas indivisives que na sua asênsia temos vacuo
                </Paragrafo>


                <Titulo   cl="pr" tag="h1" tm="g">
                   Materia
                </Titulo>

                <Paragrafo tag="p"> 
                    e tudo que tem massa e ocupa um lugar no espaço
                </Paragrafo>

                <Imagem src="/img/quimica/mapaMentalDeIntroduçaoAQuimica.png" alt="mapa mental de introducao A quimica"/>

                <section>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XDBwYrWFZUQ?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                 </section>
                

            </Box>

        </Principal>
        
        <style jsx>

            { `
            section{
                    margin-top:1rem ;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
            `}
        </style>
        
        </>
    )


}



export async function getStaticProps() {
    
    
   
    return {
      props: {
       
      },
    }
  }
  