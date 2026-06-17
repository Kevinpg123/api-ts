import express, {Application, Request, Response} from 'express'
import router from './routes/index'

const app: Application = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'API funcionando'})
})

app.use('/api', router)

export default app