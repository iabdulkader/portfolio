import axios from "axios";

export default async function handler(req, res) {
  
  const url = "https://api.emailjs.com/api/v1.0/email/send";
  const { name, email, message } = req.body;
  
  
  try {
    const data = {
      service_id: process.env.service_id,
      template_id: process.env.template_id,
      user_id: process.env.user_id,
      template_params: {
        name,
        email,
        message
      }
    }
    
    const response = await axios.post(url, data)
    
    if(response.status === 200){
      res.status(200).json({done: true})
    } else {
      res.status(201).json({done: false})
    }
    
  } catch (e) {
    res.status(201).json({done: false})
  }
  
}