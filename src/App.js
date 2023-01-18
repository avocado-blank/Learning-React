import { useSelector, useDispatch } from 'react-redux'
import FirstCompo from './components/FirstCompo'
import SecondCompo from './components/SecondCompo'
import { useRef } from 'react'
import { add, remove, insert, drop } from './store/actions'

function App() {
  const account = useSelector((state) => state.account)
  const users = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const nameRef = useRef()
  const phoneRef = useRef()

  const userHandler = (e) => {
    e.preventDefault()
    let user = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    }
    dispatch(insert(user))
    nameRef.current.value = ''
    phoneRef.current.value = ''
  }

  return (
    <div className="App">
      {users.map((user) => (
        <div>
          {user.name} : {user.phone}
        </div>
      ))}
      <form onSubmit={userHandler}>
        <input type="name" ref={nameRef}></input>
        <input type="phone" ref={phoneRef}></input>
        <input type="submit" />
      </form>
      <h1>App</h1>
      <h1>{account}</h1>
      <button
        onClick={() => {
          dispatch(add(50))
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(remove(50))
        }}
      >
        Remove
      </button>
      <hr />
      <FirstCompo />
      <hr />
      <SecondCompo />
    </div>
  )
}

export default App
