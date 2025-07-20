const bycrypt = require('bcrypt')
require('dotenv').config({ path: './.env' });
const getUser=require('../actions/userActions/getUser');
const registerUser = require('../actions/userActions/registerUser');

const login = async (username,password) => {
    const result=await getUser(username);
    if(result.message){
        return result;
    }
  const isMatch = await bycrypt.compare(password, result.password);
  if (!isMatch) {
    return { message: 'Invalid password' }
  }else{
    return result;
  }
}

const register = async (username,email,password) => {
    if (!username || !password || !email) {
        return { message: 'All fields are required' }
    }
   
    const hashPassword = await bycrypt.hash(password, Number(process.env.salt));
    const result = await registerUser(username, email, hashPassword);
    
    return { result: 'User registered successfully', item: result };
}

module.exports = {
    login,register
}
