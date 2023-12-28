import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageURL, name, role} = userDetails
  return (
    <li className="user-card-container">
      <img src={imageURL} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation ">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
