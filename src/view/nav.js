import React, { PureComponent } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

export default class Nav extends PureComponent {

  render () {
    const { mode, id } = this.props;
    return (
      <Menu 
        mode={ mode } 
        theme="dark"
        id={ id }
      >
        <Menu.Item>
          <Link to="/index"><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/book"><Icon type="book" />教程</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about"><Icon type="info-circle" />关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}