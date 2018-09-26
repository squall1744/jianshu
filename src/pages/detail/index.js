import React, {Component} from 'react'
import {DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux'

class Detail extends Component {
  render() {
    const {title, content} = this.props
    return (
      <DetailWrapper>
        <Header>为什么腾讯不会成为一家伟大的公司？程序员有话要说</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
}

const mapState = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}


export default connect(mapState, null)(Detail) 