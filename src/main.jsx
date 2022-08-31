import React from 'react'
import ReactDOM from 'react-dom/client'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import App from './App'
import './index.css'

const retrieveContainer = props => props.container ?? document

const render = (props) => {
  const container = retrieveContainer(props)
  ReactDOM.createRoot(container.querySelector('#root')).render(
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
  unmount(props) {
    ReactDOM.unmountComponentAtNode(retrieveContainer(props))
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
