import './styles.css';


import {ReactComponent as YoutubeIcon } from './youtube.svg';
import {ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer(){
    return (
        <footer className="main-footer">
                App desenvolvido para Delivery -- [V-2021.00]
                <div className="footer-icons">
                    <a href="https://www.youtube.com/channel/UCfV2GinYcbS0va54uCCirKw" target="_new">
                        <YoutubeIcon/>
                    </a>
                    <a href="https://www.linkedin.com/in/edgar-costa-melo-73b384203/" target="_new">
                        <LinkedinIcon/>
                    </a>
                    <a href="https://www.instagram.com/ecmedgar/" >
                        <InstagramIcon/>
                    </a>
                </div>
        </footer>
    )
}

export default Footer;