import React from "react";
import './postItem.css';


const PostItem = () => {

    return (
        <div className='postItem-box'>
            <div className='postItem-text'>
                <h2>Семейные ценности и их значение для семьи, для общества в целом</h2>
                <p>Семейные ценности – это обычаи и традиции, которые передаются из поколения в поколение. Это – чувства, благодаря которым семья становится крепкой. Это – всё то, что люди переживают вместе внутри дома – радость и горе, благополучие или проблемы и трудности...</p>
                <div><span>дата / автор</span></div>
            </div>
            <div className='postItem-img'></div>
        </div>
    )
}


export default PostItem;