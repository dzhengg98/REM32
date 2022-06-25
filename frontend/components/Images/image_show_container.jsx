import {connect} from 'react-redux';
import ImageShow from './image_show';
import { fetchImage } from '../../actions/image_actions';

const mSTP = (state, ownProps) => ({
  image: state.entities.images[ownProps.match.params.imageId]
})

const mDTP = (dispatch, ownProps) => ({
  fetchImage: () => dispatch(fetchImage(ownProps.match.params.imageId))
})

export default connect(mSTP, mDTP)(ImageShow);