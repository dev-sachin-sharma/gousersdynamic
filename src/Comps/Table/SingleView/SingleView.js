import React from "react";
import "./Single.css";

const SingleView = (props) => {
    const renderUserView = props.userDetail && (
        <div className="userContainer">
          <p>Name : {props.userDetail.name}</p>
          <p>Email : {props.userDetail.email}</p>
          <p>Id : {props.userDetail.id}</p>
          <p>Gender : {props.userDetail.gender}</p>
          <p> Status : {props.userDetail.status}</p>
        </div>
      );
    
  return (
    <div className="singleUserContainer">{renderUserView}   </div>
  );
};

export default SingleView;
