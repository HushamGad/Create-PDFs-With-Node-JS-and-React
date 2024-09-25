const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')
const pdfTemplate = require('./documents')

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Route to create and return PDF
app.post('/create-pdf',(req,res)=>{
    const formData = req.body
    // Create a PDF from the HTML tamplate
    pdf.create(pdfTemplate(formData),{}).toStream((err,stream) =>{
        if(err){
            return res.status(500).send('An error occurred while creating the PDF.')
        }
        // Set response header and send the PDF stream to the client
        res.setHeader('Content-Type','application/pdf')
        stream.pipe(res)
    })
})

// Route to download the created PDF
app.get('/fetch-pdf',(req,res) =>{
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port,() => console.log(`Listening on port ${port}`))