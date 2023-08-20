import React from 'react'
import { Button } from '../Button/Button'

export const Header = () => {

  const tg = window.Telegram.WebApp
  const onClose = () => {
    tg.close()
  }

  return (
    <div className={'header'}>
      <Button onclicl={onClose}>Закрыть</Button>
      <span className={'username'}>{tg.initDataUnSafe?.user?.username}</span>
    </div>
  )
}
