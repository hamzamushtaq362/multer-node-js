const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./api/helper/db-connect');
const port = 2000;
var cors = require('cors')
const authRoutes = require('./api/routes/auth.route');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

var db = mongoose()
app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'I am working'
    })
});
app.use('/api',authRoutes);

// const multer  = require('multer')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
//     }
//   })

// // const upload = multer({ dest: './uploads' })
// const upload = multer({ storage: storage });

// app.post('/stats', upload.single('uploaded_file'), function (req, res) {
//    // req.file is the name of your file in the form above, here 'uploaded_file'
//    // req.body will hold the text fields, if there were any 
//    console.log(req.file)
//    //    console.log(req.body);
//    let path="C:/SSD Data/NODE_JS/Practice 6/uploads/"+req.file.filename;
//    return res.status(200).json({
//     path
// })  
// });

app.listen(port,()=>{
    console.log('working------')
})