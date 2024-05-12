import React from 'react'
import styles from './HeroSection.module.css'
import mohan from '../../Assets/mohansir.png'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    let navigate = useNavigate()
    return (
        <React.Fragment>
            <section className={styles.main__section}>

                <div className={styles.hero__section}>
                    <div className={styles.left__item}>
                        <div className={styles.big__hero__text}>
                            <h2>
                                Donate Blood,
                                <br />
                                Save Live !
                            </h2>
                        </div>
                        <div className={styles.decs__hero__}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam temporibus minima, id ratione dolores recusandae amet asperiores fugiat facilis tenetur. Molestiae ullam molestias voluptate repellat facilis dolorem inventore ex?</p>
                        </div>
                        <div className={styles.donate__now__btn}>
                            <button
                                onClick={() => navigate('/Signup')}
                            >Join now
                                <FaArrowAltCircleRight />
                            </button>

                        </div>
                    </div>
                    <div className={styles.right__item}>
                        <div className={styles.image__hero}>
                            <img src={mohan} />
                        </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default HeroSection