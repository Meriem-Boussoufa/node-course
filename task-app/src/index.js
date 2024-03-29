const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//
// Without middleware: new request --> run route handler
//
// with middleware: new request --> do something --> run route handler
//


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    
    // const user = await User.findById('')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()