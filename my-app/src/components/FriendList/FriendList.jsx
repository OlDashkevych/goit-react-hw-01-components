import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <span
          className={clsx(styles.status, isOnline && styles.isActive)}
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="user avatar"
          width="80"
        />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};
export default FriendList;
