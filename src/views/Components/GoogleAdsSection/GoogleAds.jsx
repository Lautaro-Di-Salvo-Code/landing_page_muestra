import data from './Data.json'
import style from './Style.module.css'


const GoogleAds = () => {

  const { ContainerAds,
    color1,
    color2,
    ContainerAds_div,
    color3,
    iconsADS,
    div_description,
    sectionGoogleAds,
    div_description_p
  } = style

  return (
    <section className={sectionGoogleAds}>
      <h3>Google Ads Section</h3>
      <div className={`${ContainerAds}`}>

        {
          data.map(e => (
            <div className={`${e.id === 0 && color1 || e.id === 1 && color2 || e.id === 2 && color3} ${ContainerAds_div}`} key={e.id}>
              <b>{e.title}</b>
              <img className={iconsADS} src={e.img} alt="" />
              <div className={div_description}>
                <p className={div_description_p}>{e.description}</p>
              </div>
              <button>bfdbdbd</button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default GoogleAds