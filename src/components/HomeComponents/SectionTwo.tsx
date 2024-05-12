import React from 'react'
import style from './SectionTwo.module.css'
function SectionTwo() {
    return (
        <React.Fragment>
            <div className={style.sectiontwo__container}>
                <div className={style.main__container}>
                    <div className={style.top__text}>
                        <h2>
                            We are helping people from all 10 years
                        </h2>
                    </div>
                    <div className={style.desc__text}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, sint. Obcaecati fugit in porro ipsam laborum dolore, beatae ab explicabo officia, itaque similique aliquid dolorum sunt inventore aperiam. Asperiores, laborum!</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionTwo