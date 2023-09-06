export const initFixedHeader = () => {
  const header = document.querySelector('header')
  const spacer = document.querySelector('.header-spacer')
  const offset = (header?.offsetTop || 0) + (header?.clientHeight || 0)

  let prevScrollTop = 0

  window.onscroll = () => {
    const scrollTop = window.scrollY
    const isScrollingDown = scrollTop > prevScrollTop

    if (isScrollingDown) {
      if (scrollTop > offset) {
        header?.classList.add('hidden')
      }

      if (scrollTop > offset * 2) {
        spacer?.classList.add('visible')
        header?.classList.add('fixed')
      }
    } else if (!isScrollingDown) {
      header?.classList.remove('hidden')

      if (scrollTop < 24) {
        header?.classList.remove('fixed')
        spacer?.classList.remove('visible')
      }
    }

    prevScrollTop = scrollTop <= 0 ? 0 : scrollTop
  }
}
