import React, { Component } from 'react'
import { Button,DatePicker, Space } from 'antd'
import {WechatOutlined,FacebookOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <button>Click</button>
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
        <FacebookOutlined />
        <RangePicker />
      </div>
    )
  }
}
