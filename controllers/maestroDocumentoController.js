const models = require('../models')
const MaestroDocumento = models.MaestroDocumento;

getMaestroDocumentos = async(req, res, next) =>{
    try{
        const usuarios = await MaestroDocumento.findAll();
        res.json(usuarios);
    }catch(error){
        res.send(error);
    }

}

getMaestroDocumento=async(req, res, next)=>{
    try{
        const usuario = await MaestroDocumento.findOne({
            where:{
                id:req.params.id
            }
        });
        res.send(usuario);
    }catch(error){
        res.send(error);
    }
}

setMaestroDocumento=async(req, res, next)=>{
    try{
        const usuarioActualizado = await MaestroDocumento.update(
            req.body,
            {
                where:{
                    id:req.params.id
                }
            }
        );
        res.json(usuarioActualizado);
    }catch(error){
        res.send(error);
    }
}

createMaestroDocumento = async(req, res, next)=>{
    try{
        const usuarios = await MaestroDocumento.create(req.body);
        res.json(req.query);
    }catch(error){
        res.send(error);
    }
}

deleteMaestroDocumento=async(req, res, next)=>{
    try{
        const MaestroDocumentoDeleted = await MaestroDocumento.destroy({
            where: {
                id:req.params.id
            }
        });
        res.json(pedidoDeleted);
    }catch(error){
        res.send(error);
    }
}

module.exports = {getMaestroDocumentos,getMaestroDocumento,createMaestroDocumento,setMaestroDocumento,deleteMaestroDocumento};