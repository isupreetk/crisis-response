import './ShareStoryModal.scss';
import Button from '../Button/Button';
import uploadIcon from '../../assets/icons/upload.svg';
import Avatar from '../Avatar/Avatar';
import { useState } from 'react';



function ShareStoryModal({ show, closeHandler }) {
    const [storyText, setStoryText] = useState('');

    if (!show) return null;
    return (
        <div className="modal">
            <div className="modal__content">

                <div className="modal__header">
                    <Avatar photoUrl="/images/profile/CurrentUser.jpg" />
                    <h4>Charles Mateus</h4>
                    <p className="modal__close" onClick={closeHandler}>Cancel</p>
                </div>

                <form className="story-form">
                    <p className='story-form__attention'>* Mandatory Fields</p>
                    <div className='story-form__form-section'>
                        <label
                            // for='story-field'
                            className='story-form__label'>
                            <span
                                className='story-form__label story-form__label--mandatory'>
                                {`* `}
                            </span>
                            Share Your Story
                        </label>
                        <textarea
                            className='story-form__story-field'
                            placeholder="Share your personal experience here..."
                            value={storyText}
                            onChange={(e) => {
                                console.log(e)
                                setStoryText(e.target.value)
                            }}
                        >

                        </textarea>
                    </div>
                    <div className="story-form__form-section">
                        <label className='story-form__label'>
                            Upload Images
                        </label>
                        <div className='story-form__upload-photo'>
                            <img src={uploadIcon}
                                className="story-form__icon"
                                alt="upload click" />
                        </div>
                    </div>

                    <div className="story-form__form-section">
                        <label className='story-form__label'>Select your immediate needs</label>

                        <div className="story-form__checkboxes">
                            <div className='story-form__checkbox-field'>
                                <input
                                    type="checkbox"
                                    id='food-checkbox'
                                ></input>
                                <label
                                    htmlfor="food-checkbox" className='story-form__checkbox-label'>Food & Water
                                </label>
                            </div>

                            <div className='story-form__checkbox-field'>
                                <input
                                    type="checkbox"
                                    id='housing-checkbox'
                                ></input>
                                <label
                                    htmlfor="housing-checkbox" className='story-form__checkbox-label'>Temporary Housing
                                </label>
                            </div>
                            <div className='story-form__checkbox-field'>
                                <input
                                    type="checkbox"
                                    id='clothing-checkbox'
                                ></input>
                                <label
                                    htmlfor="clothing-checkbox" className='story-form__checkbox-label'>Clothing & Personal Items
                                </label>
                            </div>
                        </div>

                    </div>
                    <Button text="Share your story" disabled={storyText.trim() === ''} />

                </form>





            </div >
        </div >
    )
}

export default ShareStoryModal;