import React from 'react';
import FollowingContainer from '../followers/following_container';
import FolloweesContainer from '../followers/followees_container';

const Modal = (props) => {
  if (!props.modal) {
    return null;
  }

  let component;
  switch (props.modal) {
    case 'followees':
      component = <FolloweesContainer
                    fetchUsers={props.fetchUsers}
                    user={props.user}
                    currentUser={props.currentUser}
                    fetchFollows={props.fetchFollows}
                    createFollow={props.createFollow}
                    deleteFollow={props.deleteFollow}
                    followers={props.followers}
                    userFollowings={props.userFollowings}
                    userFollowers={props.userFollowers}
                    users={props.users}
                  />
      break;
    case 'following':
      component = <FollowingContainer
                    fetchUsers={props.fetchUsers}
                    user={props.user}
                    currentUser={props.currentUser}
                    fetchFollows={props.fetchFollows}
                    createFollow={props.createFollow}
                    deleteFollow={props.deleteFollow}
                    followers={props.followers}
                    userFollowings={props.userFollowings}
                    userFollowers={props.userFollowers}
                    users={props.users}
                  />
      break;
    default:
      return null;
  };

  return (
    <div onClick={props.closeModal}>
      <div onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

export default Modal;