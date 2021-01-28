import { useState, useEffect } from "react";
import HeartSVG from '../assets/svgs/HeartSVG';


const LikeButton = ({ id }) => {

    const storageValue = localStorage.getItem('like' + id) === 'true';

    const [like, setLike] = useState(
        storageValue || false
    );

    useEffect(() => {
        localStorage.setItem('like' + id, like);
    }, [like]);

    return (
        <button className={like ? "like-button heart-like-button" : "like-button"} onClick={() => setLike(!like)}>
            <HeartSVG />
        </button>
    );
};
  
export default LikeButton;