import express from "express"

export const app = express()

app.json()
app.urlencoded()
app.use(cookieParser())



// you can not do ----> export default const app = express()
// export default expects a value or expression, not a declaration
