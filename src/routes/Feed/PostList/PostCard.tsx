import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"
import Tag from "../../../components/Tag"
import { TPost } from "../../../types"
import Image from "next/image"
import Category from "../../../components/Category"
import styled from "@emotion/styled"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <StyledWrapper >
      <article>
        {/* {category && (
          <div className="category">
            <Category>{category}</Category>
          </div>
        )} */}
        {data.thumbnail && (
          <div className="thumbnail">
            <Link href={`/${data.slug}`}>
            <Image
              src={data.thumbnail}
              fill
              alt={data.title}
              css={{ objectFit: "cover" }}
            />
            </Link>
            </div>
        )}
        <div data-thumb={!!data.thumbnail} data-category={!!category} className="content">
           <div className="tags">
            {data.tags &&
              data.tags.map((tag: string, idx: number) => (
                <>
                  <Tag key={idx}>{tag}</Tag>
                  {idx !== (data.tags?.length || 0) - 1 && (
                    <span>·</span>
                  )}
                  </>
              ))}
          </div>
          <header className="top">
            <Link href={`/${data.slug}`}>
              <h2>{data.title}</h2>
            </Link>
            </header>
          <div className="summary">
            <Link href={`/${data.slug}`}>
              <p>{data.summary}</p>
            </Link>
          </div>
          <div className="date">
            <div className="content">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
         
        </div>
      </article>
    </StyledWrapper>
  )
}

export default PostCard

const StyledWrapper = styled.div`
  article {
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray2};
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }

  
    > .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: 10;
    }

    > .thumbnail {
      position: relative;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.gray2};
      padding-bottom: 66%;

      @media (min-width: 1024px) {
        padding-bottom: 50%;
      }

      img{
        border-radius: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.gray6};
      }

      :hover{
        filter: brightness(0.9);
        transition: filter 0.3s ease;
      }
    }
    > .content {
      padding : 0.725rem 0;

      &[data-thumb="false"] {
        padding-top: 3.5rem;
      }
      &[data-category="false"] {
        padding-top: 1.5rem;
      }
      > .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 0.25rem;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: baseline;
        }
        h2 {
          margin-bottom: 0.5rem;
          line-height: 1.75rem;
          font-weight: 600;

          cursor: pointer;

          @media (min-width: 768px) {
            line-height: 1.75rem;
          }

          &:hover {
            color: ${({ theme }) => theme.colors.blue10};
          }
        }
      }
      > .date {
        display: flex;
        margin-bottom: 1rem;
        gap: 0.5rem;
        align-items: center;
        .content {
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray9};
          @media (min-width: 768px) {
            margin-left: 0;
          }
        }
      }
      > .summary {
        margin-bottom: 1rem;
        p {
          display: none;
          line-height: 2rem;
          font-size: 1.125rem;
          color: ${({ theme }) => theme.colors.gray10};
          margin: 0;

          @media (min-width: 768px) {
            display: block;
          }
        }
      }
      > .tags {
        display: flex;
        gap: 0.5rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;

        span{
          color: ${({ theme }) => theme.colors.gray10};
          font-size: 0.825rem;
        }
      }
    }
  }
`
