import React, {Component} from 'react'
import {DetailWrapper, Header, Content} from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>为什么腾讯不会成为一家伟大的公司？程序员有话要说</Header>
        <Content>
          <img src="https://upload-images.jianshu.io/upload_images/13133049-5b1a1734918a0d10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/582/format/webp" alt="" />
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail