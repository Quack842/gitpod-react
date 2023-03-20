import React, {useState} from 'react'

function ControlledFromHooks() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('website');
  const [comments, setComments] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, category, comments)
  }
  return (
    <div>
      <h2>Please Fill Out the Form Below</h2>
      <hr />
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor='id-name'>Your Name: </label>
              <input 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  id='id-name' 
                  type='text' 
                  name='name'/>
          </div>
          <div>
              <label htmlFor='id-category'>Query Category: </label>
              <select 
                  id='id-category' 
                  name='category' 
                  onChange={(e) => setCategory(e.target.value)}
                  value={category} >
                  <option>Website Issue</option>
                  <option>Order Issue</option>
                  <option>General Inquiry</option>
              </select>
          </div>
          <div>
              <label htmlFor='id-comments'>Comments: </label>
              <textarea 
                  id='id-comments' 
                  name='comments' 
                  onChange={(e) => setComments(e.target.value)}
                  value={comments} />
          </div>
          <hr/>
          <input type='submit' value='Submit' />
      </form>
  </div>
  )
}

export default ControlledFromHooks