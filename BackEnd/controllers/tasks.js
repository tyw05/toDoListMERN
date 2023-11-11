const tasksRouter = require('express').Router()
const Task = require('../models/task')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

tasksRouter.get('/', async (request, response) =>{
    const tasks = await Task.find({}).populate('user')
    response.json(tasks)
})

tasksRouter.post('/', async (request, response, next) => {
    try{
    const body = request.body
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    console.log(decodedToken.id)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
      }

    const user = await User.findById(decodedToken.id)


    const task = new Task({
        content: body.content,
        finished: body.finished,
        user: user.id
    })

    const result = await task.save()
    user.tasks = user.tasks.concat(result._id)
    await user.save()
    response.status(201).json(result)
    } catch (exception) {
    next(exception)
  }
})

tasksRouter.delete('/:id', async (request, response, next) => {
    try{
    const body = request.body
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    console.log(decodedToken.id)
     if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
      }
    
    const task = await Task.findById(request.params.id)

    if (task.user.toString() === decodedToken.id){
        await Task.findByIdAndRemove(request.params.id)
        const originalTaskInUser = await User.findById(decodedToken.id)
        const newUserTask = originalTaskInUser.tasks.filter(taskID => taskID.toString() !== request.params.id)
        await User.findByIdAndUpdate(decodedToken.id, { tasks: newUserTask }, { new: true })
        response.status(204).end()
    }
    else {
        return response.status(401).json({ error: 'user id does not match' })
      }
    }
    catch(exception){
        next(exception)
    }
})

tasksRouter.put('/:id', async (request, response, next) => {
    try{
    const body = request.body
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
      }
    const task = await Task.findById(request.params.id)

    if (task.user.toString() === decodedToken.id) {
        const updatedTask = await Task.findByIdAndUpdate(request.params.id, body, { new: true })
        response.json(updatedTask)
      }
      else {
        return response.status(401).json({ error: 'user id does not match' })
      }
    }
    catch(exception){
        next(exception)
    }
})

module.exports = tasksRouter
