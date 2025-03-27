import React from 'react';
import style from "../styles/card.module.css"

function Card({ icon, title, liveData }) {
    return (
        <div className={style.card}>
            <div className={style.icon}>{icon}</div>
            <div className={style.content}>
                <p className={style.title}>{title}</p>
                <h2 className={style.data}>{liveData}</h2>
            </div>
        </div>
    )
}

export default Card