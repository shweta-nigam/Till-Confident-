import express from "express"
import cookieParser from "cookie-parser"

export const app = express()



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



// you can not do ----> export default const app = express()
// export default expects a value or expression, not a declaration

//note: express is a function because -- Node.js HTTP server expects:
// http.createServer((req, res) => {})
// therefore --- http.createServer(app)
