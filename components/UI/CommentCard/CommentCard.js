import React from 'react';
import { Popover } from 'antd';
import moment from 'moment';
import LikeDislike from './LikeDislike';
import Rating from '../Rating/Rating';

export default class App extends React.Component {
  render() {
    const { singleReview } = this.props;

    const commentDate = singleReview ? singleReview.date : '';
    const postTime = new Date(commentDate).getTime();
    const content = singleReview ? singleReview.text : '';
    const reviewTitle = 'Anônimo';

    return (
      <div className="comment-area">
        <div className="comment-wrapper">
          <div className="comment-header">
            <div className="avatar-area">

              <div className="author-info">
                <div className="comment-date">
                  <Popover
                    placement="bottom"
                    content={moment(commentDate).format(
                      'dddd, MMMM Do YYYY, h:mm:ss a'
                    )}
                  >
                    <span>Reviewd - {moment(postTime).fromNow()}</span>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="rating-area">
              <LikeDislike />
            </div>
          </div>
          <div className="comment-body">
            <h4>{reviewTitle}</h4>
            <p>{content}</p>
          </div>
          <div className="comment-rating">
            <div className="rating-widget">
              <Rating
                rating={singleReview.score}
                type="individual"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
