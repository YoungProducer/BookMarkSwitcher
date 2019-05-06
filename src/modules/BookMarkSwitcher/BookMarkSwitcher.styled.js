import posed from 'react-pose'
import styled from 'styled-components'

export const BlocksWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #333;
`

const SlidingWrapperPosed = posed.div({
  init: {
    x: 0,
    applyAtStart: { display: 'block' },
    transition: {
      duration: 500,
      type: 'tween'
    }
  },
  slideRight: {
    x: -600,
    applyAtEnd: { display: 'none' },
    transition: {
      duration: 500,
      type: 'tween'
    }
  },
  slideLeft: {
    x: 600,
    applyAtEnd: { display: 'none' },
    transition: {
      duration: 500,
      type: 'tween'
    }
  }
})

export const SlidingWrapper = styled(SlidingWrapperPosed)`
  position: absolute;
  width: 600px;
  height: 100%;
  background-color: #333;
`
