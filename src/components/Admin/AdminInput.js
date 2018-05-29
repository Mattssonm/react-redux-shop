import React from 'react'

const AdminInput = props => {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder={props.inputName}
        name={props.inputName}
        onChange={props.handleChangeForm}
      />
    </React.Fragment>
  )
}

export default AdminInput ;
