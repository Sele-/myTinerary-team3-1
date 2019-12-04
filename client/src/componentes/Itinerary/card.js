import React, { Component } from 'react';
import SlidePack from './SlidePack/SlidePack';
import './card.css';
import Comment from '../Comment/Comment'

export default class Card extends Component {

  constructor() {
    super();
    this.sendComment = this.sendComment.bind(this);
  }

  listComments(comment) {
    return comment.comments.map((comment, i) => {
      return <li key={i} className="list-group-item">
        <p key={i}>{comment.comment}</p>
      </li>
     });

  }

  activities() {
    let { Activities } = this.props;
    return Activities.map(i => i);
  }


  sendComment(e) {
    console.log(e)
  }
  render() {
    return (
      <div className='d-flex justify-content-center flex-column'>
        <SlidePack className="img" setObj={this.activities()} />
        <h5 style={{ marginTop: "15px" }}>Comments: </h5>
        {<div><ul>{this.listComments(this.props)}</ul></div>}
        
        <Comment _id={this.props._id}/>
      </div>
    )
  }
}