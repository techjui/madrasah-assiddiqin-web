import "./../App.css";

import lakaran1 from "../assets/lakaran1.jpg";
import lakaran2 from "../assets/lakaran2.jpg";
import lakaran3 from "../assets/lakaran3.jpg";

import lama1 from "../assets/lama1.jpg";
import lama2 from "../assets/lama2.jpg";
import lama3 from "../assets/lama3.jpg";


function Gallery(){

return (

<div>

<section className="purple-section">

<h1>Galeri Aktiviti</h1>

<p>
Madrasah Yayasan As-Siddiqin
</p>

</section>


<section className="section">

<h2>Lakaran Asrama</h2>

<div className="gallery">

<img src={lakaran1}/>
<img src={lakaran2}/>
<img src={lakaran3}/>

</div>


<h2>Asrama Lama</h2>

<div className="gallery">

<img src={lama1}/>
<img src={lama2}/>
<img src={lama3}/>

</div>


<h2>Pembersihan Asrama</h2>

<p>
Aktiviti pembersihan dan persediaan asrama.
</p>


</section>


<section className="section">

<h2>Galeri Video</h2>

<iframe
width="800"
height="450"
src="https://www.youtube.com/embed/"
title="Video Madrasah"
allowFullScreen>
</iframe>

</section>


</div>

)

}


export default Gallery;