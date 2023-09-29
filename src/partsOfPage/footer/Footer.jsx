import ifal from '../../../public/apoio/ifal.png';
import fapeal from '../../../public/apoio/fapeal.png';
import fapealsecti from '../../../public/apoio/fapealsecti.png';
import pibicjr from '../../../public/apoio/pibicjr.png';
import cpsoftware from '../../../public/apoio/cpsoftware.png';

import facebook from '../../../public/midias/facebook.svg';
import instagram from '../../../public/midias/instagram.svg';
import linkedin from '../../../public/midias/linkedin.svg';
import twitter from '../../../public/midias/twitter.svg';

import FooterStyle from './footer.module.css'

export function Footer() {
    return (
        <>
        <footer className={FooterStyle.footer}>
            <div className={FooterStyle.parceiros}>
                <h3>Parceiros</h3>
                <div className={FooterStyle.apoio}>
                    <img src={ifal} alt="Logo do IFAL" className={FooterStyle.one}/>
                    <img src={fapeal} alt="Logo da Fapeal" />
                    <img src={fapealsecti} alt="Logo da Secti" />
                    <img src={pibicjr} alt="Logo da Pibic Jr." />
                    <img src={cpsoftware} alt="Logo da CPSoftware" />
                </div>
            </div>

            <div className={FooterStyle.contato}>
                <h3>Contato</h3>
                <div className={FooterStyle.midias}>
                    <a href="https://www.facebook.com/amoifal/" target='_blank'>
                        <img src={facebook} alt="Logo do FaceBook" />
                    </a>
                    <a href="https://www.instagram.com/amo.ifal/" target='_blank'>
                        <img src={instagram} alt="Logo do instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/amoifal/" target='_blank'>
                        <img src={linkedin} alt="Logo do linkedin" />
                    </a>
                    <a href="https://twitter.com/amoifal" target='_blank'>
                        <img src={twitter} alt="Logo do twitter" />
                    </a>
                </div>
            </div>
        </footer>
        </>
    );
}