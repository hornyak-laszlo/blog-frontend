import axios from 'axios'

const getCourses = async () => {
  try {
    const coursesRes = await axios.get('https://0elxks30bg.execute-api.eu-central-1.amazonaws.com/dev/courses')
    return {
      success: true,
      data: coursesRes.data
    }
  } catch (err) {
    return {
      success: false,
      message: 'Quering courses failed'
    }
  }
}

export {
  getCourses
}
