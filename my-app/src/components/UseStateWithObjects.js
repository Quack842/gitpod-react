import React, {useState} from 'react'

function UseStateWithObjects() {
    const [userName, setName] = useState({firstName: "", lastName: ""});
  return (
    <div>
        <form>
            <input 
                type="text"
                value={userName.firstName}
                onChange={customEvent => setName({
                    ...userName,
                    firstName: customEvent.target.value
                })} />
                <input 
                    type="text"
                    value={userName.lastName}
                    onChange={customEvent => setName({
                        ...userName,
                        lastName: customEvent.target.value
                })} />
                <h2>{JSON.stringify(userName)}</h2>
        </form>
    </div>
  )
}

export default UseStateWithObjects