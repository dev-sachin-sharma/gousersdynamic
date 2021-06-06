import React from "react";
import './Delete.css'
// import { useDispatch, useSelector } from "react-redux";
// import { setAllUser } from '../../redux/actions/userAction';

const DeleteView = ({userDetail}) => {
  // const dispatch = useDispatch();
  const handleDelete=(id)=>{
    fetch(`https://gorest.co.in/public-api/users/${id}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
        'Authorization' : 'Bearer 0267546e52c13042d89d88cd52042860c06456aa005e2c30dcd6c4c9452c13eb'
      },
    })
    .then(res => res.json())
    .then((data)=>{
      console.log("deleted",data)
      window.location.reload()
    })

    // fetch("https://gorest.co.in/public-api/users")
    // .then((res) => res.json())
    // .then((users) => {
    //   dispatch(setAllUser(users.data));
    // });

  }
  const handleCancel=()=>{
    console.log("cancel handled")
  }
  return (
    <div className="deleteView">
      <h3>Are You sure You Wanna Delete {userDetail.name}?</h3>
      <button className="success" onClick={()=>{handleDelete(userDetail.id)}}>Yes</button> 
      <button className="danger" onClick={handleCancel}>No</button> 
    </div>
  );
};

export default DeleteView;
