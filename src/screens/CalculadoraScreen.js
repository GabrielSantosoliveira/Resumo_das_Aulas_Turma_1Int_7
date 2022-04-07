import {
  Principal,
  Titulo,
  Box,
  Input,
  Paragrafo,
  Botao,
} from "../themes/components";
import { useState } from "react";
import Head from "../components/Head/Head"

import EpgCaladora from "../components/calculadoras/calculadorasDeEnergia/Epg";
import EcCalculadora from "../components/calculadoras/calculadorasDeEnergia/Ec";
export default function CalculadoraScreen() {
  return (
    <>
      <Head titulo="calculadora">

      </Head>
      <Principal>
        <Titulo tag="h1" cl="pr">
          {" "}
          calculadora de energia{" "}
        </Titulo>

        <Box tag="section">
          <EpgCaladora />
          <EcCalculadora />
        </Box>
      </Principal>
    </>
  );
}
