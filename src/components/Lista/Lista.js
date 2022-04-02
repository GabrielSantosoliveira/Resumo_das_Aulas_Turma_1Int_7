import Link from "next/link"
import { Tamanho } from "../../themes/themes"


export default function Lista ({array}){
    console.log(array)
  return (

    <>
    
        <ul>
            {array.map((item , i )=>{

                return (
                    <li key={i}> <Link href={item.link}><a> {item.texto} </a></Link>  </li>
                )
            })}
        </ul>


    <style jsx>

{`


ul{
    list-style:none;
    margin-top:${Tamanho.g};
    margin-bottom:${Tamanho.g};
    

}

li{
    font-size:${Tamanho.m};
    text-align:center;


}

a{

    text-decoration:none;


}





`}

    </style>

    </>


  )

}