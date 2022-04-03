import { Principal, Titulo , Box, Input,Paragrafo, Botao} from "../themes/components";
import { useState } from "react";
export default function CalculadoraScreen (){

    const [respostaEpg,setRespostaEpg] = useState(0)
    let massa;
    let gravidade;
    let altura;


    


    function calcularEpg (){ 

        const resultado = (massa*gravidade*altura)

        setRespostaEpg(resultado)

    }


    return (
    
    <>
    
        <Principal>

            <Titulo tag="h1" cl="pr"> calculadora de energia </Titulo>


            <Box tag="section">


                <section className="epg">

                    <Titulo tag="h2" cl="pr" tm="m"> energia potencial gravitacional </Titulo>
                    <Paragrafo tag="p"> a gravidade da terra e de 10m/s </Paragrafo>
                    <Input type="number" placeholder="Massa em Kg" evento={(e)=>{ 
                        const massaInput = e.target.value
                        console.log(massaInput)
                        massa = massaInput
                        
                    }} />
                    <Input type="number" placeholder="Altura" evento={(e)=>{ 
                        const alturaInput = e.target.value
                        altura = alturaInput
                    }} /> 
                    <Input type="number" placeholder="Gravidade " evento={(e)=>{ 
                        const gravidadeInput = e.target.value
                        gravidade = gravidadeInput}}/>
                    <Botao evento={() => calcularEpg()}> Calcular </Botao>
                    <div>
                        {respostaEpg}    
                    </div>
                    

                </section>


            </Box>

        </Principal>


        <style jsx>

            {`
            
            .epg{
                display: flex;
                flex-direction: column;
                justify-content: space-between ;
                align-items: center;
                height:400px;
            }
            
            `}
        </style>
    
    </>
    )
}