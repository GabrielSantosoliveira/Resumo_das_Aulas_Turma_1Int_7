import { color, Tamanho } from "./themes";

export function Paragrafo({ tag, children }) {
  const Tag = tag;

  return (
    <>
      <Tag>{children}</Tag>

      <style jsx>
        {`
          ${tag} {
            margin-bottom: 1rem;
            text-align: center;
            font-size: ${Tamanho.p};
          }
          @media screen and (max-width: 780px) {
            ${tag} {
              font-size: ${Tamanho.p};
            }
          }
        `}
      </style>
    </>
  );
}

export function Box({ tag, children }) {
  const Tag = tag;

  return (
    <>
      <Tag>{children}</Tag>

      <style jsx>
        {`
          ${tag} {
            width: 768px;
            margin: auto;
          }
            @media screen and (max-width: 780px) {
            ${tag} {
              width :520px ;
            }

            @media screen and (max-width: 519px) {
            ${tag} {
              width :400px ;
            }

            @media screen and (max-width: 398px) {
            ${tag} {
              width :320px ;
              box-sizing: border-box ;
            }
          
        `}
      </style>
    </>
  );
}

export function Titulo({ tag, children, tm, cl }) {
  let Cl;

  let Tm;

  if (cl == undefined) {
    Cl = "#ffffff";
  } else if (cl == "pr") {
    Cl = color.pr;
  }

  if (tm == undefined) {
    Tm = Tamanho.g;
  } else if (tm == "p") {
    Tm = Tamanho.p;
  } else if (tm == "m") {
    Tm = Tamanho.m;
  } else if (tm == "g") {
    Tm = Tamanho.g;
  }

  const Tag = tag;

  return (
    <>
      <Tag>{children}</Tag>

      <style jsx>
        {`
          ${Tag} {
            text-align: center;
            font-size: ${Tm};
            color: ${Cl};
          }
        `}
      </style>
    </>
  );
}

export function Principal({ children }) {
  return (
    <>
      <main>{children}</main>

      <style jsx>
        {`
          main {
            color: #ffffff;
            background-image: url(/img/bg.jpg);
            min-height: 100vh;
          }
        `}
      </style>
    </>
  );
}

export function Input({ placeholder, type, evento, value }) {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={evento}
      />
      <style jsx>
        {`
          input {
            font-size: ${Tamanho.m};
            font-weight: 700;
            background: ${color.sc};
          }

          @media (max-width: 357px) {
            input {
              font-size: ${Tamanho.p};
              width: 98%;
            }
          }
        `}
      </style>
    </>
  );
}

export function Botao({ children, evento }) {
  return (
    <>
      <button onClick={evento}> {children} </button>

      <style jsx>
        {`
          button {
            font-size: ${Tamanho.m};
            font-weight: 700;
            color: ${color.pr};
          }
        `}
      </style>
    </>
  );
}
export function Hr() {
  return (
    <>
      <hr />

      <style jsx>
        {`
          hr {
            margin: 1.2rem;
          }
        `}
      </style>
    </>
  );
}
