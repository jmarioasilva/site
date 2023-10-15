
import Menu from "./componete/Menu";
import Topo from "./componete/Topo";
import Carousel from "./componete/Carousel";
import { BsChat, BsFacebook, BsInstagram, BsTelephoneForward, BsTelephoneForwardFill, BsWhatsapp } from "react-icons/bs";

export default function page(){
    
    return (
        <>
            <div className="container">
                <Topo />
            </div>
            <div className="bg-blue">
                <Menu />                
            </div>
            <Carousel />
            <div className="container d-flex">
                <div className="w-100 align-continer-center">
                    <img className="imgs" src="./img/lp-casa-inteligente-pack-entretenimento-desk.png"/>
                </div>
                <div className="w-100">
                    <h1 className="mt-1 align-continer-center">Izy Smart</h1>
                    <p className="align-continer-center">Sua casa conectada para sua segurança e conforto.</p>
                    <div  className="align-continer-center font-color-green">
                    <a  href="https://api.whatsapp.com/send?phone=5511930071089"><BsWhatsapp /> whatsapp</a>
                    </div>
                </div>
            </div>
            <div className="container d-flex">
                <div className="w-100">
                    <h1 className="mt-1 align-continer-center">CFTV</h1>
                    <p className="align-continer-center">Monitore todos seu espaço com as câmeras e tecnologia mais atual do mercado.</p>
                    <div  className="align-continer-center font-color-green">
                    <a  href="https://api.whatsapp.com/send?phone=5511930071089"><BsWhatsapp /> whatsapp</a>
                    </div>
                </div>
                <div className="w-100 align-continer-center  ">
                    <img className="imgs" src="./img/lp-casa-inteligente-pack-seguranca-desk.png"/>
                </div>

            </div>
            <div className="container d-flex">
            <div className="w-100 align-continer-center  ">
                    <img className="imgs" src="./img/XPE.jpg"/>
                </div>
                <div className="w-100">
                    <h1 className="mt-1 align-continer-center">PORTEIRO</h1>
                    <p className="align-continer-center">Identifique suas visitas antes de entrar no seu estabelecimento.</p>
                    <div  className="align-continer-center font-color-green">
                    <a  href="https://api.whatsapp.com/send?phone=5511930071089"><BsWhatsapp /> whatsapp</a>
                    </div>
                </div>
                
            </div>
            <div className="container d-flex">
                <div className="w-100">
                    <h1 className="mt-1 align-continer-center">CFTV</h1>
                    <p className="align-continer-center">Teste do produto smarts</p>
                    <div  className="align-continer-center font-color-green">
                    <a  href="https://api.whatsapp.com/send?phone=5511930071089"><BsWhatsapp /> whatsapp</a>
                    </div>
                </div>
                <div className="w-100 align-continer-center  ">
                    <img className="imgs" src="./img/lp-casa-inteligente-pack-seguranca-desk.png"/>
                </div>

                
            </div>
            <div className="container d-flex">
            <div className="w-100 align-continer-center  ">
                    <img className="imgs" src="./img/Tecnologia-Segurança.png"/>
                </div>
                <div className="w-100">
                    <h1 className="mt-1 align-continer-center">Tecnologia e Segurança</h1>
                    <p className="align-continer-center">Câmeras de segurança de ultima geração para te proteger dia e noite.</p>
                    <div  className="align-continer-center font-color-green">
                    <a  href="https://api.whatsapp.com/send?phone=5511930071089"><BsWhatsapp /> whatsapp</a>
                    </div>
                </div>
                
            </div>
            <div className="footer">
                <div className="footer-topo">
                    <div className="footer-container">
                        <div>
                            <p>Precisa de ajuda?</p>
                        </div>
                        <div>
                            <BsTelephoneForward /> Suporte
                            
                        </div>
                        <div>
                            <p>Duvidas</p>
                        </div>
                    </div>
                </div>
                <div className="footer-container mt-2">
                    <div className="div-coll">
                        <h2>Suporte ao cliente</h2>
                        <ul className="footer-list">
                            <li>CFTV</li>
                            <li>Interfonia</li>
                            <li>Central Cerca e Incêndio</li>
                        </ul>
                    </div>
                    <div className="div-coll">
                        <h2>Fale conosco</h2>
                        <ul className="footer-list">
                            <li>Atendimento ao cliente</li>
                            <li>Fale com o supoerte</li>
                            <li>Elogios e criticas</li>
                        </ul>
                    </div>
                    <div className="div-coll">
                        <h2>Nossas redes sociais</h2>
                        <ul className="footer-list">
                            <li><a href="https://www.facebook.com/kainformaticabm"><BsFacebook /> facebook</a></li>
                            <li><a href="https://www.instagram.com/kainformaticabm"><BsInstagram /> instagram</a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=5511930071089"><BsWhatsapp /> whatsapp</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="footer-logo">
                    <img src="./logos/intelbras.png" />
                    <img src="./logos/hikvision.png" />
                    <h6>&copy; Todos os direitos reservado 2023</h6>
                </div>
            </div>
        </>
    );
}