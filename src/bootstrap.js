module.exports = async()=>{
    const Tweet= require('./models/Tweet');
    const User = require('./models/User');
    const errHandler = (err)=>{
        console.log("Error:",err);
    }
    //Defining asscociation
    User.hasMany(Tweet,{as:"Tweets",foreignKey:'userId'}); //{as:...} is optional, without that it will automatically assign the foreign key by joining the two tables with userId
    Tweet.belongsTo(User,{as:"User"});
    //create fake data returns a promise to create data, else throws an error
   const user = await User.create({username:"alex",password:"abc123"}).catch(errHandler);
   console.log(user); 
   const tweet = await Tweet.create({content:'This is actually the tweet content',userId : user.id}).catch(errHandler);
    
  const users = await User.findAll({where:{username:"alex"},include:[{model:Tweet,as:"Tweets"}]})
}