import "./style.css"
import brands from './Brands.json'
const Brands = () => {
    const IconoOndulado = "https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Wave_Bob-Meijer_RGB.png"

    return (
        <section className="sectionBrands">
            <div className="div_h2">

                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, </h2>
            </div>
            <img className="iconoOndulado" src={IconoOndulado} alt="" />
            <p>vfdbfdbdfbdndvdvdvd</p>

            <section className="brandsStyles">
                {
                    brands.map(e => (
                        <div key={e.id}>
                            <img className="imgBrands" src={e.img} alt="" />
                        </div>
                    ))
                }
            </section>
        </section>
    )
}

export default Brands