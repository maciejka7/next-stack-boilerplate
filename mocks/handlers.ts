import { rest } from 'msw';
import { ExampleData } from '../types/mockData'

const exampleData: ExampleData[] = [
    {id: 1, name: 'Reactjs'},
    {id: 2, name: 'Nextjs'},
    {id: 3, name: 'TypeScript'},
    {id: 4, name: 'React Redux'},
    {id: 5, name: 'React Toolkit'},
    {id: 6, name: 'Tailwind'},
    {id: 7, name: 'MSW'},
    {id: 8, name: 'Axios'},
    {id: 9, name: 'React Feather Icons'},

]

export const handlers = [
    rest.get('/data', ( req , res, ctx ) => {
        return res(ctx.delay(2000), ctx.status(200), ctx.json(exampleData))
    })
]