import { useState, useEffect } from 'react'
import { Loader } from 'react-feather'
import axios from 'axios'
import { ExampleData } from '../../types/mockData'

const Techs = () => {

    const [data, setData] = useState<ExampleData[] | []>([])
    useEffect(() => {
        axios.get('/data')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        return () => {
            setData([])
        }
    }, [])

    return (
        <section className="mt-4 p-2 shadow w-full">
            <h2 className="font-bold text-center ">MSW Example: Techonolgy used </h2>
            {data.length ?
                data.map(({ id, name }: ExampleData) => <p className="text-blue-500 text-bold p-2" key={id}>{name}</p>)
                : <div className="w-auto m-auto flex justify-center"> <Loader className="animate-spin" /> <p> Loading ...</p> </div>}

        </section>
    )
}

export default Techs
