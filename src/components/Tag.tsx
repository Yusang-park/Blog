import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <StyledWrapper onClick={() => handleClick(children)}>
      #{children}
    </StyledWrapper>
  )
}

export default Tag

const StyledWrapper = styled.div`
  padding-right: 0.125rem;
  border-radius: 50px;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.gray12};
    text-decoration: underline;
  }
`
