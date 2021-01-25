const express = require("express")
const mongoose = require("mongoose")
const routes = require("./route") // new

mongoose
	.connect("mongodb://localhost:27017/emp", { useNewUrlParser: true,useUnifiedTopology: true })
	.then(() => {
		const app = express()
		app.use("/api", routes) // new

		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})