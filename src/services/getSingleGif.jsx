import { API_KEY, API_URL } from './settings.jsx'

const fromApiResponseToGifs = apiResponse => {
  const { data } = apiResponse
  const { images, title, id } = data
  const { url } = images.downsized_medium
  return { title, url, id }
}

export function getSingleGif ({ id }) {
  return window.fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(resp => resp.json())
    .then(fromApiResponseToGifs)
}
