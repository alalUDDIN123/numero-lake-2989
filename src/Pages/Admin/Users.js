import React from 'react'
import style from "../../styles/Admin/users.module.css"
import { UsersData } from './User'
import { UserTable } from './UserTable'


function Users() {
  return (
    <div className={style.container}>
       <h1>Users who are signed up</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Avator</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {UsersData.map((item, index) => (
            <UserTable
              index={index + 1}
              key={index}
              name={item.name}
              avator={item.avator}
              email={item.email}

            />
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default Users
