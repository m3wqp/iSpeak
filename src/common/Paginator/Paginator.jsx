import React, {useState} from "react";
import style from "./Paginator.module.css";

let Paginator = ({currentPage, onChangeCurrentPage, countUser, totalCount, portionSize = 10, ...props}) => {

  let countUserPage = Math.ceil(totalCount / countUser)


  let pageUsers = [];
  for (let i = 1; i <= countUserPage; i++) {
    pageUsers.push(i)
  }

  let portionCount = Math.ceil(countUserPage / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div>


      <div className={style.paginatorContainer}>
        {portionNumber > 1 &&
        <button onClick={() => {
          setPortionNumber(portionNumber - 1)
        }}> {"<<"} </button>
        }
        {pageUsers
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(p => {
            return <button
              onClick={() => {
                onChangeCurrentPage(p)
              }}
              className={currentPage === p && style.btn_active}>{p}</button>
          })}
        {portionCount > portionNumber &&
        <button onClick={() => {
          setPortionNumber(portionNumber + 1)
        }}> >> </button>
        }
      </div>


    </div>
  )

}


export default Paginator;