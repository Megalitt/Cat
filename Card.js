import styles from "./Card.module.css";
import { ReactComponent as Svg } from '..//components/image/Pattern.svg';
import Package from "./Package";
import data from "./data";
import { useEffect, useState } from "react";




const Card = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts(data);
    }, []);
    return (
        <div className={styles.card}>
            <Svg className={styles.svg}/>
            <h2 className={styles.h22}>Ты сегодня покормил кота?</h2>
            <div className={styles.wraps}>
                {products.map((product) => <Package product={product} key={product.id}/>)}
            </div>
        </div>
    )
};
 export default Card;