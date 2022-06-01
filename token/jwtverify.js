const jwt=require('jsonwebtoken');

const verify=(req,res,next)=>{
    const authorizationHeader=req.headers['authorization'];
        if(authorizationHeader){
            const token=authorizationHeader.split(' ')[1];
            if(token){
                try{
                    var decoded=jwt.verify(token,'secret123');
                    next();
                }
                catch(error){
                    res.json({
                        error:error.toString(),
                    });
                }
            }else{
                res.json({
                    message:'Token Missing'
                })
            }
        }
        else{
            res.json({
                message:'authorizationHeader Missing'
            })
        }
}

module.exports=verify;