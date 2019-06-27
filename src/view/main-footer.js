import React, { Component } from 'react'
import { Layout } from 'antd'
const { Footer } = Layout
export default class MainFooter extends Component {
  render () {
    return (
      <Footer style={{ textAlign: "center"}}>
        京ICP备00011142号 2007-2019 版权所有
      </Footer>
    )
  }
}