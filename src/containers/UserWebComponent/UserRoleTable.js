import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {UserRoleMainColumns} from './UserRoleMainColumns';


export default class UserRoleTable extends Component{
  constructor(props){
    super();
      this.state =  {data:[
      {sid:1,role:'ACE',created_by:'Supakorn Lelasornchai', created_datetime:'2017-07-01 08:00:00'},
      {sid:2,role:'CCD',created_by:'Supakorn Lelasornchai', created_datetime:'2017-07-01 08:22:00'},
      {sid:3,role:'GSP',created_by:'Supakorn Lelasornchai', created_datetime:'2017-07-01 08:55:00'},
      ]}
  }

  render(){
    return(
      <div>
        <div>
          <h2>Role Management</h2>
        </div>
        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={this.state.data}
            columns={UserRoleMainColumns}
             showPagination={false}
          />
      </div>
    </div>
    )
  }
  }
