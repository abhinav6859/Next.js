import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({ //schema for "todo" according to the database
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    }
},{
    timeStamp: true
})

const TodoModel = mongoose.models.todo || mongoose.model('todo',TodoSchema) //singleton: avoids error if already created
export default TodoModel