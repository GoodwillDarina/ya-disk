import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Directory from './Directory';
import File from './File';

const typeElements = (type) => {
  if (type == 'dir') {
    return true;
  } else if (type == 'file') {
    return false;
  }
}

export default class Folders extends Component {
    render() {
    const { data } = this.props;

    return (
      <GridList cellHeight={ 100 } cols={ 5 }>
          {
            data.map((element, index) => {
              return <GridTile key={ index }>
                { typeElements(element.type) ? <Directory data={ element } /> : <File data={ element } /> }
              </GridTile>
            })
          }
      </GridList>
    )
  }
}
