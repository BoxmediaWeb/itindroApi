const models = require('../models')
const DetalleDocumento = models.DetalleDocumento;
const MaestroDocumento = models.MaestroDocumento;

getDetalleDocumentos = async(req, res, next) =>{
    try{
        const usuarios = await DetalleDocumento.findAndCountAll({include:[MaestroDocumento]});
        res.json(usuarios);
    }catch(error){
        res.send(error);
    }

}

getDetalleDocumento=async(req, res, next)=>{
    try{
        const usuario = await DetalleDocumento.findOne({
            where:{
                id:req.params.id
            }
        },{include:[MaestroDocumento]});
        res.send(usuario);
    }catch(error){
        res.send(error);
    }
}

setDetalleDocumento=async(req, res, next)=>{
    try{
        const usuarioActualizado = await DetalleDocumento.update(
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

createDetalleDocumento = async(req, res, next)=>{
    try{
        const usuarios = await DetalleDocumento.create(req.body);
        res.json(req.query);
    }catch(error){
        res.send(error);
    }
}

deleteDetalleDocumento=async(req, res, next)=>{
    try{
        const DetalleDocumentoDeleted = await DetalleDocumento.destroy({
            where: {
                id:req.params.id
            }
        });
        res.json(pedidoDeleted);
    }catch(error){
        res.send(error);
    }
}

module.exports = {getDetalleDocumentos,getDetalleDocumento,createDetalleDocumento,setDetalleDocumento,deleteDetalleDocumento};