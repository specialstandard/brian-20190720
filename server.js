var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname )
  }
})

const upload = multer({ storage }).array('file')

app.post('/upload',function(req, res) {
    upload(req, res, (err) => {
        if (err) {
          return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
      })
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});
