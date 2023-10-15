import {BsFacebook, BsInstagram, BsSearch, BsWhatsapp} from "react-icons/bs"

function Titulo({values}){
    return(<>{values}</>);
}

export default function Topo (){
    return(
        <>
            <div className="titulo">
                <div className="img-titulo"> 
                    <img src="./img/logo.jpg" />
                </div>
                <div  className="form-control">
                    <input placeholder="Search"  type="text" />
                </div>
                <div >
                    <BsSearch />                
                </div>
            </div>
        </>
    )
}