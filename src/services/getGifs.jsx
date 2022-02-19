import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse

  if (Array.isArray(data)) {
    return data.map(resp => {
      const { id, title, images } = resp
      const { url } = images.downsized_medium
      return { id, title, url }
    })
  }
  return []
}

export function getGifs ({
  limit = 15,
  rating = 'g',
  keyword = 'batman',
  page = 0
} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`

  return window.fetch(apiURL)
    .then(resp => resp.json())
    .then(fromApiResponseToGifs)
}
