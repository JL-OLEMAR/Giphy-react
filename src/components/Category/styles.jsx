import styled from '@emotion/styled'
import { Link } from 'wouter'
import { bps } from '../../styles'

// CategoryTitle is a styled.h3
export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;
  margin-bottom: 0.7rem;
  margin-top: 0.6rem;

  ${bps.greaterThanMobile} {
    text-align: right;
  }
`
// End CategoryTitle is a styled.h3

// CategoryList is a styled.ul
export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-positon: inside;
  margin: 0;
  padding: 0;

  ${bps.greaterThanMobile} {
    justify-content: flex-end;
  }
`
// End CategoryList is a styled.ul

// CategoryListItem is a styled.li
const generateMultiColorCategory = props => {
  const NEED_WHITE_COLOR = [3, 4]
  const colorIndex = props.index % 5 + 1
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
  const colorText = needWhite ? 'white' : 'var(--theme-body-bg)'

  return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};
  `
}

export const CategoryListItem = styled.li`
  font-size: 1.2rem;
  list-style: none;
  margin: 0.2rem;
  padding: 0.3rem;

  ${generateMultiColorCategory}
`
// End CategoryListItem is a styled.li

// CategoryLink is a styled(Link) of wouter === a
export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  transition: color ease-in 0.1s;
`
// End CategoryLink is a styled(Link) of wouter === a
