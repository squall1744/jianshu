import React, {Component} from 'react'
import {DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  render() {
    const {title, content} = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
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

const mapDispatch = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}


export default connect(mapState, mapDispatch)(Detail) 