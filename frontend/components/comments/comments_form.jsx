import React from 'react';
import { formatDate } from '../../util/date_util';
import { Link } from 'react-router-dom';

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
            <div className="comments-profile-picture-container">
              <div className="comments-profile-picture-inner-container">
                <Link className="comments-profile-link" to={`/users/${this.props.currentUser.id}`}>
                  <img className="comment-profile-image" src={this.props.currentUser.profilepic}/>
                </Link>
              </div>
            </div>
          ) : (
            <div className="comments-profile-picture-container">
              <div className="comments-profile-picture-inner-container">
                <Link className="comments-profile-link" to={`/users/${this.props.currentUser.id}`}>
                  <img className="comment-profile-image" src={window.userIcon}/>
                </Link>
              </div>
            </div>
          )
        }
        <div className="comments-input-container">
          <div className="comments-inner-input-container">
            <label id="create-comment-label"></label>
            <textarea
              htmlFor="create-comment-label"
              className="comments-input-area"
              value={this.state.body} 
              placeholder="Add a comment"
              onChange={this.update}
            />
            <div className="submit-button-container">
              <button className="submit-comments-button" onClick={this.handleCommentSubmit}>
                <span>Post</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const currentImageComments = this.props.comments.filter((comment) => comment.imageId === this.props.image.id && comment.parentId === null).reverse();
    // const currentImageReplies = this.props.comments.filter((comment) => comment.imageId === this.props.image.id && comment.parentId)
    
    // console.log(... currentImageReplies);
    // const obj = Object.assign({}, currentImageReplies)
    // console.log(obj)
    debugger

    return (
      <div className="comments-main-container">
        <div className="image-comments-container">
          {this.makeComment()}
          <div className="comments-show-container">
            <p className="comments-show-amount">{currentImageComments.length}{" "}
            {currentImageComments.length > 1 || currentImageComments.length === 0 ? (
              <span>comments</span>
            ): (
              <span>comment</span>
            )}
            </p>
            <div className="show-comments-container">
                { currentImageComments.length ? (
                  <div className="show-comments-inner-container">
                    {
                      currentImageComments.map((comment) => 
                      <div className="comment-container" key={comment.id}>
                        {
                          this.props.users[comment.userId].profilepic ? (
                            <div className="commenter-profile-pic-container">
                              <div className="commenter-profile-pic">
                                <Link to={`/users/${comment.userId}`}>
                                  <img src={this.props.users[comment.userId].profilepic}/>
                                </Link>
                              </div>
                            </div>
                            ) : (
                            <div className="commenter-profile-pic-container">
                              <div className="commenter-profile-pic">
                                <Link to={`/users/${comment.userId}`}>
                                <img src={window.userIcon}/>
                                </Link>
                              </div>
                            </div>
                          )
                        }
                        <div className="commenter-comment-container">
                          <div className="commenter-name-date-container">
                            <Link to={`/users/${comment.userId}`}>{comment.user.fullname.trim() ? comment.user.fullname : comment.user.username}</Link>
                            <p className="commenter-date">{formatDate(comment.createdAt)}</p>
                          </div>
                          <div className="commenter-comment-body-container">
                            <p className="commenter-comment-body">{comment.body}</p>
                          </div>
                        </div>
                      </div>
                    )
                    }
                  </div>
                ) : (
                  <div className="no-comments-container">
                    <div className="no-comments-svg-container">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm-5 11.5c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"/></svg>
                    </div>
                    <p className="no-comments-text"><span>No comments yet</span></p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentsForm;