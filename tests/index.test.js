'use strict'

// accordion test
{
  const template = document.getElementsByTagName('template')[0]

  function beforeEach() {
    document.body.appendChild(document.importNode(template.content, true))
  }

  function afterEach() {
    const dlElem = document.querySelector('dl[is="accordion-dl"]')
    if (dlElem) dlElem.remove()
  }

  // it should expand dd on clicking its dt
  {
    beforeEach()

    const dlElem = document.querySelector('dl[is="accordion-dl"]')
    const dtElem = dlElem.querySelector('dt:first-child')
    const ddElem = dtElem.nextElementSibling

    assert('should first dd not be expanded', !ddElem.classList.contains('is-expanded'))

    dtElem.dispatchEvent(new Event('click'))

    assert('should first dd be expanded', ddElem.classList.contains('is-expanded'))

    afterEach()
  }

  // it should dispatch 'expand' event on dd when clicking on its dt
  {
    beforeEach()

    const dlElem = document.querySelector('dl[is="accordion-dl"]')
    const dtElem = dlElem.querySelector('dt:last-of-type')
    const ddElem = dtElem.nextElementSibling

    let dispatched = false

    ddElem.addEventListener('expand', function (e) {
      dispatched = true
    })

    dtElem.dispatchEvent(new Event('click'))

    assert('should dispatch expand event', dispatched)

    afterEach()
  }

  // it should keep only one section expanded
  {
    beforeEach()

    const dlElem = document.querySelector('dl[is="accordion-dl"]')
    const dtFirstElem = dlElem.querySelector('dt:first-child')
    const dtLastElem = dlElem.querySelector('dt:last-of-type')

    dtFirstElem.dispatchEvent(new Event('click'))

    dtLastElem.dispatchEvent(new Event('click'))

    let noneExpanded = true

    const ddElems = Array.from(dlElem.querySelectorAll('dd'))
    ddElems.slice(0, 3).forEach(_ddElem => {
      if (_ddElem.classList.contains('is-expanded')) noneExpanded = false
    })
    
    assert('should keep only one section expanded', noneExpanded)

    afterEach()
  }
}