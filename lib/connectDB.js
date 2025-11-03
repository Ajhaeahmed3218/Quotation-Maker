let db;
export const connectDB = async () => {
    if (db) return db;

    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient(uri, {
            serverApi :{
                version: '1',
                strict: true,
                deprecationErrors: true,
            }
        });
    }catch (error) {
        console.error("Failed to connect to the database", error);
     
    }
}