import React from 'react'
import three from '../../misc/svgs';

import './Tile.css'

const Tile = (props) => {

  let backgroundColor = props.tile.selected || props.tile.matched ? { backgroundColor: props.tile.color } : null;

  return (
    <div className='Tile' style={backgroundColor} onClick={(() => props.tile.handleTileClicked(props.tile.id, props.tile.color) )} svg={three}>
    </div>
  )
}

export default Tile
