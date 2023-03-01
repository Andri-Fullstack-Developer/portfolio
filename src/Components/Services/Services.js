import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desain</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Drak Mode</span> ~ offers two admin themes with Light and Dark mode.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Elemen 3D</span> ~ has the ability in the designer, namely making 3D elements.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Floating</span> ~ floating positions, not yet closed, closed or executed.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Optimalisasi Multimedia</span> ~ expertise connecting the application to youtube.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>VUI</span> ~` Voice User Interface ` interaction technology in applications via voice.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Fonta</span> ~` Font ` has expertise in the field of design, namely the use of fonts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Visualisasi Data</span> ~ expertise in the world of user interface and user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Integrasi Media Sosial</span> ~ expertise on the platform i.e. sharing features.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Asimetris</span> ~ expertise in removing the layout is not symmetrical between grids.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Minimalis</span> ~ Designing a minimalist design is quite complicated and neat.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Unique and interesting facts</span> ~ interesting storyteller.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Horror</span> ~ creation of horror-themed content and mystical stories.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Animal content</span> ~ create video content with pets that act funny.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Life Hacks</span> ~ creating life hacks content, namely taking good pictures.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Fan Accounts</span> ~ Create content and upload content on social media.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Mini drama</span> ~ make a short play and show it on the big screen.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Parody</span> ~ create funny imitation content from other works.</p>
            </li>
          </ul>
        </article>
        {/* END OF conten */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Devoloper</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Website making</span> ~ Cheap and quality website creation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Application Development</span> ~ mobile application development services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Software Creation</span> ~ professionals with programming language skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Mobile Application Development</span> ~ high programming language skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>IOS Application Development</span> ~ high programming language skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Android Application Development</span> ~ high programming language skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> <span>Cloud App Development Services</span> ~ cloud application development.</p>
            </li>
          </ul>
        </article>
        {/* END OF devoloper*/}
      </div>
    </section>
  )
}
