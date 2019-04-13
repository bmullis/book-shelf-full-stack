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

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (err) {
    res.status(400).send();
  };
});

router.post('/user/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    req.user.save()
    res.send()
  } catch (err) {
    res.status(500).send()
  }
})

router.post('/user/logout-all', auth, async (req, res) => {
  try {
    req.user.tokens = []
    req.user.save()
    res.send()
  } catch (err) {
    res.status(500).send()
  }
})

router.get('/user', auth, async (req, res) => {
  res.send(req.user)
})

module.exports = router;