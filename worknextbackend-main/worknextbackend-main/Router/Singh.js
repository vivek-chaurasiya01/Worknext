const express=require('express')
const { SingUp, Login, ChangePassword } = require('../Controler/UserRegter')
const router=express.Router()

router.post("/Singh",SingUp)
router.post("/login",Login)
router.post("/Change",ChangePassword)

module.exports=router