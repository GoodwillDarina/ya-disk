import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import InsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';

export const styles = StyleSheet.create({
  fileElement: {
    textAlign: 'center',
    padding: '12px',
  },
  icon: {
    display: 'block'
  },
  b: {
    display: 'block',
    fontSize: '15px',
    lineHeight: 1.5,
    color: '#404040'
  },
  small: {
    display: 'block',
    fontSize: '12px',
    lineHeight: 1.5,
    color: '#9f9f9f'
  }
});

export default class File extends Component {
  render() {
    const { data } = this.props;
    let size = data.size/(Math.pow(2, 23)); //конвертация размера в мегабайты (с учетом того, что приходящее значение указано в битах)
    return (
      <div className={ css(styles.fileElement) }>
        <InsertDriveFile className={ css(styles.icon) } color={ '#6f6b6c' } />
        <b className={ css(styles.b) }>{ data.name }</b>
        <small className={ css(styles.small) }>{ size.toFixed(2) } МБ</small>
      </div>
    )
  }
}
