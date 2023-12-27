import React from 'react'

export default function Alert(props) {

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <>
    
      <div style={{height: '50px'}}>
        {props.alert && (
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show alert-transition`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}</strong>: {props.alert.msg}
          </div>)}
      </div>

    </>
  )
}

