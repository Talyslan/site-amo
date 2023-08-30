import FooterStyles from '../footer/footer.module.css';

//Redes Sociais
import Facebook from '../../images/Midias/facebook.svg';
import Instagram from '../../images/Midias/instagram.svg';
import Linkedin from '../../images/Midias/linkedin.svg';
import Twitter from '../../images/Midias/twitter.svg';
// Logo dos Patrocinadores
import CPSoftware from '../../images/patrocinadores/cpsoftware.png';
import FapealSecti from '../../images/patrocinadores/fapealsecti.png';
import Fapeal from '../../images/patrocinadores/fapeal.png';
import PibicJr from '../../images/patrocinadores/pibicjr.png';
import Ifal from '../../images/patrocinadores/ifal.png';

export function Footer() {
    return (
        <>
        <div className={FooterStyles.parceiros} id="contato">
            <div className={FooterStyles.boxText}>
                <h2>Parceiros</h2>
            </div>
            <div className={FooterStyles.logos}>
                <img src={CPSoftware} alt="Logo da CPSoftware" />
                <img src={FapealSecti} alt="Logo da Fapeal Secti" />
                <img src={Ifal} alt="Logo do IFAL" />
                <img src={Fapeal} alt="Logo da Fapeal" />
                <img src={PibicJr} alt="Logo da Pibic JR" />
            </div>
        </div>

        <div className={FooterStyles.contacteNos}>
            <div className={FooterStyles.boxText}>
                <h2>Contacte-nos</h2>
            </div>
            <div className={FooterStyles.informations}>
                <p>
                    Para mais informações entre em contato com a gente e nos siga nas redes sociais.
                </p>
                <div className={FooterStyles.midias}>
                    <a href="https://www.facebook.com/amoifal/">
                        <img src={Facebook} alt="Logo do Facebook" />
                    </a>
                    <a href="https://twitter.com/amoifal">
                        <img src={Twitter} alt="Logo do Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/amoifal/">
                        <img src={Linkedin} alt="Logo do Linkedin" />
                    </a>
                    <a href="https://www.instagram.com/amo.ifal/">
                        <img src={Instagram} alt="Logo do Instagram" />
                    </a>
                </div>
            </div>
        </div>

        </>
    )
}