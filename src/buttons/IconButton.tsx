import React from 'react'
import { Icon } from '../icons/Icon'
import './iconButton.css'

interface IconButtonProps {
    icon: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'error';
    onClick?: () => void}

function IconButton({icon, size='medium', color='primary', onClick, ...props}: IconButtonProps) {
  return (
    <button onClick={onClick} className={`${size} ${color}`}><Icon icon={icon}/></button>
  )
}

export default IconButton