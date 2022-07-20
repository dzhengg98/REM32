import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchImages, fetchImage } from '../../actions/image_actions';
import { fetchUsers, updateUserProfilePic } from '../../actions/user_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
    images: Object.values(state.entities.images),
    users: state.entities.users,
    likes: Object.values(state.entities.likes),
    followers: Object.values(state.entities.follows),
    userFollowings: Object.values(state.entities.follows).filter(follow => follow.followerId === state.entities.users[ownProps.match.params.userId].id),
    userFollowers: Object.values(state.entities.follows).filter(follow => follow.followeeId === state.entities.users[ownProps.match.params.userId].id),
  }
};

const mDTP = dispatch => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    fetchImage: (imageId) => dispatch(fetchImage(imageId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    updateUserProfilePic: (image, userId) => dispatch(updateUserProfilePic(image, userId))
  }
};

export default connect(mSTP, mDTP)(UserShow);

// Object.values(state.entities.follows).filter(follow => follow.followerId === state.entities.users[ownProps.match.params.userId].id)
// shows who the profile user is following

// Object.values(state.entities.follows).filter(follow => follow.followeeId === state.entities.users[ownProps.match.params.userId].id)
// shows who is following the current profile user