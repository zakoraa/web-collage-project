const UserLogout = (req,res)=>{
    // console.log("BBBABBAAB",res.clearCookie("token"));
    res.clearCookie("token");
    return res.json({message:"logout success"});
}

module.exports = UserLogout;

