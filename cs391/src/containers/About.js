import ekin from './images/2.jpg'
import ceren from './images/1.jpg'
import basak from './images/3.jpg'
import style from './css/style.css'

export default function About() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>About Us</h2>
        <b>Team</b>
        <p>Ekin Devrim Şahinkaya</p>
        <p>Ceren Yıldızdoğan</p>
        <p>Başak Balcı</p>
        <div>
            <img id="ekin" className={`aboutImg`} style={style} src={ekin} alt="Ekin" />;<img />
            <img id="ceren" className={`aboutImg`} style={style} src={ceren} alt="Ceren" />;<img />
            <img id="basak" className={`aboutImg`} style={style} src={basak} alt="Başak" />;<img />
        </div>
      </main>
    );
  }