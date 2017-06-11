import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Folders from '../components/Folders';
import Auth from '../components/Auth';
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
    const { authToken, closeAlert } = this.props.foldersActions;

    const AuthWrapper = (props) => {
      return <Auth { ...props } auth={ authToken } />
    };
    const actions = [ <FlatButton label='Хорошо' secondary={ true } onTouchTap={ closeAlert } /> ];

    return (
      <MuiThemeProvider >
        <div>
          <AppBar title='Ya.Disk' showMenuIconButton={ false }/>
          <Router>
            <div className='page-content'> 
                { folders.isAuth ? 
                  <div>
                    <Folders data={ folders.resources } getData={ ::this.getData } /> 
                  </div>
                :  
                  <div>
                    <Route path='/' component={ AuthWrapper } /> 
                  </div>
                }
            </div>
          </Router >

          <Dialog actions={ actions } modal={ false } open={ folders.message ? true : false } onRequestClose={ closeAlert } >
            { folders.message }
          </Dialog>
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
