import { scheduleWork, options } from 'fre'
function render (vnode) {
  const rootFiber = {
    tag: 'root',
    props: { children: vnode }
  }
  scheduleWork(rootFiber) // 进入渲染流程
}

options.commitWork = fiber => {
  console.log(fiber.children)
}

function App(){
  return (
    <text>hello world!</text>
  )
}

render(<App />)

// Page({
//   data: {
//     msg: 'Hello World'
//   }
// })
