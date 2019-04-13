const express = require('express');
const User = require('../models/user');
const sendWelcomeMessage = require('../helpers/emails');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/user', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
    sendWelcomeMessage(user);
  } catch (err) {
    res.status(400).send(err);
  };
});

module.exports = router;