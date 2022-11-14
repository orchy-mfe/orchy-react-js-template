import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

import OrchyBaseMfe from '@orchy-mfe/spa-adapter'
export class ReactMfe extends OrchyBaseMfe {
  root
  async mount(microFrontendProperties) {
    this.root = createRoot(this.getContainer())
    this.root.render(
      <StrictMode>
        <BrowserRouter basename={microFrontendProperties?.basePath}>
          <App />
        </BrowserRouter>
      </StrictMode>
    )
  }

  async unmount() {
    this.root?.unmount()
  }
}

customElements.define('react-mfe', ReactMfe)