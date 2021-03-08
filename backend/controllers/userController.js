const users = require('../data/users')
const generateToken = require('../utils/generateToken.js');
// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = (req, res) => {
  if (req.query && req.query.from=='google') {
   
    const { email, name, googleId } = req.body
    res.json({
      name: name,
      email: email,
      token: generateToken(googleId)
    })
  } else {
    //console.log(req.body);
    const { email, password } = req.body
    
    if(email == ''){
      res.status(401)
      throw new Error('Email required')
    }
    if(password == ''){
      res.status(401)
      throw new Error('Password required')
    }
    const user = users.find(p => p.email == email)
    //console.log(user);
    if (user && user.password == password) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id)
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  }
}
module.exports = authUser