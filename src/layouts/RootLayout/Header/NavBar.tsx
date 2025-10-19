import styled from "@emotion/styled"
import Link from "next/link"
import SearchInput from 'src/routes/Feed/SearchInput'

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }]
  return (
    <StyledWrapper className="">
      <SearchInput />
      {links.map((link) => (
        <button key={link.id}>
          <Link href={link.to}>{link.name}</Link>
        </button>
      ))}
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  
  button {
    border-radius: 0.5rem;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray10};
      transition: background-color 0.2s ease-in-out;
    }
  }
`
