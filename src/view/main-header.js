import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import Nav from './nav'
const { Header } = Layout
export default class MainHeader extends Component {
  render () {
    return (
      <>
        <Header>
          <Row>
            <Col md={ 6 } xs={ 24 } >
              <h1 id="logo">CNode</h1>
            </Col>
            <Col md= { 18} xs = { 0 }>
              <Divider type="vertical" className="headerLine"/>
              <Nav mode="horizontal" id="nav"/>
            </Col>
            <Col md={ 0 } xs={ 24 } id="xsNav">
            <Dropdown 
              overlay={ <Nav mode="vertical" /> } 
              trigger={['click']}
              placement="bottomRight"
            >
              <Button><Icon type="bars" /></Button>
            </Dropdown>
            </Col>
          </Row>
        </Header>
      </>
    )
  }
}