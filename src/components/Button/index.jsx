import { Button, Link } from './styles'

export function ButtonComponent ({ children, href, size = 'small' }) {
  return href
    ? <Link size={size} href={href}>{children}</Link>
    : <Button size={size}>{children}</Button>
}
