import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log("count 1 effect")
        document.title = count;
        //  vv The [count] will insure that only this is update, if there are more, it should have somehting similuar i.e
        // document.title = age;}, [age]);
    }, [count]);
    useEffect(() => {
      console.log("Creating Timer");
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000);
        // Clears the previos interval, so it is cleaner code and code does not skip
        return () => {
          clearInterval(interval);
        }
    }, []);
  return (
    <div>
        <button onClick={
            () => setCount (count => count + 1)
            }>
            Increment Count ({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter