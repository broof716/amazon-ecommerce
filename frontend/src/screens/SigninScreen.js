import React from 'react'
import { Link } from 'react-router-dom'

export default function SigninScreen() {

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: signin action
  }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
          <div>
            <label />
            <div>
              New customer? {' '}
              <Link to="/register">Create your account</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
