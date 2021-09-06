import React from "react";
import './postItem.css';
import postImg from '../../images/post-img.jpg'
import {Link} from "react-router-dom";

const PostItem = () => {

    return (
        <Link to='/post' className='link-box'>
            <div className='post-item'>
                <div className='post-item__content'>
                    <h2 className='post-item__title'>Семейные ценности и их значение для семьи, для общества в целом</h2>
                    <p className='post-item__description'>Семейные ценности – это обычаи и традиции, которые передаются из поколения в поколение. Это – чувства, благодаря которым семья становится крепкой. Это – всё то, что люди переживают вместе внутри дома – радость и горе, благополучие или проблемы и трудности...</p>
                    <div><span className='post-item__date'>дата</span><span className='post-item__author'>автор</span></div>
                </div>
                <div>
                    <img src={postImg} alt='pic' className='post-item__image'/>
                </div>
            </div>
        </Link>
    )
}


export default PostItem;