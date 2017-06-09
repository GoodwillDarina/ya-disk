import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  componentWillMount() {
    this.props.foldersActions.initApp();
  }

  render() {
    const { folders } = this.props;
    const { initApp } = this.props.foldersActions;

    return <MuiThemeProvider >
      <div className="page-content">
        <AppBar title="My Disk" showMenuIconButton={ false }/>
        {
          folders.resources ? <Folders data={ folders.resources }/> : <CircularProgress />
        }
      </div>
    </MuiThemeProvider>
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
