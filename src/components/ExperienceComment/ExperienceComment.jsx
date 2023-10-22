import './ExperienceComment.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from '../Button/Button';
import NeedLabel from '../NeedLabel/NeedLabel';
import Avatar from '../Avatar/Avatar';
import PostPhoto from '../PostPhoto/PostPhoto';

import { FormatDateFromTimeStamp } from '../../scripts/FormatDateFromTimeStamp';

import SaveIcon from '../../assets/icons/save.svg';
import commentIcon from '../../assets/icons/comment.svg';
import shareIcon from '../../assets/icons/share.svg';


function ExperienceComment({ experience }) {
    return (
        <article className='comment'>
            <div className="comment__header">
                <Avatar photoUrl={experience.userProfilePhoto} />
                <div className="comment__header-text">
                    <div className="comment__name-date">
                        <p className="comment__label">{experience.userName}</p>
                        <p className='comment__sublabel'>{FormatDateFromTimeStamp(experience.timestamp)}</p>
                    </div>
                    <div className='comment__save'>
                        <img src={SaveIcon} alt="save icon" className="comment__save-icon" />
                        <p className='comment__sublabel'>Save</p>
                    </div>
                </div>
            </div>

            {(experience.needsClothing || experience.needsFoodAndWater || experience.needsHousing) &&

                <section className="comment__needs">
                    <p className='comment__needs-label'>Immediate Needs</p>
                    <div className="comment__needs-container">
                        {experience.needsFoodAndWater && <NeedLabel need="Food & Water" />}
                        {experience.needsHousing && <NeedLabel need="Temporary Housing" />}
                        {experience.needsClothing && <NeedLabel need="Clothing & Personal Items" />}
                    </div>
                </section>


            }


            <div className='comment__comment'>
                <p>{experience.comment}</p>
            </div>

            {experience.photos.length > 0 &&
                <div className='comment__photos'>
                    {
                        experience.photos.map(
                            photo => <PostPhoto photoUrl={photo} />
                        )
                    }
                </div>
            }




            <div className="comment__footer">

                <div className="comment__buttons">
                    <Button text="Donate" modifier="--secondary" />
                    <Button text="Message" modifier="--light" />
                </div>

                <div className='comment__bottom-btns'>
                    <div className="comment__comment-btn">
                        <img src={commentIcon} alt="" className="comment__comment-icon" />
                        <p className="comment__sublabel">{`${experience.numComments} Comments`}</p>
                    </div>
                    <div className="comment__share-btn">
                        <img src={shareIcon} alt="" className="comment__share-icon" />
                        <p className="comment__sublabel">Share</p>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default ExperienceComment;