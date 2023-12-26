import React from 'react'

export default function Alert(props) {

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <>

      {props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show alert-transition`} role="alert">
        <strong>{capitalizeFirstLetter(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        /> */}
      </div>)}

    </>
  )
}

