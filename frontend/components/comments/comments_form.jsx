import React from 'react';
import { formatDate } from '../../util/date_util';

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      body: e.target.value
    })
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const newComment = {
      image_id: this.props.image.id,
      user_id: this.props.currentUser.id,
      body: this.state.body,
    }

    this.setState({
      body: ""
    })
    this.props.createComment(newComment)
  }

  makeComment() {
    return (
      <div className="comments-add-container">
        {
          this.props.currentUser.profilepic ? (
            <img src={this.props.currentUser.profilepic}/>
          ) : (
            <img src={window.userIcon}/>
          )
        }
        <div>
          <input 
            type="text" 
            value={this.state.body} 
            placeholder="Add a comment"
            onChange={this.update}
          />
        </div>
        <button onClick={this.handleCommentSubmit}>Post</button>
      </div>
    )
  }

  render() {
    const currentImageComments = this.props.comments.filter((comment) => comment.imageId === this.props.image.id).reverse();
    // debugger

    return (
      <div>
        {this.makeComment()}
        <div className="comments-show-container">
          <div className="comments-show-amount">
            <p>{currentImageComments.length}</p>
            <p>{currentImageComments.length > 1 || currentImageComments.length === 0 ? (
              'comments'
            ): (
              'comment'
            )}</p>
          </div>
          <div className="comments-show-comments">
              { currentImageComments.length ? (
                <div>
                  {
                    currentImageComments.map((comment, i) => 
                    <div key={i}>
                      {
                        this.props.users[comment.userId].profilepic ? (
                          <img src={this.props.users[comment.userId].profilepic}/>
                          ) : (
                          <img src={window.userIcon}/>
                        )
                      }
                      <p>{comment.user.fullname}</p>
                      <p>{formatDate(comment.createdAt)}</p>
                      <p>{comment.body}</p>
                    </div>
                  )
                  }
                </div>
              ) : (
                <div>
                  <div>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007"/></svg>
                  </div>
                  <div>No comments yet</div>
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentsForm;