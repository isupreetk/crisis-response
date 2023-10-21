import './PostPhoto.scss'

function PostPhoto({ photoUrl }) {
    return (
        <div className='post-photo'>
            {photoUrl
                && <
                    img src={photoUrl}
                    className="post-photo__img"
                    alt="photo of disaster"
                />
            }
        </div>
    )
};

export default PostPhoto;