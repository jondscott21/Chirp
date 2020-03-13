import React from 'react'

const Login = () => {
    return(
        <div>
            <form>
                <input type='email' name='email' />
                <input type='password' name='password' />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Login