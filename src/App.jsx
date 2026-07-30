
import "./App.css";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";
import lakaran1 from "./assets/lakaran1.jpg";
import lama1 from "./assets/lama1.jpg";
import bersih1 from "./assets/bersih1.jpg";

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



        <a href="/galeri" className="box">

          <h2>03</h2>
          <h3>Galeri</h3>
          <p>
          Gambar dan video aktiviti
          </p>

        </a>




        <a href="/sumbangan" className="box">

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
        merupakan sebuah organisasi kebajikan yang memberi tumpuan 
        kepada pendidikan Islam, pembangunan madrasah serta kebajikan 
        komuniti Muslim minoriti yang memerlukan sokongan dan perhatian.
        </p>

        <p>
        Tujuan utama penubuhan ini adalah untuk membantu menyediakan 
        kemudahan pendidikan, pengajian Islam dan persekitaran pembelajaran 
        yang lebih baik kepada masyarakat Islam, khususnya golongan yang 
        berada dalam keadaan serba kekurangan.
        </p>

        <p>
        Melalui pembangunan madrasah dan kemudahan asrama, Pertubuhan Amal 
        2 Jannah berusaha memastikan generasi Muslim dapat memperoleh 
        pendidikan agama yang berkualiti, membina jati diri serta 
        memperkukuhkan kefahaman Islam dalam kehidupan seharian.
        </p>

        <p>
        Sokongan daripada para penyumbang dan masyarakat amat penting bagi 
        menjayakan usaha kebajikan ini, khususnya dalam menyediakan asrama 
        yang lebih selesa, selamat dan kondusif untuk para pelajar serta 
        komuniti yang dibantu.
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

        <h2>Galeri Aktiviti</h2>

          <p>
          Lihat perkembangan pembangunan Madrasah Yayasan As-Siddiqin
          melalui koleksi gambar aktiviti dan kemudahan asrama.
          </p>


        <div className="gallery-cards">


        <a href="#lakaran" className="gallery-card">

        <img src={lakaran1}/>

        <div>

        <h3>
        Lakaran Asrama
        </h3>

        <p>
        Reka bentuk dan perancangan pembangunan asrama baharu.
        </p>

        </div>

        </a>



        <a href="#lama" className="gallery-card">

        <img src={lama1}/>

        <div>

        <h3>
        Asrama Lama
        </h3>

        <p>
        Keadaan asal asrama sebelum proses penambahbaikan.
        </p>

        </div>

        </a>



        <a href="#bersih" className="gallery-card">

        <img src={bersih1}/>

        <div>

        <h3>
        Pembersihan Asrama
        </h3>

        <p>
        Aktiviti gotong-royong dan persediaan kemudahan asrama.
        </p>

        </div>

        </a>


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

        <h3>
        Pertubuhan Amal 2 Jannah
        </h3>

        <p>
        Madrasah Yayasan As-Siddiqin
        </p>


        <a 
        href="https://www.facebook.com/profile.php?id=61592883501717"
        target="_blank"
        rel="noreferrer"
        >
        Facebook Rasmi
        </a>


        <br/><br/>


        <a 
        href="https://wa.me/60174788934"
        target="_blank"
        rel="noreferrer"
        >
        WhatsApp: 017-4788934
        </a>


      </footer>


    </>
  );
}


export default App;