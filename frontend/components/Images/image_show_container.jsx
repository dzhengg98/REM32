import {connect} from 'react-redux';
import ImageShow from './image_show';
import { fetchImage } from '../../actions/image_actions';

const mSTP = (state, ownProps) => {
  //debugger
  return {
    image: state.entities.images[ownProps.match.params.imageId],
    currentUserId: state.session.id
  }
  // debugger
}

const mDTP = (dispatch, ownProps) => ({
  fetchImage: () => dispatch(fetchImage(ownProps.match.params.imageId))
})

export default connect(mSTP, mDTP)(ImageShow);