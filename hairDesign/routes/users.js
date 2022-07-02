const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

router.get('/signup', (req,res)=>{
  res.render('site/signup');
})

router.post('/signup', (req,res)=>{
  User.create(req.body, (error, user)=>{
    res.redirect('/')

  })
})


router.get('/login', (req,res)=>{
  res.render('site/login');
})

  module.exports = router
