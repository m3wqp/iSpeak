import React from "react";


class ProfileStatus extends React.Component {

  state = {
    editStatus: false,
    status: this.props.status,
  }
  activeEditStatus = () => {
    this.setState({
      editStatus:true
    })

  }

  deactivateEditStatus = () => {
    this.setState({
      editStatus:false
    });
    this.props.updateStatus(this.state.status);

  }

  onStatusChange = (e) =>{
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {

    return (
      <>
        {
          !this.state.editStatus &&
          <div onClick={this.activeEditStatus}>
            <span>{this.props.status || 'введите статус'}</span>
          </div>
        }

        {
          this.state.editStatus &&
          <div onBlur={this.deactivateEditStatus}>
            <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status }/>
          </div>
        }


      </>

    )
  }


}

export default ProfileStatus;
