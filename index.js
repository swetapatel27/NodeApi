const express = require("express")
const mongoose = require("mongoose")
const routes = require("./route") // new

mongoose
	.connect("mongodb+srv://rkuuser:rku@12345@mycluster.jtfqi.mongodb.net/Student?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true })
	.then(() => {
		const app = express()
		app.use("/api", routes) // new

		app.listen(process.env.PORT||3000, () => {
			console.log("Server has started!")
		})
	})