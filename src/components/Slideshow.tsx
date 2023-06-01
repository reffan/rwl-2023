import { createRef, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

let timeoutFn: ReturnType<typeof setTimeout>

type Props = {
  page: string
  slides: { img: string; label: string }[]
}

const Slideshow = ({ page, slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const modal = createRef()

  const startTimeout = () => {
    if (timeoutFn) {
      clearTimeout(timeoutFn)
    }

    timeoutFn = setTimeout(() => {
      nextSlide()
    }, 1000 * 12)
  }

  useEffect(() => {
    startTimeout()
    return () => {
      clearTimeout(timeoutFn)
    }
  }, [])

  const prevSlide = () => {
    startTimeout()
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    })
  }

  const nextSlide = () => {
    startTimeout()
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 > slides.length - 1 ? 0 : prevIndex + 1
    })
  }

  const gotoSlide = (index: number) => {
    startTimeout()
    setCurrentIndex(() => {
      return index
    })
  }

  const openModal = () => {
    // MARK: Don't progress slideshow whilst modal is open.
    clearTimeout(timeoutFn)
    modal.current.showModal()
  }

  const closeModal = () => {
    startTimeout()
    modal.current.close()
  }

  return (
    <div class='slideshow-container'>
      <div class='slideshow-wrapper'>
        <button
          type='button'
          class='slideshow-navigation arrow-left'
          onClick={prevSlide}
        >
          &lt;
        </button>
        <div class='slideshow-content-wrapper'>
          <div
            class='slideshow-content'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide) => {
              return (
                <button
                  type='button'
                  class='target'
                  onClick={() => {
                    openModal()
                  }}
                >
                  <img
                    src={`/assets/work/${page}/${slide.img}`}
                    alt={slide.label}
                  />
                </button>
              )
            })}
          </div>
        </div>
        <button
          class='slideshow-navigation arrow-right'
          onClick={() => nextSlide()}
        >
          &gt;
        </button>
      </div>
      <div type='button' class='slideshow-pagination'>
        {slides.map((slide, index) => {
          return (
            <button
              type='button'
              class={[
                'pagination-dot',
                index === currentIndex ? 'active' : null,
              ].join(' ')}
              onClick={() => {
                gotoSlide(index)
              }}
            >
              {currentIndex + 1}
            </button>
          )
        })}
      </div>
      <dialog class='slideshow-modal' ref={modal}>
        <button
          type='button'
          class='target'
          onClick={() => {
            closeModal()
          }}
        >
          <img
            src={`/assets/work/${page}/${slides[currentIndex].img}`}
            alt={slides[currentIndex].label}
          />
          {/* <span>{slides[currentIndex].label}</span> */}
        </button>
      </dialog>
    </div>
  )
}

export default Slideshow
