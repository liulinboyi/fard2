import { useState } from 'fre'
import { h, render, api, context } from '../../fard'

function App () {
  return h(
    'view',
    {
      class: 'app'
    },
    [h(Counter, { msg: 'hello fard' }), h(Child, null)]
  )
}

function Counter ({ msg }) {
  const [count, setCount] = useState(0)

  return h('view', {}, [
    h('view', {}, [
      h(
        'text',
        {
          class: 'text'
        },
        count
      )
    ]),
    h(
      'button',
      {
        class: 'button',
        onClick: () => {
          setCount(count + 1)
          console.log(context)
        }
      },
      '+'
    ),
    h(
      'text',
      {
        class: 'footer'
      },
      msg
    )
  ])
}

function Child () {
  return h('view', {}, [h(Three, null), h('view', {}, [h('text', {}, '222')])])
}

function Three () {
  return h('view', {}, [h('text', {}, '111')])
}

render(h(App, null))
