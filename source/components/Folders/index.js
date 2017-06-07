import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

export default function Folders(props, context) {
    return (
    <GridList cellHeight={60} cols={5}>
        <GridTile>
          <a href="/1"> Param {1} </a>
        </GridTile>

        <GridTile>
          <a href="/1"> Param {1} </a>
        </GridTile>

        <GridTile>
          <a href="/1"> Param {1} </a>
        </GridTile>

        <GridTile>
          <a href="/1"> Param {1} </a>
        </GridTile>

        <GridTile>
          <a href="/1"> Param {1} </a>
        </GridTile>

        <GridTile>
          <a href="/1"> Param {1} </a>
        </GridTile>
    </GridList>
  )
}
