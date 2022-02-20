import { Button, Link } from './styles.jsx'

export function ButtonComponent ({ children, href, size = 'small' }) {
  return href
    ? <Link size={size} href={href}>{children}</Link>
    : <Button size={size}>{children}</Button>
}
