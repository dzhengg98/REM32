import React from 'react';
import { withRouter } from 'react-router';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.image;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>

        <label>Title:
          <input 
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </label>

        <label>Description:
          <textarea
            value={this.state.description}
            onChange={this.update('description')}
          />
        </label>

        <input type="submit" value={this.props.formType} />
      </form>
    )
  }
}

export default withRouter(ImageForm);