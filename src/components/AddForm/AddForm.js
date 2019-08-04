import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPosts } from '../Posts/PostsOperations';
class AddForm extends Component {
  state = {
    tag: '',
    info: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addPosts({ ...this.state });
  };
  render() {
    const { tag, info } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="tag"
          onChange={this.handleChange}
          value={tag}
        />
        <input
          type="text"
          name="info"
          onChange={this.handleChange}
          value={info}
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addPosts,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddForm);
