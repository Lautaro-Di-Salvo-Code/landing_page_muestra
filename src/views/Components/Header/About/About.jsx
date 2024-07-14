import "./style.css"
const About = () => {
    const FotoPersona = "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-1-compressed.png"
    return (
        <header className="header_article">
            <article className="Head">

                <section className="sectionHeaderInfo">
                    <div className="sectionHeaderInfo_div-title">

                        <h1>Titulo Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nam? Laudantium, earum nobis itaque fugit</h1>
                    </div>

                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio itaque quasi animi eius

                    </h3>
                    <div className="div_button">

                        <button>Boton bgfbgfbfg</button>
                    </div>
                </section>
                <section className="sectionHeaderPicture">
                    <img className="imagenAbout" src={FotoPersona} alt="" />
                </section>
            </article>
        </header>
    )
}

export default About