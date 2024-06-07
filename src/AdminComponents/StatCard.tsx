import React from 'react'
import style from './StatCard.module.css'

export interface StatCardProps {
    statName: string;
    statValue: number;
    StatIcon: any;
}

function StatCard({ statName, statValue, StatIcon }: StatCardProps) {
    return (
        <React.Fragment>
            <div className={style.stat__card}>

                <div className={style.left__item}>
                    <div className={style.stat__icon}>
                        {StatIcon}
                    </div>
                </div>

                <div className={style.right__item}>
                    <div className={style.stat__name}>
                        <h3>
                            {statName}

                        </h3>
                    </div>
                    <div className={style.stat__value}>
                        <h3>
                            {statValue}

                        </h3>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default StatCard