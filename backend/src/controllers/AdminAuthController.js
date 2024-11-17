const jwt = require('jsonwebtoken');
const Admin = require('../database/model/admin.db');
const { JWRKEY } = require('../config/env');
require('dotenv').config();

const login = async (req, res) => {

  const { email, password } = req.body;
  const user = await Admin.findOne({ where: { email } });


  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }


  if (user.password != password) {
    return res.status(400).json({ message: 'Incorrect password' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWRKEY, { expiresIn: '10h' });

  return res.json({ token });

};



const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await Admin.create({ email, password });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { login, register };
