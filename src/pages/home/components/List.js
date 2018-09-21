import React, {Component} from 'react'
import {ListWrapper, ListItem, ListInfo, LoadMore} from '../style' 
import {actionCreators} from '../store/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class List extends Component {
  render() {
    const {articleList, loadMore, page} = this.props
    return (
      <ListWrapper>
        {
          articleList.map(item => {
            return (
              <Link to="/detail" key={item.get('id')}>
                <ListItem>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                  <img className="list-pic" src ={item.get('imgURL')} alt="" />
                </ListItem>
              </Link>
            ) 
          })
        }
        <LoadMore onClick={() => loadMore(page)}>更多内容</LoadMore>
      </ListWrapper>
    )
  }
}

const mapState = state => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatch = dispatch => {
  return {
    loadMore(page) {
      dispatch(actionCreators.loadMore(page)) 
    }
  }
}

export default connect(mapState, mapDispatch)(List)