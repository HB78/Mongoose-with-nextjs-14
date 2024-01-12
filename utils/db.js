import mongoose from'mongoose';
 
const connect = async () => {
    console.log('Connecting to MongoDB...');
    if(mongoose.connections[0].readyState) return;

    try {
        mongoose.connect(
            `mongodb://0.0.0.0:27017/nextjs`,
        )
            console.log('Connected to MongoDB')
    } catch (error) {
        console.log('error:', error)
        throw new Error('Error connecting to MongoDB');
    }
};

export default connect;