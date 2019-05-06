import React from 'react'
import PropTypes from 'prop-types'

import { BookMarkContext } from './BookMarkSwitcher'

import { Switch } from './Switcher.styled'

class Switcher extends React.Component {
  render() {
    const { text, index, active, onChangeActiveSwitcher } = this.props
    const pose = active ? 'active' : 'init'

    return (
      <BookMarkContext.Consumer>
        {/* {context => console.log(context)} */}
        {context => {
          console.log(context)

          return (
            <Switch
              pose={pose}
              onClick={() => onChangeActiveSwitcher(index)}
              switcherTextColor={context.switcherTextColor}
              activeSwitcherColor={context.activeSwitcherColor}
              passiveSwitcherColor={context.passiveSwitcherColor}
            >
              {text}
            </Switch>
          )
        }}
      </BookMarkContext.Consumer>
    )
  }
}

Switcher.propTypes = {
  onChangeActiveSwitcher: PropTypes.func.isRequired
}

export default Switcher
