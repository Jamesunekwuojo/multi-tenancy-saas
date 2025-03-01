import mongose from 'mongoose';

export default connectDB = async () => {
    try {
        await mongose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        });
        console.log('Database connected');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}