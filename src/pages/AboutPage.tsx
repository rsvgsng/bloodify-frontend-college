import React from 'react'
import style from './AboutPage.module.css'
function AboutPage() {
    return (
        <React.Fragment>
            <section className={style.about__section}>
                <div className={style.head__abt}>
                    <h2>Introduction</h2>
                </div>
                <div className={style.about__content}>
                    <p>
                        Welcome to Bloodify, where compassion meets innovation in the world of blood donation and distribution. Established in 2022, Bloodify has quickly become a beacon of hope for those in need of life-saving blood transfusions. Our mission is simple yet profound: to bridge the gap between donors and recipients, ensuring that every drop of blood counts. With a focus on efficiency, transparency, and community engagement, Bloodify is revolutionizing the way blood banks operate, paving the way for a healthier, more compassionate future. Join us as we embark on this journey to save lives and make a difference in the world.
                    </p>


                </div>

                <div className={style.head__abt}>
                    <h2>Our Journey</h2>
                </div>
                <div className={style.about__content}>
                    <p>
                        The year was 2022, a pivotal moment in the history of healthcare. It was in this year that Bloodify emerged, a beacon of hope in the realm of blood donation and distribution. Our journey began with a simple yet profound mission: to harness the power of technology to address the pressing challenges facing blood banks and healthcare systems worldwide.

                    </p>
                    <p>
                        In the early days, we faced skepticism and doubt. Traditional methods of blood donation and distribution were deeply ingrained, and many questioned whether a digital solution could truly make a difference. But we remained undeterred, fueled by a passion to make a meaningful impact on the lives of those in need.

                    </p>
                    <p>
                        Our first breakthrough came with the launch of our digital donor registration system. By providing a seamless and user-friendly platform for donors to sign up and provide essential information, we eliminated the barriers that had long hindered blood donation efforts. Suddenly, donating blood was no longer a cumbersome process but a simple and convenient act of compassion.

                    </p>


                </div>

            </section>
        </React.Fragment>
    )
}

export default AboutPage