


async function register(req,res){
    res.json('register route')
}

async function login(req,res){
    res.json('login route')
};

async function getUser(req,res){
    res.json('getUser route')
};

async function updateUser(req,res){
    res.json('updateUser route')
};

async function generateOTP(req,res){
    res.json('generateOTP route')
};

async function verifyOTP(req,res){
    res.json('verifyOTP route')
};

async function createResetSession(req,res){
    res.json('createresetsession route')
};

async function resetPassword(req,res){
    res.json('resetPassword route')
};


module.exports={
    register,
    login,
    getUser,
    updateUser,
    generateOTP,
    verifyOTP,
    createResetSession,
    resetPassword
}