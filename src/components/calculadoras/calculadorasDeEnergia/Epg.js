import {
  Principal,
  Titulo,
  Box,
  Input,
  Paragrafo,
  Botao,
} from "../../../themes/components";
import { useState } from "react";

export default function EpgCaladora() {
  const [respostaEpg, setRespostaEpg] = useState();
  const [massa, setMassa] = useState("");
  const [gravidade, setGravidade] = useState('');
  const [altura, setAltura] = useState("");

  function calcularEpg() {
    const resultado = massa * gravidade * altura;
    console.log(massa, gravidade, altura);
    setRespostaEpg(resultado);
  }

  return (
    <>
      <section className="epg">
        <Titulo tag="h2" cl="pr" tm="m">
          {" "}
          energia potencial gravitacional{" "}
        </Titulo>
        <Paragrafo tag="p"> a gravidade da terra e de 10m/s </Paragrafo>
        <Input
          value={massa}
          type="number"
          placeholder="Massa em Kg"
          evento={(e) => {
            const massaInput = e.target.value;
            console.log(massaInput);
            setMassa(massaInput);
          }}
        />
        <Input
          value={altura}
          type="number"
          placeholder="Altura"
          evento={(e) => {
            const alturaInput = e.target.value;
            setAltura(alturaInput);
          }}
        />
        <Input
          value={gravidade}
          type="number"
          placeholder="Gravidade "
          evento={(e) => {
            const gravidadeInput = e.target.value;
            setGravidade(gravidadeInput);
          }}
        />
        <Botao evento={() => calcularEpg()}> Calcular </Botao>
        <div>{respostaEpg}</div>
      </section>

      <style jsx>
        {`
          .epg {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 400px;
          }
        `}
      </style>
    </>
  );
}
