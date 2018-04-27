import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import _ from 'lodash'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from '../components/Layout'

const Card = styled.div`
  display: block;
  text-decoration: none;
  padding: 2.1rem 3.15rem;
  max-width: 780px;
  margin: 1rem auto;
  cursor: default;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
    transform: translateY(-4px);
  }
`

const BlogContainer = Container.extend`
  height: 100%;
  box-sizing: border-box;
`

const BlogRow = Row.extend`
  height: 100%;
  align-items: center;
`

const Topic = styled.h2`
  font-size: 25px;
  line-height: 35px;
  font-family: Avenir;
  margin-top: 30px;
`

const TimeStamp = styled.h5`
  font-family: Avenir;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.2);
`

const Summary = styled.p`
  font-family: Avenir;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  text-overflow: ellipsis;
  height: 130px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

const TagsView = styled.div`
  width: 100%;
  margin-top: 20px;
`

const TagCard = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: #f7901d;
  cursor: pointer;
  display: inline-block;
`

const ReadMore = styled(Link)`
  color: #4ab1f4;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  text-decoration: none;
`

const BlogCard = ({ post, imagesArray }) => {
  const Tags = (post.frontmatter && post.frontmatter.tags) || []
  return (
    <Card>
      <BlogContainer>
        <BlogRow>
          <Col xs="12" sm="12">
            <TagsView>
              {Tags.map((tag, i) => (
                <TagCard key={i} to={`/blog/tags/${_.kebabCase(tag.name)}`}>
                  {tag.name}
                </TagCard>
              ))}
            </TagsView>
          </Col>
          <Col xs="12" sm="7">
            <Topic>{post.frontmatter.title}</Topic>
            <TimeStamp>
              {post.frontmatter.author} on {post.frontmatter.date}
            </TimeStamp>
            <Summary>{post.frontmatter.summary}</Summary>
          </Col>
          {typeof window !== 'undefined' && (
            <Col xs="12" sm="5">
              {imagesArray
                .filter(
                  item =>
                    item.relativePath === post.frontmatter.postimage.slice(14)
                )
                .map(
                  (item, i) =>
                    item.childImageSharp ? (
                      <Img key={i} sizes={item.childImageSharp.sizes} />
                    ) : (
                      <LazyLoadImage
                        key={i}
                        effect="blur"
                        src={post.frontmatter.postimage}
                        width="100%"
                      />
                    )
                )}
            </Col>
          )}
          <Col xs="12" sm="12">
            <ReadMore to={post.frontmatter.path}>Read more</ReadMore>
          </Col>
        </BlogRow>
      </BlogContainer>
    </Card>
  )
}

BlogCard.propTypes = {
  post: PropTypes.object,
  imagesArray: PropTypes.array,
}

export default BlogCard
