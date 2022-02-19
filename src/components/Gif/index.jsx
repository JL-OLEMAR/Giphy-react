import { Link } from 'wouter'
import './gif.css'

export function Gif ({ title, id, url }) {
  return (
    <div className='gif'>
      <Link to={`/gif/${id}`} className='gif-link'>
        <h4>{title}</h4>
        <img src={url} alt={title} loading='lazy' />
      </Link>
    </div>
  )
}
