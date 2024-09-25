import { useState } from "react"
import "./App.css"

function App() {
  const [first, setFirst] = useState('')
  const [operator, setOperator] = useState('')
  const [second, setSecond] = useState('')
  const [result, setResult] = useState('')

  const addFirst = (num) => setFirst(first + num)
  const addSecond = (num) => setSecond(second + num)
  const addOperator = (op) => setOperator(op)

  function clearFirst(){
    setFirst('')
    setResult('')
  }

  function clearSecond(){
    setSecond('')
    setResult('')
  }

  function calculate(first, operator, last){
    let expression = first.toString() + operator.toString() + last.toString()
    let res = eval(expression)

    console.log(expression)
    console.log(res)

    setResult(res)
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          <button onClick = {() => addFirst('1')}>1</button>
          <button onClick = {() => addFirst('2')}>2</button>
          <button onClick = {() => addFirst('3')}>3</button>
          <button onClick = {() => addFirst('4')}>4</button>
          <button onClick = {() => addFirst('5')}>5</button>
          <button onClick = {() => addFirst('6')}>6</button>
          <button onClick = {() => addFirst('7')}>7</button>
          <button onClick = {() => addFirst('8')}>8</button>
          <button onClick = {() => addFirst('9')}>9</button>
          <button onClick = {() => addFirst('0')}>0</button>
          <button onClick={() => clearFirst()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick = {() => addOperator('+')}>+</button>
          <button onClick = {() => addOperator('-')}>-</button>
          <button onClick = {() => addOperator('*')}>*</button>
          <button onClick = {() => addOperator('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{second}</p>
        <div className="numbers">
          <button  onClick = {() =>  addSecond('1')}>1</button>
          <button  onClick =  {() => addSecond('2')}>2</button>
          <button  onClick =  {() => addSecond('3')}>3</button>
          <button  onClick = {() =>  addSecond('4')}>4</button>
          <button  onClick = {() =>  addSecond('5')}>5</button>
          <button  onClick = {() =>  addSecond('6')}>6</button>
          <button  onClick = {() =>  addSecond('7')}>7</button>
          <button  onClick = {() =>  addSecond('8')}>8</button>
          <button  onClick = {() =>  addSecond('9')}>9</button>
          <button  onClick = {() =>  addSecond('0')}>0</button>
          <button onClick={() => clearSecond()}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick = {() => calculate(first, operator, second)}>=</button>
        </div>
      </div>
    </div>
  )

}

export default App
