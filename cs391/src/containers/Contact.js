import style from "./css/style.css";

export default function Contact() {
  return (
    <main className="contact" style={{ padding: "1rem 0", color: "#white" }}>
      <h2>Contact Information</h2>
      <b>Çekmeköy Campus Nişantepe District,</b>
      <p>Orman Street, 34794</p>
      <p>Çekmeköy - İstanbul</p>
      <p>info@ozyegin.edu.tr</p>
      <b>Call us at:</b> <p>+90(216) 564 90 00</p>
      <br />
      <b> Fax us at: </b> <p>+90(216) 564 99 99</p>
      <div>
        <img id="map" style={style} src="images/map.jpg" alt="Map" />;<img />
      </div>
    </main>
  );
}
