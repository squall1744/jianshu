import React, {Component} from 'react'
import {ListWrapper, ListItem, ListInfo} from '../style' 
import {connect} from 'react-redux'

class List extends Component {
  render() {
    const {articleList} = this.props
    return (
      <ListWrapper>
        {
          articleList.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
                <img className="list-pic" src ={item.get('imgURL')} alt="" />
              </ListItem>
            ) 
          })
        }
      </ListWrapper>
    )
  }
}

const mapState = state => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapState, null)(List)