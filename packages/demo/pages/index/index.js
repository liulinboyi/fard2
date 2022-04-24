import { useState } from 'fre'
import { h, render } from '../../fard'
import './index.styl'

function Counter () {
  const [count, setCount] = useState(0)

  function add() {
    debugger
    setCount(count + 1)
  }
  
  return (
    <view>
      <text class='text'>{count}</text>
      <button class='btn' onClick={() => add()}>+</button>
    </view>
  )
}

render(<Counter />)
