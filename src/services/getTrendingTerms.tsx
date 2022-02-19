import { API_URL, API_KEY } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  return data
}

export function getTrendingTerms ({ signal }) {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return window.fetch(apiURL, { signal })
    .then(resp => resp.json())
    .then(fromApiResponseToGifs)
}
