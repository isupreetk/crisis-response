import './ExperienceComment.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from '../Button/Button';
import NeedLabel from '../NeedLabel/NeedLabel';


function ExperienceComment({ experience }) {
    return (
        <article className='comment'>
            <div className="comment__header">
                <img src="" alt="profile photo" className='comment__user-avatar' />
                <div className="comment__name-date">
                    <p className="comment__name">{experience.name}</p>
                    <p className='comment__date'>{experience.date}</p>
                </div>
                <div className='comment__save'>
                    <img src="" alt="save icon" className="comment__save-icon" />
                </div>
            </div>

            <div className="comment__needs">
                {experience.needsFoodAndWater && <NeedLabel need="Food & Water" />}
                {experience.needsHousing && <NeedLabel need="Temporary Housing" />}
                {experience.needsClothing && <NeedLabel need="Clothing & Personal Items" />}
            </div>

            <p>{experience.comment}</p>

            <div className='comment__photos'></div>

            <div className="comment__buttons">
                <Button text="Donate" modifier="--secondary" />
                <Button text="Message" modifier="--light" />
            </div>

            <div className="comment__footer">
                <div className="comment__comment-btn">
                    {`${experience.numComments} Comments`}
                </div>
                <div className="comment__share-btn">
                    Share
                </div>
            </div>
        </article>
    )
}

export default ExperienceComment;