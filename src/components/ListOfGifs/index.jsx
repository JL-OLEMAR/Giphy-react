import { Gif } from '../Gif'
import './listOfGifs.css'

export function ListOfGifs ({ gifs }) {
  return (
    <div className='list-of-gifs'>
      {gifs.map(({ id, title, url }) =>
        <Gif key={id} id={id} title={title} url={url} />
      )}
    </div>
  )
}
