const User = require('../../models/User')


const getUser = async (username) => {
    const data = await User.findOne({ username })
    if(!data){
        return {message: "User not found"}
    }else{
        return data;
    }
}

module.exports = getUser;