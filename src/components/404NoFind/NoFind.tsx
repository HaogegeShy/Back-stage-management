import React from 'react'
import styles from './Nofind.module.scss'

export const NoFind=()=> {
  return (
    <div className={styles.content}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <h1>404</h1>
          <p>The Page not Found-找不到你要访问的页面</p>
          <div className={styles.sub}>
            <p><a href="/">Back</a></p>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default NoFind