import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/esteban.cerdasperez/">
                <img src="./Img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/esteban_c96/?hl=es-la">
                <img src="./Img/instagram.png" alt="Instagram"/>
            </a>
        </div>
        <img src="./Img/Logo.png" alt="org" />
        <strong>Desarrollado por Esteban Cerdas</strong>
    </footer>
}

export default Footer