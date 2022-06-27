import React from 'react';
import ErrorPage from '../404/404_page';
import UserShowImageItem from './user_show_image_item';

class userShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    debugger
    const images = this.props.images.filter((image) => image.uploaderId === Number(this.props.match.params.userId))

    return (
      <div>
        <div className="block-space"></div>
        <p>This is the user show page</p>
        <div>
          {
            images.map((image) => <UserShowImageItem key={image.id} image={image} />)
          }
        </div>
      </div>
    )
  }
}

export default userShow;