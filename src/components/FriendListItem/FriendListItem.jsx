import s from "./FriendListItem.module.css";

import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(s.friendsContainer)}>
      <img src={avatar} alt={name} width="48" className={clsx(s.friendsImg)} />
      <p className={clsx(s.friendsName)}>{name}</p>
      <p className={clsx(isOnline ? s.online : s.offline, s.friendsStatus)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
