import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import Folder from 'material-ui/svg-icons/file/folder';

export const styles = StyleSheet.create({
  dirElement: {
    display: 'block',
    textAlign: 'center',
    padding: '12px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: 'rgba(255, 64, 129, 0.2)'
    }
  },
  icon: {
    display: 'block'
  },
  b: {
    display: 'block',
    fontSize: '15px',
    lineHeight: 1.5,
    textDecoration: 'none',
    color: '#404040'
  }
});

export default class Directory extends Component {
  render() {
    const { data, change } = this.props;
    let path = data.path.substring(data.path.indexOf("/"));

    return (
      <Link className={ css(styles.dirElement) } to={ path }  onClick={ this.handleClick } >
        <Folder className={ css(styles.icon) } color={ '#6f6b6c' }/>
        <b className={ css(styles.b) }>{ data.name }</b>
      </Link>
    )
  }
}
