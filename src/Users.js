import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Users() {
    const [users,setUser]=useState([]);
    useEffect(()=>{
        setUser([
            {
                id : 1,
                name: "Mani",
                email : "123@gmail.com",
                country : "India",
                state : "TamilNadu",
                city : "Madurai",
                phone : "1234567890",
                DOB : "12/10/1998",
                gender : "male"
            },
            {
                id : 2,
                name: "Kishore",
                email : "456@gmail.com",
                country : "India",
                state : "TamilNadu",
                city : "chennai",
                phone : "1234567890",
                DOB : "12/10/1998",
                gender : "male"
            }
        ])
    },[])
  return (
    <div class="container-fluid"> 
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/User_create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Users</Link>
            </div>
                            <div class="card shadow mb-4">
                            <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                            </div>
                            <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                        <tr>
                                        <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Phone No</th>
                                            <th>Date of Birth</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Phone No</th>
                                            <th>Date of Birth</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                   {users.map((user)=>{
                                    return <tr>
                                    <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.country}</td>
                                            <td>{user.state}</td>
                                            <td>{user.city}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.DOB}</td>
                                            <td>{user.gender}</td>
                                            <td>
                                                <Link className='btn btn-primary' to={`/user/${user.id}`}>View</Link>
                                            </td>
                                        </tr>
                                  
                                })}    
                                        
                                    </tbody>
                            </table>
                            </div>
                            </div>
                            </div>
    </div>
  )
}

export default Users