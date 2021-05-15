import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";
export default function UserList() {
    let users = useContext(UserContext)
let [userList,setuserList] = useState([])
useEffect ( async()=>{

    //fetching the data when user list gets loaded
    let usersap = await fetch ("https://5ff9537617386d0017b51c4a.mockapi.io/test/users")
    let userDatas = await usersap.json();
    console.log(userDatas)
    setuserList([...userDatas])
   
},[])

    return <>
        <h1 class="h3 mb-2 text-gray-800">Tables</h1>
        <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p>

        <Link to="usercreate">create User</Link>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
              {
                  userList.length > 0 ?<div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>LastName</th>
                              <th>Email</th>
                              <th>Password</th>
                              <th>Action</th>
                              <th>Remove</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr>
                              <th>Name</th>
                              <th>LastName</th>
                              <th>Email</th>
                              <th>Password</th>
                              <th>Action</th>
                              <th>Remove</th>
                          </tr>
                      </tfoot>
                      <tbody>
                          {
                              userList.map((obj) => {

                                  return <>
                                      <tr>
                                          <td>{obj.firstName}</td>
                                          <td>{obj.lastName}</td>
                                          <td>{obj.email}</td>
                                          <td>{obj.password}</td>
                                          <td>
                                              <Link to={`/useredit/${obj.id}`}>Edit</Link>
                                          </td>
                                          <td>
                                              <Link to={`/userdelete/${obj.id}`}>delete</Link>
                                          </td>
                                      </tr>
                                  </>
                              })
                          }
                          <tr>
                              <td>Tiger Nixon</td>
                              <td>Nixon</td>
                              <td>tiger@gmail.com</td>
                              <td>123321tiger</td>

                           
                              
                          </tr>


                      </tbody>
                  </table>
              </div> :<>
              <h1>Loading....</h1>
              </>
              }
            </div>
        </div>

    </>
}