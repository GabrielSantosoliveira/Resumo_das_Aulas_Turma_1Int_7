import { useState } from "react"
import {Botao, Input, Titulo} from "../../../themes/components"
export default function GParaKg (){
    const[resultado,setResultado] = useState()
    const [grama,setGrama] = useState()
    function calcularGParaKg (){
        setResultado(grama/1000)
    }
    return (

        <>
        
        <section className="GparaKg">
            <Titulo tag="h2" cl="pr" tm="m">
                G para Kg 
            </Titulo>
            <Input type="number" evento={ e =>{
                const valor = e.target.value
                setGrama(valor)
            }} value={grama} placeholder="Valor em G"/>
            <Botao evento={() => calcularGParaKg() }> Calcular </Botao>
            <div>{resultado}</div>
        </section>
        
        <style jsx>
        {`
          .GparaKg {
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