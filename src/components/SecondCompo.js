import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/actions'

function SecondCompo() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  return (
    <>
      <h1>SecondCompo</h1>
      <h1>{account}</h1>
      <button onClick={() => dispatch(add(50))}>Add</button>
      <button onClick={() => dispatch(remove(50))}>Remove</button>
    </>
  )
}

export default SecondCompo
