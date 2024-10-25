import './App.css'
import Navbar from './Navbar'
import BackToTop from './backToTop'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function App() {
    return (
        <div>
            <Navbar />
            <BackToTop />
            <section className='app__hero'>
                <img src="https://assets.epicurious.com/photos/642aebf9a2cf918d8b679f65/4:3/w_5573,h_4179,c_limit/PastaPomodoro_RECIPE_033023_50036.jpg" />
                <div className='app__heroText'>
                    <h1>Homemade<br />Pasta & More</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio perspiciatis ipsum alias enim veniam vero sunt quae tenetur libero? Recusandae possimus suscipit rerum, corrupti facere pariatur nihil tempora unde autem?</p>
                    <div className='app__heroBtn'>
                        <button className='btn1'>How it works</button>
                        <button className='btn2'>Book your table</button>
                    </div>
                </div>
            </section>
            <section className='app__about'>
                <div className='app__parallaxContainer'>
                    <div className='parallax parallax--1'></div>
                    <div className='parallax parallax--2'></div>
                    <div className='parallax parallax--3'></div>
                    <div className='parallax parallax--4'></div>
                    <div className='parallax parallax--5'></div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum illum, iusto sunt minus dolorum, corrupti obcaecati pariatur hic molestiae illo consequuntur cumque, tempora quia! Veniam, laudantium ipsam assumenda dignissimos provident possimus mollitia? Amet minima porro suscipit eos enim quam, expedita te itaque beatae ipsam molestiae enim, expedita sed voluptatem vero minus. Provident, explicabo mollitia. Similique deleniti accusamus autem, reiciendis velit incidunt in odio repellendus dicta enim nostrum! Veniam, nesciunt numquam. Provident!</p>
                    <br></br>
                    <Link>Learn More &#11208;</Link>
                </div>
            </section>
            <div className='box__waves'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#8e7968" fill-opacity="1" d="M0,96L16,85.3C32,75,64,53,96,58.7C128,64,160,96,192,117.3C224,139,256,149,288,149.3C320,149,352,139,384,128C416,117,448,107,480,101.3C512,96,544,96,576,112C608,128,640,160,672,186.7C704,213,736,235,768,208C800,181,832,107,864,96C896,85,928,139,960,138.7C992,139,1024,85,1056,90.7C1088,96,1120,160,1152,192C1184,224,1216,224,1248,213.3C1280,203,1312,181,1344,160C1376,139,1408,117,1424,106.7L1440,96L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
            </div>
            <section className='app__img'>
                <div>
                    <h2>Mon Cooking</h2>
                </div>
                <div className='app__imgItem'>
                    <img src="../public/images/p1.png" />
                    <img src="../public/images/p2.png" />
                    <img src="../public/images/p3.png" />
                    <img src="../public/images/p4.png" />
                    <img src="../public/images/p5.png" />
                    <img src="../public/images/p6.png" />
                </div>
            </section>
            <section className='app__details'>
                <div className='app__detailsContainer'>
                    <h2>Online Service</h2>
                    <div className='app__detailsItem'>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi eligendi? Labore fuga culpa, repellat sunt iusto omnis impedit autem quis deleniti dicta tempore ratione harum consequatur, molestias explicabo nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita exercitationem porro, quisquam blanditiis accusantium distinctio in ad labore aspernatur nisi id dolor, reiciendis sapiente quasi natus! Harum, eveniet itaque.</p>
                        </div>
                        <div>
                            <hr />
                            <details>
                                <summary>Show/Hide</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet metus auctor tempor dign</p>
                            </details>
                            <hr />
                            <details>
                                <summary>Show/Hide</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet metus auctor tempor dign</p>
                            </details>
                            <hr />
                            <details>
                                <summary>Show/Hide</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet metus auctor tempor dign</p>
                            </details>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='app__detailsContainerImg'>
                    <img className='app__detailsImg' src="../public/images/p3.png" />
                </div>
            </section>
            <section className='app__marquee'>
                <div className='blur'></div>
                <div className='app__marqueeContainer'>
                    <h2>Online Service</h2>
                    <marquee>
                        <div className='app__marqueeItem'>
                            <h1>LINE MAN</h1>
                            <h1>GrabFood</h1>
                            <h1>ShopeeFood</h1>
                            <h1>Yindii</h1>
                            <h1>Foodpanda</h1>
                        </div>
                    </marquee>
                </div>
            </section>
            <section className='app__boxIcon'>
                <div className='app__boxIconContainer'>
                    <div className='app__boxIconItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style={{fill: "rgba(94, 80, 68, 1)"}}><path d="m20.772 10.156-1.368-4.105A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.105A2.003 2.003 0 0 0 2 12v5c0 .753.423 1.402 1.039 1.743-.013.066-.039.126-.039.195V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.062c0-.069-.026-.13-.039-.195A1.993 1.993 0 0 0 22 17v-5c0-.829-.508-1.541-1.228-1.844zM4 17v-5h16l.002 5H4zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6z"></path><circle cx="6.5" cy="14.5" r="1.5"></circle><circle cx="17.5" cy="14.5" r="1.5"></circle></svg>
                        <h3>Delivery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus cumque vitae ipsa cum modi id fugit molestias nequm!</p>
                    </div>
                    <div className='app__boxIconItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style={{fill: "rgba(94, 80, 68, 1)"}}><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path><path d="M6 14h6v2H6z"></path></svg>
                        <h3>Payment</h3>
                        <p>Lorem ipsunostrum dolorum! r, adipisicing elit. Temporibus cumque vitae ipsa cum modi id fugit molestias neque vti</p>
                    </div>
                    <div className='app__boxIconItem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style={{fill: "rgba(94, 80, 68, 1)"}}><path d="M16 14h.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5h-13C2.673 2 2 2.673 2 3.5V18l5.333-4H16zm-9.333-2L4 14V4h12v8H6.667z"></path><path d="M20.5 8H20v6.001c0 1.1-.893 1.993-1.99 1.999H8v.5c0 .827.673 1.5 1.5 1.5h7.167L22 22V9.5c0-.827-.673-1.5-1.5-1.5z"></path></svg>
                        <h3>Operation</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus cumqtis nostrum dolorum!</p>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#fff7ea" fill-opacity="1" d="M0,64L20,74.7C40,85,80,107,120,128C160,149,200,171,240,176C280,181,320,171,360,149.3C400,128,440,96,480,90.7C520,85,560,107,600,128C640,149,680,171,720,165.3C760,160,800,128,840,138.7C880,149,920,203,960,208C1000,213,1040,171,1080,170.7C1120,171,1160,213,1200,197.3C1240,181,1280,107,1320,85.3C1360,64,1400,96,1420,112L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            <section className='app__card'>
                <div className='app__cardContainer'>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp1.webp" />
                        <button>Detail</button>
                    </div>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp2.webp" />
                        <button>Detail</button>
                    </div>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp3.webp" />
                        <button>Detail</button>
                    </div>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp4.webp" />
                        <button>Detail</button>
                    </div>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp4.webp" />
                        <button>Detail</button>
                    </div>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp3.webp" />
                        <button>Detail</button>
                    </div>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp2.webp" />
                        <button>Detail</button>
                    </div>
                    <div className='app__cardItem'>
                        <img src="../public/images/wp1.webp" />
                        <button>Detail</button>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fill="#efdfcf" fill-opacity="1" d="M0,160L15,170.7C30,181,60,203,90,229.3C120,256,150,288,180,282.7C210,277,240,235,270,197.3C300,160,330,128,360,144C390,160,420,224,450,229.3C480,235,510,181,540,176C570,171,600,213,630,213.3C660,213,690,171,720,165.3C750,160,780,192,810,202.7C840,213,870,203,900,213.3C930,224,960,256,990,250.7C1020,245,1050,203,1080,197.3C1110,192,1140,224,1170,224C1200,224,1230,192,1260,176C1290,160,1320,160,1350,165.3C1380,171,1410,181,1425,186.7L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
            <Footer />
        </div>
    )
}

export default App
