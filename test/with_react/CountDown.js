import React, {useEffect, useState} from "react"

const CountDown = () => {
  let [seconds, setSeconds] = useState(10)
  
  useEffect(() => {
    setTimeout(() => setSeconds((preSeconds) => preSeconds - 1), 1000)
  }, [seconds])
  
  return (
    <p className={seconds <= 3 ? "red" : ""}>{seconds} seconds left</p>
  )
}

export default CountDown
