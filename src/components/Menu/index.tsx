import React, { useContext, useState } from 'react'
import { MenuContext } from '../../context/MenuContext'
import { MenuButton } from './MenuButton'
import { MenuContent } from './MenuContent'

export const Menu: React.FC = () => {

  return (
    <>
      <MenuButton />
      <MenuContent />
    </>
  )
}
