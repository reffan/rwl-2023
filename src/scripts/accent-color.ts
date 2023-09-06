export const getRandomAccentColor = () => {
  const accentColors = ['B8E0F9', 'FBFFBA', 'D0BEF8', 'A3E3ED', 'FEBAAD']
  const randomIndex = Math.floor(Math.random() * accentColors.length)

  return accentColors[randomIndex]
}

export const setAccentColor = () => {
  const injectCSS = (css: string) => {
    return (document.head.appendChild(
      document.createElement('style')
    ).innerHTML = css)
  }

  injectCSS(`:root { --color-accent: #${getRandomAccentColor()} !important; }`)
}
