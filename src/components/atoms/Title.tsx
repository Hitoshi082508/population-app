import React from 'react'
import styled from 'styled-components'
type Styling = {}
type Props = {
  className?: string
  text: string
}
export const FCTitle: React.FC<Props & Styling> = ({ className, text }) => {
  return (
    <h1 className={className}>{text}</h1>
  )
}
export const Title = styled(FCTitle)`
  font-size: 40px;
  margin: 50px auto;
`