import express, { type Application } from "express"

export async function createApp() {
    const app: Application = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use("/health", (req, res) => {
        return res.status(200).json({ health: true })
    })

    return app
}

