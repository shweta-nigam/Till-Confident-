import { app } from "./src/app";

const PORT = process.env.PORT ?? 8080



const start = async () => {

    await connectDB()
    app.listen(PORT, ()=> {
        console.log(`Server is running at the ${PORT} in ${process.env.NODE_ENV} mode`);
        
    })
}

start().catch((err) => {
    console.error("Failed to start server" , err);
    process.exit(1)   // gracefully exist the program if failed to connect to db
    
})