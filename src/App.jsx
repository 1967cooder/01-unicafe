import { useState } from "react"




// Funkcionalen Компонент за един ред статистика. 
// ({ text, value }) е деструктуриране на props: очакваме да ни подадат text и value.
const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  )
}

// Компонент, koito показва всички редове от статистиката.
const Statistics = ({good, neutral, bad}) => {
  console.log(good, neutral, bad);   

  

//Пресмятаме производни стойности:
//total = objs broi glasove
//average: (добри − лоши) / общо. Ако общо е 0, връщаме 0, за да избегнем деление на 0.
//positive: процент положителни = good / total * 100 (или 0 ако total е 0).
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={positive.toFixed(1) + " %"} />
    </>
  )
}

// Компонент, който решава какво да покаже:
// Ако няма подадено нито едно гласуване (total = 0), показва "No feedback given".
// Ако има гласове, показва Statistics.
 const History = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if ( total === 0) {
    return <div>No feedback given</div>
  }
  return <Statistics good={good} neutral={neutral} bad={bad}/>
 }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
           
       <h1>Give feedback</h1>
      <button onClick= {() => setGood(good +1)}>good</button>
      <button onClick= {() => setNeutral(neutral+1)}>neutral</button>
      <button onClick= {() => setBad(bad+1)}>bad</button>

      <h1>Statistics</h1>
      <History good={good} neutral={neutral} bad={bad} /> 
      
    </div>
  )
}


/*
//toinen vaihtoehto
// Компонент за показване на една стойност
const Display = ({ text, value }) => <p>{text}: {value}</p>

// Компонент за бутон
const Button = ({ onClick, text }) =>  <button onClick={onClick}>{text}</button>

// Компонент за всички статистики
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  console.log({ good, neutral, bad, total })

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={total} />
      <Display text="average" value={average.toFixed(2)} />
      <Display text="positive" value={positive.toFixed(1) + " %"} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("good before:", good)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    console.log("neutral before:", neutral)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    console.log("bad before:", bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
------------------------------------Hyvä---------
//toinen vaihtoehto
//Компонент за един ред статистика 
const StatisticLine = ({ text, value }) => { 
return ( <p>{text}: {value}</p>) 
} 
// Компонент за всички статистики 
const Statistics = (props) => { 
  console.log(props) // -> вижда се {good, neutral, bad, total} в конзолата 
  
  const { good, neutral, bad, total } = props 
  const average = total === 0 ? 0 : (good - bad) / total 
  const positive = total === 0 ? 0 : (good / total) * 100 
  
  if (total === 0) { 
  return <p>No feedback given</p> 
  } 
  return ( 
  <> 
  <StatisticLine text="good" value={good} /> 
  <StatisticLine text="neutral" value={neutral} /> 
  <StatisticLine text="bad" value={bad} /> 
  <StatisticLine text="all" value={total} /> 
  <StatisticLine text="average" value={average.toFixed(2)} /> 
  <StatisticLine text="positive" value={positive.toFixed(1) + " %"} /> 
  </>
  ) 
  } 
  const App = () => { 
    const [good, setGood] = useState(0)
     const [neutral, setNeutral] = useState(0) 
     const [bad, setBad] = useState(0) c
     onst [total, setTotal] = useState(0) 
     
     const handleGood = () => { 
      setGood(good + 1) 
      setTotal(good + 1 + neutral + bad) }
      
      const handleNeutral = () => { 
        setNeutral(neutral + 1) 
        setTotal(good + neutral + 1 + bad) } 
        
        const handleBad = () => { setBad(bad + 1) 
        setTotal(good + neutral + bad + 1) } 
        
        return ( 
        <div> 
        <h1>Give feedback</h1>
         <button onClick={handleGood}>good</button> 
         <button onClick={handleNeutral}>neutral</button> 
         <button onClick={handleBad}>bad</button> 
         
         <h1>Statistics</h1> 
         <Statistics good={good} neutral={neutral} bad={bad} total={total} 
         /> 
         </div> 
         ) 
         }

*/


export default App

