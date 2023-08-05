const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
    );

async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log("Database connected.")
    }catch(error){
        console.error("Database connection failed")       
    }
}   

testConnection();

/* module.exports = (sequelize, DataType) => {

    const Articles = sequelize.define('Articles', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        code: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Articles.associate = (models) => {
        Articles.belongsTo(models.Users)
    };

    return Articles;
}; */