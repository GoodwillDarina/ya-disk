import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import { GridList, GridTile } from 'material-ui/GridList';
import Directory from './Directory';
import File from './File';

export default class Folders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: location.pathname
    }
  }

  typeElements = (type) => {
    if (type == 'dir') {
      return true;
    } else if (type == 'file') {
      return false;
    }
  };

  componentWillMount() {
    if(!this.props.data) {
      this.props.getData(location.pathname);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (location.pathname !== this.state.currentPath) {
      this.props.getData(location.pathname);
      this.setState({currentPath: location.pathname})
    }
  }

  render() {
    const { data } = this.props;
    return (
      !data ? 
        <CircularProgress className="loader" size={ 80 } thickness={ 5 } /> 
      :      
        <div>
          <GridList cellHeight={ 100 } cols={ 5 }>
              {
                data.map((element, index) => {
                  return <GridTile key={ index }>
                    { this.typeElements(element.type) ? <Directory data={ element }/> : <File data={ element } /> }
                  </GridTile>
                })
              }
          </GridList>
          <Route path={`${location.pathname}/:id`} component={Folders}/>
        </div>
    )
  }
}