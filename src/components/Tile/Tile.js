import React from 'react'
import Svg from '../../assets/svgs/2'

import './Tile.css'

const Tile = (props) => {

  let backgroundColor = (props.tile.selected || props.tile.matched) ? { backgroundColor: props.tile.color } : null;

  return (
    <div className='Tile' style={backgroundColor} onClick={() => props.tile.handleTileClicked(props.tile.id, props.tile.color)}>
      {(props.tile.selected || props.tile.matched) ? <Svg /> : null }
    </div>
  )
}

export default Tile
