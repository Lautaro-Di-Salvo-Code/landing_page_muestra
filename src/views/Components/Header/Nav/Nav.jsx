import { useState } from "react";
import estilos from "./Nav.module.css";
import { Fade as Hamburger } from 'hamburger-react'
const Logo = "https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_RGB-768x208.png"
const Nav = () => {


    const [menu, setMenu] = useState(false)


    const OpenMenu = () => {
        setMenu(true)
    }   
    const CloseMenu = () => {
        setMenu(false)
    }
    return (
        <>
            <nav className={estilos.nav} >
                <img className={estilos.Logo} src={Logo} alt="" />
                <div className={`${menu ? estilos.OptionsNavNobileOn : estilos.OptionsNavNobilOf} `}>
                    <b> opciones 1</b>
                    <b> opciones 2</b>
                    <b> opciones 3</b>
                </div>
                {
                    menu ?
                        <div onClick={CloseMenu} className={estilos.Ham}>
                            <Hamburger />
                        </div>
                        :
                        <div onClick={OpenMenu} className={estilos.Ham}>
                            <Hamburger />
                        </div>
                }
                <div className={`${estilos.OptionsNav} `}>
                    <a className={estilos.optionsNav_a}> opciones 1</a>
                    <a className={estilos.optionsNav_a}> opciones 2</a>
                    <a className={estilos.optionsNav_a}> opciones 3</a>
                </div>
            </nav>
            
        </>
    )
}

export default Nav