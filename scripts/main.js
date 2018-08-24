
{
  const dlElem = document.querySelector('dl[is="accordion-dl"]')

  const ddLastElem = dlElem.querySelector('dd:last-of-type')

  function createSpinner() {

    const spinner = document.createElement('div')
    spinner.classList.add('Spinner')
    spinner.classList.add('u-alignMiddle')

    const spinnerIcon = document.createElement('span')
    spinnerIcon.classList.add('Spinner-icon')

    spinner.appendChild(spinnerIcon)

    return spinner
  }

  ddLastElem.addEventListener('expand', function (e) {

    this.innerHTML = ''

    const spinner = createSpinner()

    this.appendChild(spinner)

    fetch('https://randomuser.me/api/?lego')
      .then(res => res.json())
      .then(res => {

        const urlImage = res.results[0].picture.large

        const image = document.createElement('img')
        image.setAttribute('src', urlImage)
        image.setAttribute('width', 200)

        this.appendChild(image)

        spinner.remove()
      })
  })
}