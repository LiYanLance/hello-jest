import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(preCount => preCount + 1)
  return <button onClick={incrementCount}>{count}</button>
}

export default Counter
