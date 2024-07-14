import estilos from './style.module.css'
const AboutPerson = () => {
    const FotoDelPibe = "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1-1024x1024.png"

    return (
        <section className={estilos.bgAboutPerson}>
            <div className={estilos.sectionAbout}>
                <div className={estilos.imgAboutPerson}>

                    <img className={estilos.imgGuy} src={FotoDelPibe} alt="" />
                </div>
                <div className={estilos.textAboutPerson}>
                    <b>Bbfdbdfbdfbdf</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquam alias laborum corporis, iste sunt dolor aperiam possimus, autem minus voluptatum pariatur adipisci cumque blanditiis eveniet? Aliquam vero at itaque.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquam alias laborum corporis, iste sunt dolor aperiam possimus, autem minus voluptatum pariatur adipisci cumque blanditiis eveniet? Aliquam vero at itaque.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutPerson