const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer ({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.endsWith('.pdf')) {
            return cb(new Error('Please upload a PDF'))
        }

        cb(undefined, true)
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
    }

})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
}
)

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