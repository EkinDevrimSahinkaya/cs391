import map from './images/map.jpg'
import style from './css/style.css'

export default function Contact() {
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
          <img id="map" style={style} src={map} alt="Map" />;<img />
        </div>
      </main>
    );
  }