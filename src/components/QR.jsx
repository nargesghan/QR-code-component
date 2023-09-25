import React from 'react'
import Paragraph from './Paragraph'
import Header from './Header'
import imageQrCode from '../assets/images/image-qr-code.png';
import styles from './QR.module.css'

const QR = () => {
  return (
    <div className={styles.card}>
    <img src={imageQrCode} alt='QR code' className={styles.image}/>
    <Header mainContent={"Improve your front-end skills by building projects"}/>
    <Paragraph content={'scan this QR code to visit frontend mentor and take your coding skills to the next level.'}/>
    </div>
  )
}

export default QR