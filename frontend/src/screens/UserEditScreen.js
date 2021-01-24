import React, { useState } from 'react'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function UserEditScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
  }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit User {name}</h1>
        </div>
        {laoding ? (
          <LoadingBox></LoadingBox>
        ) : error ? ( 
          <MessageBox variant="danger">{error}</MessageBox>
        ) : ( 
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Enter name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="isSeller">Is Seller</label>
              <input 
                id="isSeller" 
                type="checkbox" 
                checked={isSeller} 
                onChange={(e) => setIsSeller(e.target.checked)}
              ></input>
            </div>
            <div>
              <label htmlFor="isAdmin">Is Admin</label>
              <input 
                id="isAdmin" 
                type="checkbox" 
                checked={isAdmin} 
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>
            <div>
              <button type="submit" className="primary">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}
