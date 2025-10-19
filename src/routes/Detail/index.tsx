import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./PostDetail"
import PageDetail from "./PageDetail"
import styled from "@emotion/styled"
import usePostQuery from "src/hooks/usePostQuery"
import TagList from "../Feed/TagList"
import Footer from "../Feed/Footer"
import MobileProfileCard from "../Feed/MobileProfileCard"
import ProfileCard from "../Feed/ProfileCard"
import ServiceCard from "../Feed/ServiceCard"
import ContactCard from "../Feed/ContactCard"

const HEADER_HEIGHT = 73

type Props = {}

const Detail: React.FC<Props> = () => {
  const data = usePostQuery()
  useMermaidEffect()

  if (!data) return null
  return (
    <StyledWrapper data-type={data.type}>
      <div
        className="lt"
        css={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <div className="title">
          코딩으로 세계정복까지
          <br />
          <br />
          박유상의 블로그
        </div>
        <TagList />
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div className="mid">
        <MobileProfileCard />
        {data.type[0] === "Page" && <PageDetail />}
        {data.type[0] !== "Page" && <PostDetail />}
        <div className="footer">
          <Footer />
        </div>
      </div>
      {/* <div
        className="rt"
        css={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <ProfileCard />
        <ServiceCard />
        <ContactCard />
      </div> */}
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: 3rem 0;
  display: grid;
  gap: 4rem;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }

  > .lt {
    border-right: 1px solid ${({ theme }) => theme.colors.gray6};
    display: none;
    overflow: scroll;
    position: sticky;
    grid-column: span 2 / span 2;
    top: ${HEADER_HEIGHT - 10}px;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 1024px) {
      grid-column: span 7 / span 7;
    }

    > .footer {
      padding-bottom: 2rem;
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  .title {
    margin-top: 0.1rem;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.gray10};
    white-space: pre-wrap;
  }

  > .rt {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: none;
    overflow: scroll;
    position: sticky;
    top: ${HEADER_HEIGHT - 10}px;

    @media (min-width: 1024px) {
      display: block;
      grid-column: span 3 / span 3;
    }

    .footer {
      padding-top: 1rem;
    }
  }

  &[data-type="Paper"] {
    padding: 40px 0;
  }
  /** Reference: https://github.com/chriskempson/tomorrow-theme **/
  code[class*="language-mermaid"],
  pre[class*="language-mermaid"] {
    background-color: ${({ theme }) => theme.colors.gray5};
  }
`
