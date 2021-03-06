import Head from "../components/Head/Head";
import Lista from "../components/Lista/Lista";
import User from "../components/User/User";
import { dataLista } from "../data/data";
import { Box, Paragrafo, Titulo } from "../themes/components";

export default function HomeScreen({lista}) {
  return (

    <main>
      <Head titulo="Home | gabriel ">

      </Head>

      <section>
        <User
          img="img/user/user.jpg"
          nome="Gabriel Santos"
          texto="Sala 1 int 7 "
        />

        <Box tag="section">
          <Paragrafo tag="p">
            eu criei esse site para me ajudar nas provas aqui eu guardo meus
            resumos que eu fasso para eu poder ver em qualquer lugar e tambem
            para compartilhar para meus amigos da e tambem para ser um projeto
            para consequir emprego
          </Paragrafo>

          <Titulo tag="h1"> Resumos </Titulo>
          <Lista array={lista} />
        
         
        </Box>

      </section>

     

    <Titulo tag="h2" tm="m" cl="pr">
      Feito Por Gabriel
    </Titulo>

    

      <style jsx>
        {`
          main {
            color: #ffffff;
            background-color: rgb(34, 34, 34);
            min-width: 98vw;
            min-height:100vh;
            background-image: url(img/bg.jpg);
          }
        `}
      </style>
    </main>
  );
}



