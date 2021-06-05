import React from 'react';
import ImgMediaCard from '../../Cart/cart';
import classes from './Main.module.css';

const Main = (props) => {
    return (
        <div className={classes.main}>
           <ImgMediaCard />
           <ImgMediaCard />
           <ImgMediaCard />
        </div>
    )
}
export default Main;