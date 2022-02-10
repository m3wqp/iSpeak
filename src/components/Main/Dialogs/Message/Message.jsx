import React from "react";
import '../../../../App.css'


const Message = (p) => {
  return (

    <div>
      <div className="mine messages">
        <div className="message last">
          {p.message}
        </div>
      </div>
     {/* <div className="yours messages">
        <div className="message">
          {p.message1}
        </div>
      </div>*/}

    </div>
  );
}


export default Message;


