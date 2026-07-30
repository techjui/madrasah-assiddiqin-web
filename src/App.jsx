import "./App.css";

import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";

import lakaran1 from "./assets/lakaran1.jpg";
import lakaran2 from "./assets/lakaran2.jpg";
import lakaran3 from "./assets/lakaran3.jpg";

import lama1 from "./assets/lama1.jpg";
import lama2 from "./assets/lama2.jpg";
import lama3 from "./assets/lama3.jpg";

import bersih1 from "./assets/bersih1.jpg";
import bersih2 from "./assets/bersih2.jpg";
import bersih3 from "./assets/bersih3.jpg";


function App() {

return (

<div>


<header>

<img src={logo} className="logo"/>

<nav>
<a href="#utama">Utama</a>
<a href="#tentang">Tentang</a>
<a href="#asrama">Asrama</a>
<a href="#galeri">Galeri</a>
<a href="#sumbangan">Sumbangan</a>
</nav>

</header>



<section 
className="hero"
style={{
backgroundImage:
`linear-gradient(rgba(0,50,40,.65),rgba(0,50,40,.65)),url(${hero})`
}}
>

<div>

<h1>
Pertubuhan Amal 2 Jannah
</h1>

<h2>
Madrasah Yayasan As-Siddiqin
</h2>


<p>
Bersama membantu menyediakan kemudahan
asrama yang lebih baik untuk para pelajar madrasah.
</p>


<a href="https://app.herepay.org/amal2jannah/asramachiangrai">
<button>
Sumbang Sekarang
</button>
</a>


</div>

</section>




<section id="tentang" className="section">

<h2>Tentang Kami</h2>

<p>
Pertubuhan Amal 2 Jannah (Madrasah Yayasan As-Siddiqin)
merupakan sebuah organisasi yang menguruskan aktiviti
madrasah serta pembangunan kemudahan asrama.
</p>

</section>






<section id="asrama" className="donate">


<h2>
Kempen Sumbangan Asrama
</h2>


<p>
Bantuan anda amat bermakna dalam usaha menyediakan
kemudahan asrama yang lebih selesa dan kondusif.
</p>


<div className="bank">

<h3>
Maklumat Sumbangan
</h3>

<p>
Maybank
</p>

<strong>
555050119823
</strong>

<p>
Pertubuhan Amal 2 Jannah
</p>


</div>


<a href="https://app.herepay.org/amal2jannah/asramachiangrai">

<button>
Bayar Melalui HerePay
</button>

</a>



<br/>


<a href="https://wa.me/60174788934">

<button className="whatsapp">
WhatsApp Kami
</button>

</a>


</section>







<section id="galeri" className="section">


<h2>
Galeri Aktiviti
</h2>



<h3>
Album Lakaran Asrama
</h3>


<div className="gallery">

<img src={lakaran1}/>
<img src={lakaran2}/>
<img src={lakaran3}/>

</div>





<h3>
Album Asrama Lama
</h3>


<div className="gallery">

<img src={lama1}/>
<img src={lama2}/>
<img src={lama3}/>

</div>






<h3>
Album Pembersihan Asrama
</h3>


<div className="gallery">

<img src={bersih1}/>
<img src={bersih2}/>
<img src={bersih3}/>

</div>


</section>






<section className="video">


<h2>
Galeri Video
</h2>


<iframe
src="https://www.youtube.com/embed/"
title="Video Madrasah"
allowFullScreen>
</iframe>


</section>






<footer>

<img src={logo}/>

<h3>
Pertubuhan Amal 2 Jannah
</h3>

<p>
Madrasah Yayasan As-Siddiqin
</p>


<p>
WhatsApp:
017-4788934
</p>


<p>
© 2026 Semua Hak Terpelihara
</p>


</footer>


</div>

);

}


export default App;