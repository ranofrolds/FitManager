import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FuncSchema = new Schema({
    id: ObjectId,
    name: String,
    category: String,
    salario: String,
    frequency: Int32Array,
    nascimento: String,
    email: String, 
    cpf: String,
    phone: String
});

const FuncModel = mongoose.model('Funcionario', FuncSchema);

export default FuncModel;