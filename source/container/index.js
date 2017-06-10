import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import Folders from '../components/Folders';
import * as foldersActions from '../actions/folders';

import './styles.less';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getData = (path) => {
    this.props.foldersActions.getData(path);
  };

  render() {
    const { folders } = this.props;
    const { initApp } = this.props.foldersActions;

    const WrappedFolders = (props) => {
      return <Folders { ...props } data={ folders.resources } getData={ ::this.getData }/>;
    };
    console.log(this);
    return (
      <MuiThemeProvider >
        <div>
          <AppBar title="My Disk" showMenuIconButton={ false }/>
          <div className="page-content"> 
            <Router>
              <Folders data={ folders.resources } getData={ ::this.getData }/>
            </Router >
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    folders: state.folders
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    foldersActions: bindActionCreators(foldersActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
