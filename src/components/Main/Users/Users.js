import React from "react";
import Paginator from "../../../common/Paginator/Paginator";
import User from "./User";



const Users = ({totalCount, countUser,onChangeCurrentPage,currentPage, ...props}) => {



  const addUser = () => {
    props.addUser()
  }




  return <div>


      <Paginator  currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage} countUser={countUser} totalCount={totalCount}/>


{/*    <div onClick={addUser} className='btn m-3 btn-danger'>Добавить нового пользователя</div>*/}


    {
      props.user.users.map(user =><User key={user.id}
                                        user={user}
                                        followingInProgress={props.followingInProgress}
                                        unFollowThunk={props.unFollowThunk}
                                        followThunk={props.unFollowThunk}/>)

    }


  </div>

}


export default Users;