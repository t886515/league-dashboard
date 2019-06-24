const express = require('express');
const request = require('request');
const router = app => {
  //TODO what's the benefits of using express.Router()?
  const apiRoutes = express.Router();
  app.use('/api', apiRoutes);

  const authRoutes = express.Router();
  // const todoRoutes = express.Router();
  // const budgetRoutes = express.Router();

  apiRoutes.use('/getSummonerInfo', authRoutes); //require client to hit /api/auth for auth actions
  // apiRoutes.use('/todo', todoRoutes); //hit api/todo
  // apiRoutes.use('/budget', budgetRoutes);

  //Routes for
};

module.exports = router;
