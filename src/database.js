import { connect } from 'mongoose';

(async () => {
    try {
        const db = await connect(process.env.MONGO_DB_CONNECTION_STRING)
        console.log("DB connected to", db.connection.name);

    } catch (error) {
        console.error("Error connecting to database", error);
    }
})();