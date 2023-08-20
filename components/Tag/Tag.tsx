import { TagProps } from "./Tag.props"

import styles from './Tag.module.scss'
import cn from 'classnames'

export const Tag = ({ size = 's', children, color = 'ghost', href, ...props }: TagProps) => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.m]: size == 'm',
        [styles.s]: size == 's',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
        [styles.grey]: color == 'grey',
      })}
      {...props}>
      {href ? <a href={href}> {children}</a> : <>{children}</>} {/* Тернарный оператор если мы передали ссылку в href там где вызвали код то выводится текст в ссылке если нет то выводится текст без ссылки  */}
    </div>
  );
};

