module.exports= (req, res, next)=>{
    if(!req.isManager){
        return res.status(401).redirect('/')
    }
    next();
}