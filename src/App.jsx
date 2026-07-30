import "./App.css";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";

function App() {
  return (
    <>

      <header className="header">

        <div className="brand">
          <img src={logo} />
          <div>
            <h3>Pertubuhan Amal 2 Jannah</h3>
            <span>Madrasah Yayasan As-Siddiqin</span>
          </div>
        </div>


        <nav>
          <a href="#utama">Utama</a>
          <a href="#tentang">Tentang</a>
          <a href="#kempen">Kempen</a>
          <a href="#galeri">Galeri</a>
          <a href="#hubungi">Hubungi</a>
        </nav>

      </header>



      <section 
      id="utama"
      className="hero"
      style={{
        backgroundImage:
        `linear-gradient(
        rgba(60,20,100,.65),
        rgba(60,20,100,.65)
        ),url(${hero})`
      }}
      >

        <div className="hero-text">

          <h1>
          Pertubuhan Amal 2 Jannah
          </h1>

          <h2>
          Madrasah Yayasan As-Siddiqin
          </h2>


          <p>
          Bersama membina masa depan yang lebih baik
          melalui pembangunan madrasah dan kemudahan asrama.
          </p>


          <a href="https://app.herepay.org/amal2jannah/asramachiangrai">
          <button>
          Sumbang Sekarang
          </button>
          </a>

        </div>

      </section>



      <section className="menu-box">


        <a href="#tentang" className="box">

          <h2>01</h2>
          <h3>Tentang Kami</h3>
          <p>
          Kenali Pertubuhan Amal 2 Jannah
          </p>

        </a>



        <a href="#kempen" className="box">

          <h2>02</h2>
          <h3>Kempen Asrama</h3>
          <p>
          Sokong pembangunan asrama madrasah
          </p>

        </a>



        <a href="#galeri" className="box">

          <h2>03</h2>
          <h3>Galeri</h3>
          <p>
          Gambar dan video aktiviti
          </p>

        </a>




        <a href="#sumbangan" className="box">

          <h2>04</h2>
          <h3>Sumbangan</h3>
          <p>
          Hulurkan bantuan melalui HerePay
          </p>

        </a>


      </section>




      <section id="tentang" className="section">

        <h2>Tentang Kami</h2>

        <p>
        Pertubuhan Amal 2 Jannah (Madrasah Yayasan As-Siddiqin)
        merupakan sebuah organisasi yang memberi tumpuan kepada
        pengurusan madrasah dan pembangunan kemudahan asrama.
        </p>

      </section>




      <section id="kempen" className="purple-section">

        <h2>
        Kempen Pembangunan Asrama
        </h2>

        <p>
        Sokongan anda membantu menyediakan kemudahan asrama
        yang lebih selesa dan kondusif.
        </p>


        <h3>
        Maybank: 555050119823
        </h3>

      </section>




      <section id="galeri" className="section">


        <h2>Galeri</h2>

        <div className="gallery-link">

          <div>
          📷
          <h3>Galeri Gambar</h3>
          <p>
          Lakaran asrama,
          asrama lama,
          pembersihan asrama
          </p>
          </div>


          <div>
          🎥
          <h3>Galeri Video</h3>
          <p>
          Video perkembangan terkini
          </p>
          </div>

        </div>

      </section>



      <section id="sumbangan" className="donate">

        <h2>
        Hulurkan Sumbangan
        </h2>

        <a href="https://app.herepay.org/amal2jannah/asramachiangrai">
        <button>
        Bayar Melalui HerePay
        </button>
        </a>


        <br/>


        <a href="https://wa.me/60174788934">
        WhatsApp: 017-4788934
        </a>


      </section>




      <footer id="hubungi">

      <img src={logo}/>

      <p>
      Pertubuhan Amal 2 Jannah
      </p>

      <p>
      Facebook:
      Pertubuhan Amal 2 Jannah
      </p>

      </footer>


    </>
  );
}


export default App;