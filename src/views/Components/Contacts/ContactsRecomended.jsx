import { FaLinkedin } from 'react-icons/fa'
import './style.css'
import data from './Contacts.json'

const ContactsRecomended = () => {
    const commillas = "https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Quote_Bob-Meijer_RGB.png"
    return (
        <>
            <h2 className='h2_contacts'>Contacts</h2>
            <div className="ContactsContainer">
                {
                    data.map(e => (
                        <section className="sectionContacts" key={e.id}>

                            <img className='div_img_styles' src={commillas} alt="" />
                            <b className="b_persona">{e.persona}</b>
                            {/* <div className="div_p">
                            </div> */}
                            <img className='div_img_persona' src={e.img} alt="" />
                            <div className="div_asesor">
                                <p>{e.asesor}</p>
                                <FaLinkedin className="iconLinkedin" />
                            </div>
                        </section>

                    ))
                }
            </div>
        </>
    )
}

export default ContactsRecomended