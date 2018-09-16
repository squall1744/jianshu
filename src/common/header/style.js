import styled from 'styled-components'
import logopic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #f0f0f0; 
`

export const Logo = styled.a`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logopic});
  background-size: contain;
`
export const Nav = styled.nav`
  display: flex;
  width: 960px;
  margin: 0 auto;
`

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  color: #333;
  text-align: center;
  &.index {
    color: #ea6f5a;
    flex-grow: 0;
  }
  &.download {
    flex-grow: 0;
  }
  &.search {
    flex-grow: 1;
    text-align: left;
  }
  &.aa {
    color: #969696;
    flex-grow: 0;
  }
  &.signIn {
    color: #969696;
    flex-grow: 0;
  }
`

export const SearchWrapper = styled.span`
  position: relative;
    .search {
      position: absolute;
      right: 5px;
      top: -4px;
      line-height: 30px;
      height: 30px;
      width: 30px;
      text-align: center;
      border-radius: 50%;
      &.focus {
        background: #aaa; 
      }
    }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 200px;
  height: 38px;
  font-size: 13px;
  box-sizing: border-box;
  padding: 0 40px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  transition: all .5s;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 300px;
    transition: all .5s;
  }
  
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  line-height: 56px;
`

export const Button = styled.button`
  padding: 0 20px;
  margin-right: 20px;
  height: 38px;
  font-size: 16px;
  color: #ea6f5a;
  background: #fff;
  border-color: #ea6f5a;
  border-radius: 19px;
  &.signUp:hover, &.write:hover {
    opacity: 0.9;
  }
  &.write {
    background: #ea6f5a
    color: #fff;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 56px;
  top: 56px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  width: 265px;
  padding: 0 20px;
`

export const SearchTitle = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 16px;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #969696;
  justify-content: space-between;
`

export const SearchSwitch = styled.div`
  font-size: 13px;
  .switch {
    display: inline-block;
    font-size: 12px;
    padding: 0 2px;
    transition: all .5s ease-in;
    transform: rotate(0);
    transform: center center;
  }
`
export const SearchTab = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  line-height: 16px;
`

export const SearchTabContent = styled.a`
  font-size: 12px;
  line-height: 12px;
  padding: 3px 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #969696;
  border: 1px solid #ddd;
  border-radius: 3px;
`