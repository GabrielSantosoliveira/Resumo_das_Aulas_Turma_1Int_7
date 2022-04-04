import { Botao, Input, Titulo } from "../../../themes/components";
import { useState } from "react";
export default  function EcCalculadora(){

    const [massa,setMassa] = useState("")
    const [velocidade,setVelocidade] = useState("")
    const [resultado,setResultado] = useState("")
    function calcularaEc (){ 

        const resutadoDoCalculo = massa * (velocidade * velocidade) / 2 
        setResultado(resutadoDoCalculo)



    }

    return (




        <>
        
        <section className="Ec">


        <Titulo tag="h2" cl="pr" tm="m">
          {" "}
          energia Energia Cinetica {" "}
        </Titulo>
        

            <Input evento={(e )=> {
                setMassa(e.target.value)

            }}
            type="number" placeholder = "massa em kg"
            />

            <Input evento={(e=>{
                setVelocidade(e.target.value)
            })}
            type="number" placeholder="velocidade em m/s"
            />

            <Botao evento={e => calcularaEc()}> Calcular </Botao>
            <div className="resultado">{resultado}</div>

        </section>
        
        
        <style jsx>
        {`
          .Ec {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 200px;
          }
        `}
      </style>
        
        
        </>


    )
} 