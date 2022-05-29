import ekin from './images/2.jpg'
import ceren from './images/1.jpg'
import basak from './images/3.jpg'
import style from './css/style.css'

export default function About() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Contact Information</h2>
        <b>Çekmeköy Campus Nişantepe District,</b>
        <p>Orman Street, 34794</p>
        <p>Çekmeköy - İstanbul</p>
        <p>info@ozyegin.edu.tr</p>
  
        <b>Call us at:</b> +90(216) 564 90 00
        <br />
        <b> Fax us at: </b> +90(216) 564 99 99
        <div>
          <img id="ekin" style={style} src={ekin} alt="Ekin" />;<img />
        </div>
        <div>
          <img id="ceren" style={style} src={ceren} alt="Ceren" />;<img />
        </div>
        <div>
          <img id="basak" style={style} src={basak} alt="Başak" />;<img />
        </div>
      </main>
    );
  }