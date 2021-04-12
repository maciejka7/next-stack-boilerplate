import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircle, MinusCircle } from 'react-feather'
import { decrement, increment, incrementByCount } from '../../feature/counter/counterSlice'

interface Props {

}

const Counter = (props: Props) => {

    const dispatch = useDispatch()
    const count = useSelector((state: { counter: { value: number } }) => state.counter.value);
    const [byCount, setByCount] = useState(0)

    return (
        <div className="shadow p-4 w-full m-auto mt-4">
            <p className="text-center font-bold text-lg">React Redux Toolkit example: Counter:</p>
            <h2 className="text-center text-blue-600 text-4xl">{count}</h2>
            <section className="flex justify-around mt-2">
                <button onClick={() => dispatch(increment())} className="border shadow rounded bg-blue-500 p-2 text-white flex">Increment <PlusCircle /></button>
                <button onClick={() => dispatch(decrement())} className="border shadow rounded bg-blue-500 p-2 text-white flex">Decrement <MinusCircle /></button>
            </section>
            <section className="flex justify-center mt-2">
                <button onClick={() => dispatch(incrementByCount(byCount))} className="border shadow rounded bg-blue-500 p-2 text-white">Increment by</button>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>,) => setByCount(Number(e.target.value))} type="text" className="border shadow rounded p-2 text-blue-500" />
            </section>
        </div>
    )
}

export default Counter
