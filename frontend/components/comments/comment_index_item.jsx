import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';
import CommentEditForm from './comment_edit_form';

// const CommentIndexItem = (props) => {

//   const removeComment = (e) => {
//     e.preventDefault();
//     props.deleteComment(props.comment.id);
//   }

//   const editComment = (e) => {
//     e.preventDefault();
//     props.updateComment(props.comment)
//   }

//   // debugger
//   return (
//     <div className="comment-container">
//       {
//         props.users[props.comment.userId].profilepic ? (
//           <div className="commenter-profile-pic-container">
//             <div className="commenter-profile-pic">
//               <Link to={`/users/${props.comment.userId}`}>
//                 <img src={props.users[props.comment.userId].profilepic}/>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className="commenter-profile-pic-container">
//             <div className="commenter-profile-pic">
//               <Link to={`/users/${props.comment.userId}`}>
//                 <img src={window.userIcon}/>
//               </Link>
//             </div>
//           </div>
//         )
//       }
//       <div className="commenter-comment-container">
//         <div className="commenter-name-date-container">
//           <Link to={`/users/${props.comment.userId}`}>{props.comment.user.fullname.trim() ? props.comment.user.fullname : props.comment.user.username}</Link>
//           <p className="commenter-date">{formatDate(props.comment.createdAt)}</p>
//         </div>
//         <div className="commenter-comment-body-container">
//           <p className="commenter-comment-body">{props.comment.body}</p>
//           {props.currentUser.id === props.comment.userId ? <button onClick={removeComment}>Delete</button> : <div></div>}
//           {props.currentUser.id === props.comment.userId ? <button onClick={editComment}>Edit</button> : <div></div>}
//         </div>
//       </div>
//     </div>
//   )
// };

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    }
    this.removeComment = this.removeComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  removeComment(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  editComment() {
    // e.preventDefault();
    this.setState({
      editing: !this.state.editing
    });
    // console.log(this.state.editing);
  }

  render() {
    // console.log(this.state.editing);
    return (
      <div className="comment-container">
        {
          this.props.users[this.props.comment.userId].profilepic ? (
            <div className="commenter-profile-pic-container">
              <div className="commenter-profile-pic">
                <Link to={`/users/${this.props.comment.userId}`}>
                  <img src={this.props.users[this.props.comment.userId].profilepic}/>
                </Link>
              </div>
            </div>
          ) : (
            <div className="commenter-profile-pic-container">
              <div className="commenter-profile-pic">
                <Link to={`/users/${this.props.comment.userId}`}>
                  <img src={window.userIcon}/>
                </Link>
              </div>
            </div>
          )
        }
        <div className="commenter-comment-container">
          <div className="commenter-name-date-container">
            <Link to={`/users/${this.props.comment.userId}`}>{this.props.comment.user.fullname.trim() ? this.props.comment.user.fullname : this.props.comment.user.username}</Link>
            <p className="commenter-date">{formatDate(this.props.comment.createdAt)}</p>
          </div>
          <div className="commenter-comment-body-container">
            {this.state.editing ? 
              (
                <CommentEditForm 
                  comment={this.props.comment} 
                  updateComment={this.props.updateComment} 
                  editComment={this.editComment}
                />
              ) : (
                <p className="commenter-comment-body">{this.props.comment.body}</p>
              )
            }
            <div className="comment-actions-container">
              {this.props.currentUser.id === this.props.comment.userId && !this.state.editing ? <button className="delete-comment-button" onClick={this.removeComment}>Delete</button> : <div></div>}
              {this.props.currentUser.id === this.props.comment.userId && !this.state.editing ? <button className="edit-comment-button" onClick={this.editComment}>Edit</button> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;