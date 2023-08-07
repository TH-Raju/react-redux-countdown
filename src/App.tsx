import { RootState } from "./redux/Store"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"

function App() {

  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <button className="p-5 ml-5 mt-2 border border-green-400"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button className="p-5 ml-5 border border-green-400"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment 5
      </button>
      <div className="p-5 ml-10 text-3xl">
        {count}
      </div>
      <button className="p-5 ml-5 border border-red-400"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

    </div>
  )
}

export default App
