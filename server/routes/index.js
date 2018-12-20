const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
router.get('/swipeData',(req,res)=>{
    pool.query('select * from swipe ',[],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
router.get('/navData',(req,res)=>{
    pool.query('select * from type',[],(err,result)=>{
        if(err) throw err
        res.send(result)        
    })
})
router.get('/indexList',(req,res)=>{
    pool.query(' select * from menu where recom=1',[],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
router.get('/typeInfo',(req,res)=>{
    var type=req.query.typename;
    pool.query(' select * from menu where type=? ',[type],(err,result)=>{
        if(err) throw  err;
        res.send(result)    
    })
})
module.exports=router;