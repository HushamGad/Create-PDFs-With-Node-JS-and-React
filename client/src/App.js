import React,{useState} from 'react'
import axios from 'axios'
import {saveAs} from 'file-saver'
import './App.css'

function App() {
  const [formData, setFromData]= useState( {
    name: '',
    receiptId: 0,
    price1:0,
    price2:0,
  })
  const handleChange = (e) =>{
    const {name,value} = e.target
    setFromData((prevData) =>({
      ...prevData,
      [name]: value,
    }))
  }

  const createAndDownloadPdf = async () =>{
    try{
      const response = await axios.post('/create-pdf',formData,{
        responseType: 'blob',
      })
      const pdfBolb = new Blob([response.data],{type: 'application/pdf'})
      saveAs(pdfBolb, 'receipt.pdf')
    }catch(error){
      console.error('Error creating PDF:', error)
    }
  }
  return (
    <div className="App">
      <div className="form-container">
        <h2>Create Receipt</h2>
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Receipt ID:</label>
          <input
            type="number"
            placeholder="Enter receipt ID"
            name="receiptId"
            value={formData.receiptId}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Price 1:</label>
          <input
            type="number"
            placeholder="Enter first price"
            name="price1"
            value={formData.price1}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Price 2:</label>
          <input
            type="number"
            placeholder="Enter second price"
            name="price2"
            value={formData.price2}
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn" onClick={createAndDownloadPdf}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
