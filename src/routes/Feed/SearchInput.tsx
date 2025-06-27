import styled from "@emotion/styled"
import React from "react"
import { create } from "zustand"
import { FaSearch } from "react-icons/fa"

interface SearchState {
  q: string
  setQ: (q: string) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  q: "",
  setQ: (q) => set({ q }),
}))

const SearchInput: React.FC = () => {
  const { q, setQ } = useSearchStore()

  return (
    <StyledWrapper>
      <div className="search-container">
        <input
          type="text"
          placeholder="검색"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
    </StyledWrapper>
  )
}

export default SearchInput

const StyledWrapper = styled.div`
  .search-container {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0px 1rem;
    border-radius: 1rem;
    width: 100%;
  }

  .search-icon {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.gray7};
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray9};
    font-size: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray7};
    transition: border-bottom-color 0.3s;
    padding-bottom: 0.5rem; /* 밑줄과의 간격을 늘리기 위해 추가 */

    &:hover,
    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.gray9};
    }
  }
`
