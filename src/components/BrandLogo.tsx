import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

const BrandLogo = () => {
  const [test, setTest] = useState('blue')

  useEffect(() => {
    setTest(() => {
      return 'red'
    })
  }, [])

  return <span style={{ color: test }}>LOGO</span>
}

export default BrandLogo
