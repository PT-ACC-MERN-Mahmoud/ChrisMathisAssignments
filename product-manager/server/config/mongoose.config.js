const mongoose = require("mongoose");
const dbName = "products";

mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTypology: true,
})
.then(() => console.log(`Connected to ${dbName} database!`))
.catch((err) => console.log(err));