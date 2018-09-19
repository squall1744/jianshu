import React, {Component} from 'react'
import {RecommendWrapper, RecommendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component {
  render() {
    const {recommendList} = this.props
    return (
      <RecommendWrapper>
        {recommendList.map(item => {
          return (
            <RecommendItem key={item.get('id')}>
              <a href="#">
                <img  
                  className="recommend-pic"
                  src={item.get('imgURL')}
                  alt=""
                />
              </a>
            </RecommendItem> 
          )
        })}
      </RecommendWrapper>
    )
  }
}

const mapState = state => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
  
}

export default connect(mapState, null)(Recommend) 