import axios from 'axios'

const getArticles = async () => {
  try {
    const articlesRes = await axios.get('https://0elxks30bg.execute-api.eu-central-1.amazonaws.com/dev/articles')
    return {
      success: true,
      data: articlesRes.data
    }
  } catch (err) {
    return {
      success: false,
      message: 'Quering articles failed'
    }
  }
}

export {
  getArticles
}
