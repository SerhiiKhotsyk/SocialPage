import React from "react";
import preloader from '../../../assets/images/preloader.svg'
import style from './Preloader.module.css'

const Preloader = () => {
    return <div className={style.preloader}>
        <img src={preloader} alt="downloading" />
    </div>
}

export default Preloader;