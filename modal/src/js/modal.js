class Modal {
  constructor (el, options) {
    if (typeof el === 'string') {
      this.el = document.querySelector(el)
    } else {
      this.el = el
    }

    const defaults = {
      activeClass: '_is-active',
      overlay: '.modal__overlay',
      close: '.modal__close',
    }

    this.settings = Object.assign({}, defaults, options)

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this)

    this.init()
  }

  init () {
    this.modalOverlay = this.el.querySelector(this.settings.overlay)
    this.modalClose = this.el.querySelector(this.settings.close)

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', this.close)
    }
    if (this.modalClose) {
      this.modalClose.addEventListener('click', this.close)
    }
  }

  open () {
    if (this.modalOverlay || this.modalClose) {
      window.addEventListener('keydown', this._onKeyDown)
    }

    this.el.classList.add(this.settings.activeClass)
  }

  close () {
    window.removeEventListener('keydown', this._onKeyDown)

    this.el.classList.remove(this.settings.activeClass)
  }

  _onKeyDown (evt) {
    const KeyCodes = {
      ENTER: 13,
      ESCAPE: 27,
    }

    if ((evt.target === this.modalClose && evt.keyCode === KeyCodes.ENTER) || evt.keyCode === KeyCodes.ESCAPE) {
      this.close()
    }
  }
}

export default Modal
