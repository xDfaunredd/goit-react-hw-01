import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
