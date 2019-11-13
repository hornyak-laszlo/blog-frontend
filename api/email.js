import axios from 'axios'

const sendEmail = async (name, email, message) => {
  try {
    const url = 'https://0elxks30bg.execute-api.eu-central-1.amazonaws.com/dev/send-message'
    const payload = {
      name,
      email,
      message
    }
    await axios.post(url, payload)
    return {
      success: true
    }
  } catch (err) {
    return {
      success: false
    }
  }
}

export {
  sendEmail
}
