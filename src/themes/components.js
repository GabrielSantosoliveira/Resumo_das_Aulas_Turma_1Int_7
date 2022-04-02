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
            font-size:  ${Tamanho.p};
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
  } else if (cl == "m") {
    Cl = Tamanho.m;
  } else {
    Tm = Tamanho.g;
    return Tm;
  }

  if (tm == undefined) {
    Tm = Tamanho.g;
  } else if (tm == "p") {
    Tm = Tamanho.p;
  } else if (tm == "m") {
    Tm = Tamanho.m;
  } else {
    Tm = Tamanho.g;
    return Tm;
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
