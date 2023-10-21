import './Avatar.scss';

function Avatar({ photoUrl }) {
    return (
        <div className='avatar'>
            <img className="avatar__img" src={photoUrl} alt="user profile" />
        </div>
    )
}

export default Avatar;