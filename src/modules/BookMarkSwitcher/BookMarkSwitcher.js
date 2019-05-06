import React from 'react'
import PropTypes from 'prop-types'

import Switcher from '../../containers/modules/BookMarkSwitcher/Switcher'

import { FlexRow, FlexColumns } from '../AlignBlocks.styled'

import { SlidingWrapper, BlocksWrapper } from './BookMarkSwitcher.styled'

export const BookMarkContext = React.createContext()

class BookMarkSwitcher extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // categories: ['Movies', 'Music', 'Games'],
      references: []
    }
  }

  componentWillMount() {
    const { headers } = this.props
    const { references } = this.state

    this.initSwitchers()
    references.length = headers.length
  }

  initSwitchers = () => {
    const { onAddSwitcherToList } = this.props
    const { headers } = this.props

    headers.forEach((header, index) => {
      onAddSwitcherToList(index, header, index === 0 ? true : false)
    })
  }

  componentWillReceiveProps(nextProps) {
    const { activeSwitcher } = nextProps

    this.updateZIndex(activeSwitcher)
  }

  updateZIndex = activeSwitcherIndex => {
    const { references } = this.state

    references.forEach((ref, index) => {
      if (index === activeSwitcherIndex) {
        ref.style.zIndex = '20'
      } else if (
        index - activeSwitcherIndex === 1 ||
        index - activeSwitcherIndex === -1
      ) {
        ref.style.zIndex = '10'
      } else {
        ref.style.zIndex = '1'
      }
    })
  }

  render() {
    const { references } = this.state
    const { switchers, pass, activeSwitcher } = this.props

    console.log(this.props)
    console.log(references)

    return (
      <BookMarkContext.Provider value={this.props}>
        {switchers.length === pass.length ? (
          <>
            <FlexRow>
              {switchers.map(switcher => (
                <Switcher
                  key={switcher.index}
                  index={switcher.index}
                  text={switcher.category}
                  active={switcher.active}
                />
              ))}
              <BookMarkContext.Consumer>
                {context => console.log(context)}
              </BookMarkContext.Consumer>
            </FlexRow>
            <FlexRow>
              <BlocksWrapper>
                {pass.map((Element, index) => (
                  <SlidingWrapper
                    style={{ zIndex: index === 0 ? '20' : '10' }}
                    ref={node => (references[index] = node)}
                    key={index}
                    pose={
                      index === activeSwitcher
                        ? 'init'
                        : index > activeSwitcher
                        ? 'slideLeft'
                        : 'slideRight'
                    }
                  >
                    <Element />
                  </SlidingWrapper>
                ))}
              </BlocksWrapper>
            </FlexRow>
          </>
        ) : (
          <p>Amount of switchers and block are different</p>
        )}
      </BookMarkContext.Provider>
    )
  }
}

BookMarkSwitcher.propTypes = {
  onAddSwitcherToList: PropTypes.func.isRequired,
  activeSwitcher: PropTypes.number.isRequired
}

export default BookMarkSwitcher
