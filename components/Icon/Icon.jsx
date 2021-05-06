import React from 'react';
import clsx from 'clsx';
import styles from './Icon.module.sass';

const Icon = ({
 className,
 icon,
 width,
 height
}) => {
  return (
    <i
      className={clsx(styles.icon, className)}
      style={{ backgroundImage: `url(${icon})`, width, height }}
    />
  )
};

export default Icon;
