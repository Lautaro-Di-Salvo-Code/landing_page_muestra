import './style.css'
const FooterComponent = () => {
    const ImagenFooter = "https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_DIA_RGB.png"

    const imgFooter = "https://bobmeijer.nl/wp-content/uploads/2022/09/Google-partner.png"
    const imgFooter2 = "https://bobmeijer.nl/wp-content/uploads/2022/09/Microsoft-partner.png"
    return (
        <article className='article_Fotter'>
            <section className='article_section_footer'>
                <div>
                    <div className='section_div-p'>

                        <img src={ImagenFooter} alt="" />
                        <p>
                            algovfdkmkdfmklmdlvkmfd
                        </p>
                        <p>
                            algovfdkmkdfmklmdlvkmfd
                        </p>
                        <p>
                            algovfdkmkdfmklmdlvkmfd
                        </p>
                    </div>
                </div>
                <div className='section_div-p'>
                    <h4>Title</h4>
                    <p>
                        algovfdkmkdfmklmdlvkmfd
                    </p>
                    <p>
                        algovfdkmkdfmklmdlvkmfd
                    </p>
                </div>
                <div className='section_div-p'>
                    <h4>Title</h4>
                    <p>
                        algovfdkmkdfmklmdlvkmfd
                    </p>
                    <p>
                        algovfdkmkdfmklmdlvkmfd
                    </p>
                </div>
                <div className='section_div-p'>
                    <h4>Title</h4>
                    <p>
                        algovfdkmkdfmklmdlvkmfd
                    </p>
                    <p>
                        algovfdkmkdfmklmdlvkmfd
                    </p>
                </div>
            </section>
            <hr style={{opacity: "50%"}} />
            <section className='section-div__img'>
                <div>
                    <img src={imgFooter} alt="" />
                </div>
                <div>
                    <img src={imgFooter2} alt="" />
                </div>
            </section>
        </article>
    )
}

export default FooterComponent      