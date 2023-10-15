import { useState } from "react";

export default function Menu(){

    
    function Menus({value, link}){
        const [setActive] = useState(link);
   
        return(
            <a className="btn font-white" href={link} >{value}</a>
        );
    }

    return (
        <div className="container">
            <Menus value={'Home'} link={'./'} /> 
            <Menus value={'Produtos'} link={'./produtos'}  />
            <Menus value={'Contato'} link={'./contato'} />
            <Menus value={'Serviços'} link={'./servico'} />
        </div>
    );
}