import Menu from "./componete/Menu";
import Topo from "./componete/Topo";
import Carousel from "./componete/Carousel";
import { BsChat, BsFacebook, BsInstagram, BsTelephoneForward, BsTelephoneForwardFill, BsWhatsapp } from "react-icons/bs";


export default function produto(){
    return(
        <>
            <div className="container">
                <Topo />
            </div>
            <div className="bg-blue">
                <Menu />                
            </div>
            <Carousel />
            <div className="container">
                <div className="titulo-p">
                    Casa Inteligente
                </div>
            </div>
            <div className="container d-flex">
            <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089">
                
                    <img src="produtos/Foto-ISM1001-Perspectiva-Selo.png" />
                    <div className="card-footer">
                        <div className="card-titulo">
                            Casa Inteligente
                        </div>
                        <div className="card-desc">
                            Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                        </div>
                        <div className="card-valor">
                            R$ 199,90
                        </div>
                    </div>
                </a>
                <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089">
                
                    <img src="produtos/Kit-Controle-Remoto-Smart---Lampada-Smart-Izy-Intelbras.png" />
                    <div className="card-footer">
                        <div className="card-titulo">
                            Casa Inteligente
                        </div>
                        <div className="card-desc">
                            Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                        </div>
                        <div className="card-valor">
                            R$ 174,90
                        </div>
                    </div>                
                </a>
                <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089">
                
                    <img src="produtos/Foto-ICA1001-Perspectiva.png" />
                    <div className="card-footer">
                        <div className="card-titulo">
                            Casa Inteligente
                        </div>
                        <div className="card-desc">
                            Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                        </div>
                        <div className="card-valor">
                            R$ 309,00
                        </div>
                    </div>
                
                </a>
                <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089">
                
                    <img src="produtos/Foto-IZC-1003-Perspectiva.png" />
                    <div className="card-footer">
                        <div className="card-titulo">
                            Casa Inteligente
                        </div>
                        <div className="card-desc">
                            Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                        </div>
                        <div className="card-valor">
                            R$ 319,90
                        </div>
                    </div>
                </a>
            </div>
            <div className="container">
                <div className="titulo-p">
                    CFTV
                </div>
            </div>
            <div className=" container d-flex">
            <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089">
                
                <img src="produtos/IM3-C--perspectiva.png" />
                <div className="card-footer">
                    <div className="card-titulo">
                        Casa Inteligente
                    </div>
                    <div className="card-desc">
                        Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                    </div>
                    <div className="card-valor">
                        R$ 319,90
                    </div>
                </div>
            </a>
            <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089">
                
                <img src="produtos/iM5_persp-esq-2.png" />
                <div className="card-footer">
                    <div className="card-titulo">
                        Casa Inteligente
                    </div>
                    <div className="card-desc">
                        Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                    </div>
                    <div className="card-valor">
                        R$ 319,90
                    </div>
                </div>
            </a>
            <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089">
                
                <img src="produtos/iME500-front_1_1-green.png" />
                <div className="card-footer">
                    <div className="card-titulo">
                        Casa Inteligente
                    </div>
                    <div className="card-desc">
                        Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                    </div>
                    <div className="card-valor">
                        R$ 319,90
                    </div>
                </div>
            </a>
            <a className="card-prod" target="blank"  href="https://api.whatsapp.com/send?phone=5511930071089&text=Casa Inteligente id=5">
                
                <img src="produtos/Foto-IZC-1003-Perspectiva.png" />
                <div className="card-footer">
                    <div className="card-titulo">
                        Casa Inteligente
                    </div>
                    <div className="card-desc">
                        Controle ambientes e dispositivos por meio de um único aplicativo, ou por comando de voz via speaker, transforme sua TV em smart TV e muito mais!
                    </div>
                    <div className="card-valor">
                        R$ 210,90
                    </div>
                </div>
            </a>
            
            </div>
            <div className="footer mt-2">
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
        </>
    )
}