import React from 'react'

import PrivateCabinetHeader from './PrivateCabinetHeader'
import BookMarkSwitcher from '../containers/modules/BookMarkSwitcher/BookMarkSwitcher'

import { CabinetWrapper, DivideLine } from './PrivateCabinet.styled'

const Movies = () => (
  <div style={{ background: '#1cff6f' }}>
    <h1>Movies</h1>
    <ul>
      <li>Taxi 1</li>
      <li>Taxi 2</li>
      <li>Taxi 3</li>
      <li>Taxi 4</li>
    </ul>
  </div>
)

const Music = () => (
  <div style={{ background: '#ff21d2' }}>
    <h1>Music</h1>
    <ul>
      <li>A$AP Rocky</li>
      <li>Lil Bil</li>
      <li>LIZZER</li>
      <li>505</li>
    </ul>
  </div>
)

const Games = () => (
  <div style={{ background: '#3b21ff' }}>
    <h1>Games</h1>
    <ul>
      <li>WOT</li>
      <li>DOTA 2</li>
      <li>CS GO</li>
      <li>LOL</li>
    </ul>
  </div>
)

const PrivateCabinet = () => {
  return (
    <CabinetWrapper>
      <PrivateCabinetHeader />
      <DivideLine />
      <BookMarkSwitcher
        pass={[Movies, Music, Games]}
        headers={['Movies', 'Music', 'Games']}
        switcherTextColor={'#ffffff'}
        activeSwitcherColor={'#d10053'}
        passiveSwitcherColor={'#ff0066'}
      />
    </CabinetWrapper>
  )
}

export default PrivateCabinet
