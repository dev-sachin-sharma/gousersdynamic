import React,{useEffect} from "react";
import TableData from "./TableData";
import styles from "./TableSection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setAllUser } from "../../redux/actions/userAction";
import {BeatLoader} from 'react-spinners'

const TableSection = () => {
 const usersDetails = useSelector((state) => state.allUsers.users);
  usersDetails.length > 0 ? console.log("stop loader") : console.log("load loaders")
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users")
      .then((res) => res.json())
      .then((users) => {
        dispatch(setAllUser(users.data));
      });
  }, []);


  return usersDetails.length > 0 ? (
    <section>
      <h1 className={styles.tableHeading}>User Details</h1>
      <div className={styles.tblHeader}>
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>View</th>
              <th>Edit </th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.tblContent}>
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
          <TableData/>
          </tbody>
        </table>
      </div>
    </section>
  ) : (
    <>
   <div style={{marginTop:"100px"}}><BeatLoader size={50} color="white"/></div>
    </>
  )
};

export default TableSection;

