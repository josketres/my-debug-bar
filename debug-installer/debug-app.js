

class DebugApp {

  constructor() {
    console.log('Installing DebugApp, use DebgApp.open() to see it in action!')
    this.config = {
      appSrc : 'debug-app/debug.html',
    }
    this.iframe = null
  }

  open() {
    if(this.iframe) {
      this.show()
    } else {
      this._createIframe()
    }
  }

  show() {
    if(this.iframe) {
      this.iframe.style.display = 'block'
    } else {
      _createIframe()
    }
  }


  hide() {
    if(this.iframe) {
      this.iframe.style.display = 'none';
    }
  }

  _createIframe() {
    this.iframe = document.createElement('iframe')
    this.iframe.setAttribute('src', this.config.appSrc)
    this.iframe.setAttribute('frameborder', '0')
    this.iframe.setAttribute('scrolling', 'no')
    this.iframe.style.display = 'block'
    this.iframe.style.width = '100%'
    document.body.appendChild(this.iframe)
  }

}

export default DebugApp
