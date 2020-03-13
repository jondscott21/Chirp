import React from 'react'

const Signup = () => {
    return(
        <div>
            <form>
                <input type='text' name='username' />
                <input type='email' name='email' />
                <input type='password' name='password' />
                <input type='password' name='confirm-password' />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Signup