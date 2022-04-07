import HeadNext from "next/head"



export default function Head ({children , titulo }) { 

    return (

        <>
        
        
        <HeadNext>

        <title>{titulo}</title>

        {children}


        </HeadNext>
        
        
        </>


    )

}