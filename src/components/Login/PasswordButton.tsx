import React from 'react'

interface IProps {
  type: 'password' | 'text'
  onClick: () => void
}

const PasswordButton = ({ type, onClick }: IProps) => {
  return (
    <div className="password__button">
      {type === 'password' && (
        <button type="button" onClick={onClick}>
          SHOW
        </button>
      )}
      {type === 'text' && (
        <button type="button" onClick={onClick}>
          HIDE
        </button>
      )}
    </div>
  )
}

export default PasswordButton
