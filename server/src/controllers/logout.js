const UserLogout = (req,res)=>{
    res.clearCookie("token");
    return res.json({message:"logout success"});
}

module.exports = UserLogout;

