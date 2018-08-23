
class Accordion extends HTMLDListElement {

  constructor() {

    super()

    this.dtElems = Array.from(this.querySelectorAll('dt'))
    this.ddElems = Array.from(this.querySelectorAll('dd'))
  }

  connectedCallback() {

    this._addClasses()

    this.dtElems.forEach(dtElem => dtElem.addEventListener('click', this.handleToggleClick.bind(this)))
  }

  _addClasses() {

    this.classList.add('Accordion')
    this.dtElems.forEach(dtElem => dtElem.classList.add('Accordion-title'))
    this.ddElems.forEach(ddElem => ddElem.classList.add('Accordion-content'))
  }

  _collapseSiblings(ddElem) {

    this.ddElems.forEach(_ddElem => {
      if (_ddElem.isSameNode(ddElem) === false) _ddElem.classList.remove('is-expanded')
    })
  }

  _expand(ddElem) {

    ddElem.classList.toggle('is-expanded')
  }

  _isExpanded(ddElem) {

    return ddElem.classList.contains('is-expanded')
  }

  handleToggleClick(e) {

    const ddElem = e.target.nextElementSibling

    this._collapseSiblings(ddElem)

    this._expand(ddElem)

    const expandEvent = new CustomEvent('expand')

    if (this._isExpanded(ddElem)) ddElem.dispatchEvent(expandEvent)
  }
}

customElements.define('accordion-dl', Accordion, { extends: 'dl' })