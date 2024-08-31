import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profileDiv}>
        <img src={image} alt={name} width={100} className={s.profileImage} />
        <p className={s.profileName}>Petra Marica</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.profileList}>
        <li className={s.profileItem}>
          <span className={s.profileListTitle}>Followers</span>
          <span className={s.profileCount}>{stats.followers}</span>
        </li>

        <li className={s.profileItem}>
          <span className={s.profileListTitle}>Views</span>
          <span className={s.profileCount}>{stats.views}</span>
        </li>

        <li className={s.profileItem}>
          <span className={s.profileListTitle}>Likes</span>
          <span className={s.profileCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
