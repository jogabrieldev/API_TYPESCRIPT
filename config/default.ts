const dbUser= process.env.DB_USER
const dbPass= process.env.DB_PASSWORD
export default{
    port:3000,
    env:"development",
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.qnfaqfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
}