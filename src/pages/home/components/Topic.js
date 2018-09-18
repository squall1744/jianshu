import React, {Component} from 'react'
import {TopicWrapper, TopicItem} from '../style'
import {connect} from 'react-redux'

class Topic extends Component {
  render() {
    const {topicList} = this.props
    console.log(topicList)
    return (
      <TopicWrapper>
        {topicList.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img
                className="topic-pic"
                src={item.get('imgURL')}
              />
              {item.get('title')}
            </TopicItem>
          ) 
        })}
      </TopicWrapper>
    )
  }
}
const mapState = state => {
  return {
    topicList: state.getIn(['home', 'topicList']) 
  }
}
export default connect(mapState, null)(Topic) 