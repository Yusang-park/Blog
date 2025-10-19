import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import Image from 'next/image'

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <Image
        src="/avatar.png"
        alt="logo"
        width={36}
        height={36}
        css={{ borderRadius: "50%" }}
      />
      <span>코딩으로 세계정복</span>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem;
  gap: 0.75rem;
  span {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
    border-radius: 0.5rem;
  }
`
