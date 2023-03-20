/* eslint-disable prettier/prettier */
// import FuncModel from '../models/func.model';

// class FuncController {
//   async store(req, res) {
//     // TODO: validade data from req.body
//     const {
//       name,
//       email,
//       cpf,
//       phone,
//       category,
//       salario,
//       frequency,
//       nascimento,
//     } = req.body;

//     try {
//       let FuncAlreadyExists = await FuncModel.findOne({ email: email });
//       if (FuncAlreadyExists)
//         return res.status(400).json({ message: 'E-mail ja cadastrado' });

//       FuncAlreadyExists = await FuncModel.findOne({ cpf: cpf });
//       if (FuncAlreadyExists)
//         return res.status(400).json({ message: 'CPF ja cadastrado' });

//       FuncAlreadyExists = await FuncModel.findOne({ phone: phone });
//       if (FuncAlreadyExists)
//         return res.status(400).json({ message: 'Telefone ja cadastrado' });

//       const CreatedFunc = await FuncModel.create(req.body);
//       console.log('Funcionario cadrastrado/criado: ' + CreatedFunc);
//       return res.status(200).json(CreatedFunc);
//     } catch (error) {
//       return res
//         .status(404)
//         .json({ message: 'Cadastro do Funcionario não funcionou' });
//     }
//   }

//   async index(req, res) {
//     try {
//       const Funcs = await FuncModel.find();
//       return res.status(200).json(Funcs);
//     } catch (error) {
//       return res.status(404).json({ message: 'Nenhum Funcionário encontrado' });
//     }
//   }

//   async show(req, res) {
//     try {
//       const { id } = req.params;
//       const Funcs = await FuncModel.findById(id);

//       if (!Funcs)
//         return res.status(404).json({ message: 'Funcionário não encontrado' });

//       return res.status(200).json(Funcs);
//     } catch (error) {
//       return res.status(404).json({ message: 'Verificar ID Funcionário' });
//     }
//   }

//   async update(req, res) {
//     // TODO: validate data from req.body
//     try {
//       const { id } = req.params;

//       const FuncUpdated = await FuncModel.findByIdAndUpdate(id, req.body);
//       if (!FuncUpdated)
//         return res.status(404).json({ message: 'Funcionário não encontrado' });

//       return res.status(200).json({ message: 'Funcionário atualizado' });
//     } catch (error) {
//       return res.status(404).json({ message: 'Verificar ID Funcionario' });
//     }
//   }

//   async destroy(req, res) {
//     try {
//       const { id } = req.params;

//       const FuncDeleted = await FuncModel.findByIdAndDelete(id);

//       if (!FuncDeleted)
//         return res.status(404).json({ message: 'Funcionário não encontrado' });

//       return res.status(200).json({ message: 'Funcionário deletado' });
//     } catch (error) {
//       return res.status(404).json({ message: 'Verificar ID Funcionario' });
//     }
//   }
// }

// export default new FuncController();
