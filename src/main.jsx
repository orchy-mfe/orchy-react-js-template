import React from 'react'
import ReactDOM from 'react-dom/client'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import App from './App'
import './index.css'

let root

const retrieveContainer = props => props.container ?? document

const render = (props) => {
  const container = retrieveContainer(props)
  root = ReactDOM.createRoot(container.querySelector('#root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() {},
  unmount() {
    root.unmount()
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
