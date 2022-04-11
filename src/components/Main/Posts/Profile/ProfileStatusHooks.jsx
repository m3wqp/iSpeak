import React, {useEffect, useState} from "react";


const ProfileStatusHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  useEffect(() => {
    setStatus(status)
  }, [status])

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)

  }
  return (
    <>
      {!editMode &&
      <div style={{color:'#787878'}}>
        <b onClick={activateEditMode}>{status || 'введите статус'}</b>
      </div>
      }

      {
        editMode &&
        <div >
          <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true}/>
        </div>
      }

    </>

  )


}

export default ProfileStatusHooks;