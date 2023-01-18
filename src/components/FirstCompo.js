import { useSelector } from 'react-redux'

function FirstCompo() {
  const account = useSelector((state) => state.account)
  return (
    <>
      <h1>FirstCompo</h1>
      <h1>{account}</h1>
    </>
  )
}

export default FirstCompo
