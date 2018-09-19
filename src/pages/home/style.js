import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  width: 625px;
  margig-left: 15px;
  padding-top: 30px;
    .banner-img {
      width: 625px;
      height: 270px;
      border-radius: 10px;
    }
`

export const HomeRight = styled.div`
  width: 270px;
  margin-left: 40px;
  padding-top: 26px;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px ;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #f0f0f0;
`

export const TopicItem = styled.div`
    display: flex;
    line-height: 32px;
    font-size: 14px;
    background: #f7f7f7;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    padding-right: 10px;
    margin-right: 18px;
    margin-bottom: 15px;
    .topic-pic {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
`

export const ListWrapper = styled.div`

`

export const ListItem = styled.div`
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    .list-pic {
      width: 125px;
      height: 100px;
      margin-left: 40px;
      border: 1px solid #f0f0f0;
      border-radius: 5px;
    }
    .title {
      line-height: 27px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    .desc {
      line-height: 24px;
      font-size: 13px;
      color: #999;
    }
`

export const ListInfo = styled.div``

export const RecommendWrapper = styled.div``

export const RecommendItem = styled.div`
    .recommend-pic {
      width: 270px;
      height: 48px; 
      margin-bottom: 6px;
    }
`