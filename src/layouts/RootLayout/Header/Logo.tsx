import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import Image from 'next/image'

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <Image src="/avatar.png" alt="logo" width={36} height={36} css={{borderRadius: "50%"}} />
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 0.925rem;
  margin-top: 0.325rem;
`
