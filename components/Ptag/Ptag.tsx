import { PtagProps } from "./Ptag.props"

import styles from './Ptag.module.scss'
import cn from 'classnames'

export const Ptag = ({size = "fm", children, ...props}:PtagProps): JSX.Element => {
  return(
    <p className={cn(styles.text, {
      [styles.fs]: size == "fs",
      [styles.fm]: size == "fm",
      [styles.fl]: size == "fl",
    })}
    {...props}>
      {children}
    </p>
  )
}

