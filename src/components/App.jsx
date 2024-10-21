import './App.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function App() {

    
    return (
        <div>
            <Navbar />
            <section className='app__hero'>
                <img src="../public/images/p1.png" />
            </section>
            <section className='app__about'>
                <div className='parallax'>
                    {/* <div className='parallax__text'>
                        Hello
                    </div> */}
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum illum, iusto sunt minus dolorum, corrupti obcaecati pariatur hic molestiae illo consequuntur cumque, tempora quia! Veniam, laudantium ipsam assumenda dignissimos provident possimus mollitia? Amet minima porro suscipit eos enim quam, expedita te itaque beatae ipsam molestiae enim, expedita sed voluptatem vero minus. Provident, explicabo mollitia. Similique deleniti accusamus autem, reiciendis velit incidunt in odio repellendus dicta enim nostrum! Veniam, nesciunt numquam. Provident!</p>
                    <br></br>
                    <Link>Learn More &#11208;</Link>
                </div>
            </section>
            <section className='app__img'>
                <div>
                    <h2>Baimon Kitchen</h2>
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
                    <marquee behavior="" direction="">
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
        </div>
    )
}

export default App
