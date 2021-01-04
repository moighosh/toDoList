const express = require('express');
const router = express.Router();
const toDo = require('../models/todo');

//retrieving data
router.get('/todo', (req, res, next)=>{
  toDo.find(function(err, todo){
    res.json(todo);
  });
});

//adding data
router.post('/task', (req, res, next)=>{
  //logic to add data
  let newTask = new toDo({
    date: req.body.date,
    title: req.body.title,
    desc: req.body.desc
  });

  newTask.save((err, task)=>{
    if(err){
      res.json({msg: 'Failed to add new Task due to following error -----> '+err});
    }
    else{
      res.json({msg: 'Task added succesfully'});
    }
  })
});

//deleting data
router.delete('/todo/:id', (req, res, next)=>{
  //logic to delete data
  toDo.remove({_id: req.params.id}, function(err, result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});

module.exports = router;
