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

const convertSize = (size) => {
  if (Math.floor(size/(Math.pow(2, 10))) == 0) {
    return {value: size, name: 'Байт'};
  } else if (Math.floor(size/(Math.pow(2, 20))) == 0) {
    return {value: size/(Math.pow(2, 10)), name: 'КБ'};
  } else if (Math.floor(size/(Math.pow(2, 30))) == 0) {
    return {value: size/(Math.pow(2, 20)), name: 'MБ'};
  } else {
    return {value: size/(Math.pow(2, 30)), name: 'ГБ'};
  }
}

export default class File extends Component {
  render() {
    const { data } = this.props;
    let size = convertSize(data.size); //конвертация размера в мегабайты (с учетом того, что приходящее значение указано в битах)
    return (
      <div className={ css(styles.fileElement) }>
        <InsertDriveFile className={ css(styles.icon) } color={ '#6f6b6c' } />
        <b className={ css(styles.b) }>{ data.name }</b>
        <small className={ css(styles.small) }>{ `${size.value.toFixed(2)} ${size.name}` }</small>
      </div>
    )
  }
}
