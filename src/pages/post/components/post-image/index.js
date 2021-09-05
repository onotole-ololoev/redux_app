import React from "react";
import postImg from "../../../../images/post-img.jpg";





const PostImage = () => {

    return (
        <div>
            <img src={postImg} alt='pic' className='post-item__image'/>
        </div>
    )
};

export default PostImage;