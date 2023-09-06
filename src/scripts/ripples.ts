export const generateRipples = (cx: number, cy: number, props: any) => {
  const ripples = []

  const config = {
    numRipples: 12,
    radiusOffset: 7.5,
    opacityOffset: 0.12,
    duration: '1.8s',
  }

  for (let index = 1; index <= config.numRipples; index++) {
    const radiusFrom = index * config.radiusOffset
    const radiusTo = (index + 1) * config.radiusOffset

    // TODO: Clean this logic.
    const opacityFrom =
      index === 1
        ? 0
        : index < config.numRipples / 2 + 1
        ? index * config.opacityOffset
        : (config.numRipples + 1 - index) * config.opacityOffset

    const opacityTo =
      index === config.numRipples / 2
        ? index * config.opacityOffset
        : index < config.numRipples / 2 + 1
        ? (index + 1) * config.opacityOffset
        : (config.numRipples + 1 - index - 1) * config.opacityOffset

    ripples.push(`
      <circle
        cx='${cx}'
        cy='${cy}'
        r='${radiusFrom}'
        stroke-opacity='${opacityFrom}'
        stroke-width='${props.ripples.width}'
        stroke='${props.ripples.color}'
      >
        <animate
          attributeName='r'
          from='${radiusFrom}'
          to='${radiusTo}'
          dur='${config.duration}'
          repeatCount='indefinite'
        />
        <animate
          attributeName='stroke-opacity'
          from='${opacityFrom}'
          to='${opacityTo}'
          dur='${config.duration}'
          repeatCount='indefinite'
        />
      </circle>
    `)
  }

  return ripples
}
