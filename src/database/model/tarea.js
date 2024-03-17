import mongoose,{Schema} from "mongoose";

const  tareaSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique:true,
        minLength:3,
        maxLength:50
    }
})

const Tarea = mongoose.model('tarea',tareaSchema);

export default Tarea;