import React from 'react'
import estilos from './style.module.css'
const Unnkown = () => {

    const ImagenDelTipoCaminando = "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijer.nl-homepage-v5-1.png"




    const { UnkContainer,
        sectionInfo,
        sectionInfo_div1,
        sectionInfo_div2 } = estilos

    return (
        <div className={UnkContainer}>
            <section className={sectionInfo}>
                <div className={sectionInfo_div1}>

                    <h4>Unnkown</h4>
                    <b>vfdvldmvldfl</b>
                    <p>cdvdfvdfvdfvfdvfdvdfvodfvdfovo</p>
                    <div className='div_button'>

                        <button className='button_unkown'>bdfbdbd</button>
                    </div>

                </div>
                <div className={sectionInfo_div2}>
                    <img src={ImagenDelTipoCaminando} alt="" />

                </div>
            </section>
        </div>
    )
}

export default Unnkown   