import { connect } from 'mongoose';

(async () => {
    try {
        const db = await connect("mongodb+srv://libadmin:mmJreCgY8GT2XoGL@cluster0.mj3papq.mongodb.net/liblaplaza?retryWrites=true&w=majority")
        console.log("DB connected to", db.connection.name);

    } catch (error) {
        console.error("Error connecting to database", error);
    }
})();