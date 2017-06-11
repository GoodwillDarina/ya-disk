import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import CircularProgress from 'material-ui/CircularProgress';
import { Config } from '../../config';

export const styles = StyleSheet.create({
  a: {
    display: 'block',
    width: '60%',
    height: '65px',
    margin: '30px auto',
    lineHeight: '65px',
    fontSize: '24px',
    fontWeight: 'normal',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '2px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    backgroundColor: 'rgb(255, 64, 129)',
    textAlign: 'center',

    ':hover': {
      backgroundColor: 'rgba(255, 64, 129, 0.75)'
    }
  }
});

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  componentWillMount() {
    if (this.props.location.hash) {
      let token = /access_token=([^&]+)/.exec(this.props.location.hash)[1];
      location.hash = '';

      this.props.auth(token);
    }
  }

  render() {
    return (    
      <div> 
        { this.state.isAuth ? 
            <CircularProgress className="loader" size={ 80 } thickness={ 5 } /> 
          :
            <a className={ css(styles.a) } href={ Config.auth.url }>
              Авторизация через Яндекс
            </a>
        }
      </div>
    )
  }
}