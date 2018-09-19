import React, {Component} from 'react'
import {RecommendWrapper, RecommendItem} from '../style'

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem>
          <a href="#">
            <img  
              className="recommend-pic"
              src="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
              alt=""
            />
          </a>
        </RecommendItem>
          
        <RecommendItem>
          <a href="#">
            <img  
              className="recommend-pic"
              src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
              alt=""
            />
          </a>
        </RecommendItem>
        <RecommendItem>
          <a href="#">
            <img  
              className="recommend-pic"
              src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
              alt=""
            />
          </a>
        </RecommendItem>
        <RecommendItem>
          <a href="#">
            <img  
              className="recommend-pic"
              src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
              alt=""
            />
          </a>
        </RecommendItem>
        <RecommendItem>
          <a href="#">
            <img  
              className="recommend-pic"
              src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
              alt=""
            />
          </a>
        </RecommendItem>

      </RecommendWrapper>
    )
  }
}

export default Recommend