const Sequelize=require('sequelize');
const sequelize=new Sequelize('staticexp','root','Banarasi#0542',{
    dialect:'mysql',
    host:"localhost"
})



try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports=sequelize;