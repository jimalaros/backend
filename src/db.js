const mysql = require("mysql2/promise")
const { dbHost, dbPort, dbUser, dbPassword, dbName } = require("./config").config;

const connection = async ()=>{
    const conn = await mysql.createConnection({
        host:dbHost,
        port:dbPort,
        user:dbUser,
        password:dbPassword,
        database:dbName,
    })
    return conn;
}

exports.query = async (sql,values)=>{
    try {
        const conn = await connection();
        const result = await conn.query(sql,values);
        
        return {
            success:true,
            data:result[0]
        }
    } catch (error) {
        return {
            success:false,
            message:error.message
        }
    }
}

//setTimeout(query, 30000);