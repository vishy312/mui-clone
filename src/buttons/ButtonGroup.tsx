import React, { ReactElement, ReactNode } from 'react'

interface ButtonGroupProps{
    variant?: 'text' | 'outlined' | 'contained';
    children?: ReactElement | ReactElement[];
}

function ButtonGroup({variant='text',children}:ButtonGroupProps) {
  return (
    <div className='btn-grp'>
       {
        React.Children.map(children, (child, index) => (
            React.cloneElement(child, {key: index})
        ))
       }
    </div>
  )
}

export default ButtonGroup