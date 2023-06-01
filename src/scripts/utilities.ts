// Tags
export const tagLabels = {
  'ui-ux': 'UI/UX',
  'frontend': 'Frontend',
  'backend': 'Backend',
  'full-stack': 'Full Stack',
  'infrastructure': 'Infrastructure',
}

// Intersection Observer
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

export const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(showIntersectionElement, {
    root: null,
    threshold: 0.36,
  })

  const elements = document.querySelectorAll('.slides-in, .fades-in')
  elements.forEach((element) => {
    observer.observe(element)
  })
}

// Waves
export const generateWaves = (cx: number, cy: number, config: any) => {
  const waves = []
  const numWaves = 12
  const radiusOffset = 7.5
  const opacityOffset = 0.12
  const duration = '1.8s'

  for (let index = 1; index <= numWaves; index++) {
    const radiusFrom = index * radiusOffset
    const radiusTo = (index + 1) * radiusOffset

    // TODO: Clean this logic.
    const opacityFrom =
      index < numWaves / 2 + 1
        ? index * opacityOffset
        : (numWaves + 1 - index) * opacityOffset
    const opacityTo =
      index < numWaves / 2 + 1
        ? (index + 1) * opacityOffset
        : (numWaves + 1 - index - 1) * opacityOffset

    waves.push(`
      <circle
        cx='${cx}'
        cy='${cy}'
        r='${radiusFrom}'
        stroke-opacity='${opacityFrom}'
        stroke-width='${config.waves.width}'
        stroke='${config.waves.color}'
      >
        <animate
          attributeName='r'
          from='${radiusFrom}'
          to='${radiusTo}'
          dur='${duration}'
          repeatCount='indefinite'
        />
        <animate
          attributeName='stroke-opacity'
          from='${opacityFrom}'
          to='${opacityTo}'
          dur='${duration}'
          repeatCount='indefinite'
        />
      </circle>
    `)
  }

  return waves
}

// Accent Color
export const generateAccentColor = () => {
  const addCSS = (css: string) => {
    return (document.head.appendChild(
      document.createElement('style')
    ).innerHTML = css)
  }

  const accentColors = ['B8E0F9', 'FBFFBA', 'D0BEF8', 'A3E3ED', 'FEBAAD']
  const randomIndex = Math.floor(Math.random() * accentColors.length)

  addCSS(`:root { --color-accent: #${accentColors[randomIndex]} !important; }`)
}
