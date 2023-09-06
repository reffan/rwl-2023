import { createRef, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

type Props = {
  page: string
  images: { img: string; label: string }[]
  display: '1:1' | '16:9' | '9:16'
}

const ImageGrid = ({ page, images, display }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const modal = createRef()

  const openModal = () => {
    modal.current.showModal()
  }

  const closeModal = () => {
    modal.current.close()
  }

  const displayToClass = (display: string) => {
    return `ratio${display.replaceAll(':', 'by')}`
  }

  return (
    <div class={`image-grid-container ${displayToClass(display)}`}>
      {images.map((image, index) => {
        return (
          <button
            type='button'
            class='target'
            onClick={() => {
              setCurrentIndex(index)
              openModal()
            }}
          >
            <img
              src={`/assets/work/${page}/${image.img}`}
              alt={image.label}
              title={image.label}
              loading='lazy'
            />
          </button>
        )
      })}
      <dialog class='image-grid-modal' ref={modal}>
        <button
          type='button'
          class='target'
          onClick={() => {
            closeModal()
          }}
        >
          <img
            src={`/assets/work/${page}/${images[currentIndex].img}`}
            alt={images[currentIndex].label}
            title={images[currentIndex].label}
            loading='lazy'
          />
        </button>
      </dialog>
    </div>
  )
}
export default ImageGrid
