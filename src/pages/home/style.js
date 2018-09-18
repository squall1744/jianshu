import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
  border: 1px solid;
`

export const HomeLeft = styled.div`
  width: 625px;
  margig-left: 15px;
  padding-top: 30px;
    .banner-img {
      width: 625px;
      height: 270px;
    }
`

export const HomeRight = styled.div`
  width: 240px;
  margin-left: 40px;
  border: 1px solid green;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: -18px;
`

export const TopicItem = styled.div`
    display: flex;
    line-height: 32px;
    font-size: 14px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 15px;
    .topic-pic {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
`