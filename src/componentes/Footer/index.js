import "./Footer.css"
import footer from "./public/img/footer.png"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: `url(${footer})`}}>
        <div className="redes">
            <a href="https://www.facebook.com/esteban.cerdasperez/">
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/esteban_c96/?hl=es-la">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Esteban Cerdas</strong>
    </footer>
}

export default Footer