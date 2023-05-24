import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

const BrandIcon = () => {
  const [test, setTest] = useState('blue')

  useEffect(() => {
    setTest(() => {
      return 'red'
    })
  }, [])

  return <span style={{ color: test }}>ICON</span>
}

export default BrandIcon
