import React from 'react'
import style from './SectionThree.module.css'
function SectionThree() {
    return (
        <React.Fragment>
            <div className={style.donation__process__section}>
                <div className={style.dp__container}>
                    <h2>Donation Process</h2>

                    <div className={style.dp__dp}>

                        <div className={style.dp__item}>
                            <h2>Step {1}</h2>
                            <h1>Registration</h1>
                            <p>Sign up for free and create your account</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, necessitatibus?</p>
                        </div>
                        <div className={style.dp__item}>
                            <h2>Step {2}</h2>
                            <h1>Login</h1>
                            <p>Sign up for free and create your account</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, necessitatibus?</p>
                        </div>
                        <div className={style.dp__item}>
                            <h2>Step {3}</h2>
                            <h1>Requesting</h1>
                            <p>Sign up for free and create your account</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, necessitatibus?</p>
                        </div>
                        <div className={style.dp__item}>
                            <h2>Step {4}</h2>
                            <h1>Donating</h1>
                            <p>Sign up for free and create your account</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, necessitatibus?</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionThree