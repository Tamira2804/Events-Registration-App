import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardThumb = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 274px;
  height: 274px;
  padding: 20px;

  box-shadow: var(--shadow);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`
export const Title = styled.h3`
  color: var(--colors-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  line-height: 1.5;
  height: 24px;
  overflow: hidden;
`

export const Descr = styled.div`
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Максимальна кількість рядків */
  -webkit-box-orient: vertical;
  max-height: 6 * 1rem;
`

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  display: inline-block;

  color: var(--accent-hover);
`
