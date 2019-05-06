import posed from 'react-pose'
import styled from 'styled-components'

export const SwitcherPosed = posed.button({
  hoverable: true,
  init: {
    background: ({ passiveSwitcherColor }) => passiveSwitcherColor || '#ff0066'
  },
  hover: {
    background: ({ activeSwitcherColor }) => activeSwitcherColor || '#d10053'
  },
  active: {
    background: ({ activeSwitcherColor }) => activeSwitcherColor || '#d10053'
  }
})

export const Switch = styled(SwitcherPosed)`
  width: 100%;
  height: 30px;
  color: ${props => props.switcherTextColor || '#ffffff'};
  border: none;
  outline: none;
`
