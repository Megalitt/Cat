import React, { useState } from "react";
import styles from "./Package.module.css";
import { ReactComponent as Pack } from '..//components/image/Pack.svg';
import Img from"../components/image/Object.png";
import { ReactComponent as BorderPink } from '..//components/image/BorderPink.svg';
import classnames from 'classnames';




const Package = ({product}) => {
    const {title, description, weight,bull, comment, isAvailable, classen, classenBack} = product;
    const [select, setSelect] = useState(false);
    const [mous, setMous] = useState(false);
    console.log(select);
    const innerClass = classnames(styles[classen],{
        [styles.borBlue]: mous,
    });
    const handlerMousOut = () => {
        if (select && !mous) {
            setMous((state) => !state);
        }
        
    };
    
    const handlerClick = ()=>{
            if (isAvailable) {
                setSelect((state) => !state);
            }
            if(mous){
                setMous((state) => !state);
            }
    };
    return(
        <div className={styles.pack}>
            <div className={styles.blok} onMouseOut={handlerMousOut} onClick={handlerClick}>
                <Pack className={styles.packe}/>
                <img src={Img} className={styles.img}/>
                <div style={classenBack} className={styles.circle} >
                    <p className={styles.mass}>{weight}</p>
                    <p className={styles.mas}>кг</p>
                </div>
                <div className={styles.border}></div>
                <div className={styles.text}>
                    <h5 className={styles.h5}>Сказочное заморское яство</h5>
                    <h1 className={styles.h1}>Нямушка</h1>
                    <h3 className={styles.h3}>{title}</h3>
                    <div className={styles.packText}>{description.map((str) => <p key={str}>{str}</p>)}</div>
                </div>
                <div className={innerClass}></div>  
            </div>
            <div className={styles.txt}>
                <p className={styles.p}>
                    {isAvailable && bull 
                    && (
                    <span>Чего сидишь? Порадуй котэ,
                    <span className={styles.span} onMouseOut={handlerMousOut} onClick={handlerClick}> купи.</span></span>
                    )}
                    {isAvailable && !bull
                        && <span>{comment}</span>}
                    {!isAvailable
                    && (
                    <span style={{color: "#FFFF66"}}>
                        Печалька,
                        {' '}
                        {title}
                        {' '}
                        закончился.
                    </span>
                    )}
                </p>
            </div>    
        </div>
    )
};
export default Package;