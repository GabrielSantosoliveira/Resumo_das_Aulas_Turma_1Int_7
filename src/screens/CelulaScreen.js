import { Box, Paragrafo, Titulo } from "../themes/components";

export default  function CelulaScreen () {
    
    return (

        <>

            <main>

                <Box tag="section">
                    <Titulo  cl="pr" tag="h1">Citologia</Titulo>

                    <Paragrafo tag="p">
                        A citologia e uma area na biologia que estuda células
                    
                    </Paragrafo>
                  

                    
                    <Titulo  cl="pr"  tag="h2" tm="m"> o que e uma célula </Titulo>
                    <Paragrafo tag="p">
                    A celula e a menor parte viva de um ser vivo
                    
                    </Paragrafo>
                    
                    <Titulo  cl="pr" tag="h2" tm="m" >  o que e um servivo  </Titulo>
                    <Paragrafo tag="p">

                        servivo e tudo que nace se desenvove  reproduz e  morre e 
                    </Paragrafo>

                    <hr/>

                    <Titulo   cl="pr" tag="h2" tm="m"> Parte basicas de celulas </Titulo>
                    <Paragrafo tag="p">
                        as partes basicas de celulas são 

                        <img src="\img\celulas\celula.jpg" alt="imagem de uma celula" />
                    
                     
                    </Paragrafo>
                    <hr />

                    <Titulo   cl="pr" tag="h2" tm="m">
                        Diferenças da celula procariotes e eucariotices
                    </Titulo>

                    <hr />
                  

                    
                     <Titulo   cl="pr" tag="h3" tm="p">
                         celulas eucariotices
                            tem a carioteca
                     </Titulo>
                        <div className="center"><img  className="carioteca" src="\img\celulas\celula.jpg" alt="imagem de uma celula" /></div>
                        <hr />

                        
                        
                        <Titulo  cl="pr"  tag="h3" tm="p">procariotes não tem carioteca e são mais simples</Titulo> 

                        <div className="center">
                            <img className="carioteca"  src="\img\celulas\procariote.png" alt="imagem de uma celula" />
                            <hr />
                        </div>

                    
                    <hr/>

                </Box>
                
                
            </main>

            <style jsx>

            {`

            .center{
                margin:auto;
                width:99%;
                display:flex;
                flex-direction:row;
                justify-content:center;
                justify-items:center;
                align-items:center;
            }

            @media screen and (max-width: 779px) {
                img{
                width:500px;
                }
            }

            

            


            main{
                color: #ffffff;
                background-image: url(/img/bg.jpg);
            }
            .carioteca{
                text-align:center;
                margin:1rem auto ;
                
                width:450px;
                height:450px;
            }

            hr{
                margin:1.2rem;
            }


            @media screen and (max-width: 567px) {
            img{
                width:400px;
            }
            .carioteca{
                width:300px;
            }

            }

            @media screen and (max-width: 404px) {
            img{
                width:300px;
            }
            .carioteca{
                width:300px;
            }

            }
            `}
            </style>
        </>
    )
}