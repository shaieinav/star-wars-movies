import { useState, useEffect } from "react";
import HeartSVG from '../assets/svgs/HeartSVG';
import '../styles/LikeButton.css';


const LikeButton = ({ id }) => {

    const storageValue = localStorage.getItem('like' + id) === 'true';

    const [like, setLike] = useState(
        storageValue || false
    );

    useEffect(() => {
        localStorage.setItem('like' + id, like);
    }, [like]);

    function onLikeButtonClick(e) {
        e.stopPropagation();
        setLike(!like);
    }

    return (
        <span className={like ? "like-button heart-like-button" : "like-button opacity"} onClick={onLikeButtonClick}>
            <HeartSVG />
        </span>
    );
};
  
export default LikeButton;