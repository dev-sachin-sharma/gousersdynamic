import React,{useEffect} from "react";
import TableData from "./TableData";
import styles from "./TableSection.module.css";

const TableSection = () => {

    useEffect(()=>{
        
    },[])
  return (
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
  );
};

export default TableSection;
