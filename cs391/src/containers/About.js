import style from "./css/style.css";

export default function About() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>About Us</h2>
      <b>Team</b>
      <p>Ekin Devrim Şahinkaya</p>
      <p>Ceren Yıldızdoğan</p>
      <p>Başak Balcı</p>
      <div>
        <img
          id="ekin"
          className={`aboutImg`}
          style={style}
          src="images/2.jpg"
          alt="Ekin"
        />
        ;<img />
        <img
          id="ceren"
          className={`aboutImg`}
          style={style}
          src="images/1.jpg"
          alt="Ceren"
        />
        ;<img />
        <img
          id="basak"
          className={`aboutImg`}
          style={style}
          src="images/3.jpg"
          alt="Başak"
        />
        ;<img />
      </div>
    </main>
  );
}
