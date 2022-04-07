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
import GParaKg from "../components/calculadoras/calculadorasDeEnergia/GParaKg";
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
          <GParaKg/>
          <EpgCaladora />
          <EcCalculadora />
        </Box>
      </Principal>
    </>
  );
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
