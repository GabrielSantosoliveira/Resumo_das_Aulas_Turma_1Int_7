export default  function User({img, nome, texto,}) {
    return (
      <>
        <section>
          <img src={img} alt="imagem de usuario" />
          <h1 > {nome} </h1>
          <h2 > {texto} </h2>
        </section>
  
        <style jsx>
          {`
            section {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              justify-items: center;
              margin-bottom: 1rem;
            }
            img {
              width: 250px;
              border-radius: 9999px;
            }
            h1 {
              margin-bottom: 1rem;
              color: rgb(243, 86, 39);
              font-size: 1.8rem;
            }
  
            h2 {
              margin-bottom: 1rem;
              font-size: 1.7rem;
            }
  
  
          `}
        </style>
      </>
    );
  }
  