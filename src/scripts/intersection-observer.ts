const showIntersectionElement = (elements: IntersectionObserverEntry[]) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add('visible')
    } else {
      // MARK: Always remain visibile after initial toggle.
      // element.target.classList.remove('visible')
    }
  })
}

export const initIntersectionObserver = () => {
  const observer = new IntersectionObserver(showIntersectionElement, {
    root: null,
    threshold: 0.24,
  })

  const elements = document.querySelectorAll('.slides-in, .fades-in')
  elements.forEach((element) => {
    observer.observe(element)
  })
}
