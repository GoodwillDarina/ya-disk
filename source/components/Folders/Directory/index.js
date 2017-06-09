import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Folder from 'material-ui/svg-icons/file/folder';

export const styles = StyleSheet.create({
  dirElement: {
    display: 'block',
    textAlign: 'center',
    padding: '12px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: 'rgba(103, 237, 254, 0.23)'
    }
  },
  icon: {
    display: 'block'
  },
  b: {
    display: 'block',
    fontSize: '18px',
    lineHeight: 1.5,
    textDecoration: 'none',
    color: '#404040'
  }
});
export default class Directory extends Component {
  render() {
    const { data } = this.props;
    let path = data.path.substring(data.path.indexOf("/"));

    return (
      <a className={ css(styles.dirElement) } href={ path }>
        <Folder className={ css(styles.icon) } color={ '#6f6b6c' }/>
        <b className={ css(styles.b) }>{ data.name }</b>
      </a>
    )
  }
}
