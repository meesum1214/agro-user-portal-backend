const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer')
const app = express();
const port = 3006;

app.use('/static', express.static('uploads'));

// set multer disk storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        // create new file name with extension
        cb(null, file.originalname);
    }
});
// set multer upload object
const upload = multer({ storage: storage })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/uploadimg', upload.single('annotationimage'), (req, res) => {
    res.status(200).send({ message: 'Image uploaded successfully!' });
});

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});