import React from 'react'
import style from './SingleNewsPage.module.css'
import { MdDateRange } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";


function SingleNewsPage() {
    return (
        <React.Fragment>
            <div className={style.single__news__container}>
                <div className={style.news__ttl}>
                    <h2>
                        Blood donation is a noble cause
                    </h2>
                </div>
                <div className={style.news__meta}>
                    <div className={style.news__author}>
                        <FaRegUserCircle />
                        <span>Admin</span>
                    </div>
                    <div className={style.news__date}>
                        <MdDateRange />

                        <span>12-12-2021</span>
                    </div>
                </div>

                <div className={style.news__image}>
                    <img src="https://facts.net/wp-content/uploads/2023/09/12-fascinating-facts-about-floppa-1695888446.jpg" alt="news" />
                </div>

                <div className={style.news__content}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure recusandae voluptate quasi delectus earum et quae, laudantium rem quisquam facilis. Neque ad repellendus, quas ab iusto expedita quibusdam maxime a maiores aliquam laudantium consequatur molestias esse corrupti quaerat suscipit eos cum provident perspiciatis voluptatum! Accusantium voluptatum debitis saepe a veritatis repellendus aspernatur. Cumque eaque quis vel maiores reprehenderit quia reiciendis iusto quidem voluptate autem, velit aperiam exercitationem necessitatibus nam impedit ut expedita veniam natus atque dolorum. Molestiae, odio vel! Sequi dolores itaque dolorum voluptatem iure voluptates eveniet sapiente aliquid numquam nihil doloribus aspernatur, repudiandae eaque consectetur et maiores, corrupti, debitis earum unde inventore. Sequi enim fugit, nostrum tempore aliquam esse repellendus animi quam nesciunt unde iusto, similique reiciendis. Eligendi iure modi ducimus sint minima! Perspiciatis quas expedita ex facere quis esse minima quos obcaecati nemo aut officia in, dolores, facilis, tempora vitae est ratione aperiam. Neque incidunt autem magni esse aperiam ut maiores, quibusdam sint dignissimos deserunt facilis, iusto nisi distinctio doloremque perspiciatis tempora temporibus. Placeat voluptatum soluta quo velit ex eos harum dolorem at, unde quas ducimus ipsum eaque quod voluptates quasi doloribus similique maxime facere asperiores odio explicabo excepturi? Eaque nam laboriosam nulla. Corrupti mollitia nobis minus?
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SingleNewsPage