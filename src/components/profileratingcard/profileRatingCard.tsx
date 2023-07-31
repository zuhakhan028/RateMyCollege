import "./profileRatingCard.css"
interface ProfileRratingCard{
rating:number
}
function ProfileRatingCard(props:ProfileRratingCard){
    return(
        <div className="profile-rating-card">
<div>{`Githam University`}</div><div>{`${props.rating}/5`}</div>
        </div>
    )
}

export default ProfileRatingCard