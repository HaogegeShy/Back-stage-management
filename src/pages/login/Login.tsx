import React, { useEffect } from 'react'
import initLoginBackground from './init'
import styles from './Login.module.scss'

export const Login=()=> {
  useEffect(()=>{
    initLoginBackground()
    window.onresize=()=>initLoginBackground()
  },[])
  return (
    <div className={styles.loginPage}>
      
      <canvas id='canvas' style={{display:'block'}}></canvas>  
      <div className={styles.loginBox}>
          <div className={styles.title}>
            <h1>前端勇哥&nbsp;&nbsp;通用后台管理系统</h1>
            <p>Strive Everday</p>
          </div>
      </div>
    </div>
  )
}
export default Login