import React from "react";
import style from './Wallpaper.module.css';

const Wallpaper = () => {
    return (
        <div className={style.wallpaper__container}>
            <img src='https://images.wallpaperscraft.ru/image/single/bashnia_zdaniia_korabli_598130_1920x1080.jpg' alt='main__image'></img>
        </div> 
    )
};

export default Wallpaper;