import "./App.css";

function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header>
        <div className="logo">
          Pertubuhan Amal 2 Jannah
        </div>

        <nav>
          <a href="#utama">Utama</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#aktiviti">Aktiviti</a>
          <a href="#sumbangan">Sumbangan</a>
          <a href="#hubungi">Hubungi</a>
        </nav>
      </header>


      {/* HERO */}
      <section id="utama" className="hero">

        <div className="hero-content">
          <h1>
            Membina Generasi Berilmu,
            <br />
            Berakhlak & Prihatin
          </h1>

          <p>
            Pertubuhan Amal 2 Jannah komited dalam usaha
            pendidikan, kebajikan dan pembangunan masyarakat
            melalui pendekatan Islam yang rahmah.
          </p>

          <button>
            Ketahui Lebih Lanjut
          </button>

        </div>

      </section>


      {/* TENTANG */}
      <section id="tentang" className="section">

        <h2>Tentang Kami</h2>

        <p>
          Pertubuhan Amal 2 Jannah merupakan sebuah organisasi
          yang memberi fokus kepada pembangunan insan,
          pendidikan Islam dan aktiviti kebajikan masyarakat.
        </p>

      </section>



      {/* AKTIVITI */}
      <section id="aktiviti" className="section light">

        <h2>Aktiviti Kami</h2>

        <div className="cards">

          <div className="card">
            <h3>Pendidikan</h3>
            <p>
              Program ilmu, pembelajaran agama dan pembangunan
              sahsiah masyarakat.
            </p>
          </div>


          <div className="card">
            <h3>Kebajikan</h3>
            <p>
              Bantuan kepada golongan memerlukan melalui
              program kemasyarakatan.
            </p>
          </div>


          <div className="card">
            <h3>Dakwah</h3>
            <p>
              Menyebarkan nilai Islam yang membawa rahmat
              kepada seluruh masyarakat.
            </p>
          </div>

        </div>

      </section>



      {/* SUMBANGAN */}
      <section id="sumbangan" className="section">

        <h2>Sumbangan</h2>

        <p>
          Sokongan anda membantu kami meneruskan usaha
          pendidikan dan kebajikan masyarakat.
        </p>

        <button>
          Hulurkan Sumbangan
        </button>

      </section>



      {/* FOOTER */}
      <footer id="hubungi">

        <h3>Pertubuhan Amal 2 Jannah</h3>

        <p>
          Email: info@amal2jannah.org
        </p>

        <p>
          © 2026 Pertubuhan Amal 2 Jannah
        </p>

      </footer>


    </div>
  );
}

export default App;