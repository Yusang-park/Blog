import { useRouter } from "next/router"
import React from "react"
import { COLOR_SET } from "./constants"
import styled from "@emotion/styled"
import { colors } from "src/styles"

type Props = {
  children: string
  readOnly?: boolean
}
const Category: React.FC<Props> = ({ readOnly = false, children }) => {
  // Hide Category for now, category is ued internally
  return null
  // const router = useRouter()

  // const handleClick = (value: string) => {
  //   if (readOnly) return
  //   router.push(`/?category=${value}`)
  // }
  // return (
  //   <StyledWrapper
  //     onClick={() => handleClick(children)}
  //     css={{
  //       cursor: readOnly ? "default" : "pointer",
  //     }}
  //   >
  //     {children}
  //   </StyledWrapper>
  // )
}

export default Category

const StyledWrapper = styled.div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 9999px;
  width: fit-content;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.9;
  color: ${colors.dark.gray1};
  &:hover {
    text-decoration: underline;
  }
`
