import React from 'react'
import styled from 'styled-components'
import { H2, H5, H6 } from '../../../components/Typography'
import { Container, Row, Col } from '../../../components/Layout'
import Button from '../../../components/Button'
import Link, { withPrefix } from 'gatsby-link'

const Warpper = styled.div`
  padding: 50px 0;
  text-align: center;
  position: relative;
  ::before {
    content: ' ';
    background: url(/files/images/bk-news.png);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ::after {
    content: ' ';
    background: rgba(73, 92, 242, 0.98);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const NewsSectionTitle = H2.extend`
  font-family: GTWalsheim;
  color: #ffffff;
  margin-bottom: 40px;
`

const NewsTitle = H5.extend`
  text-align: left;
  color: #ffffff;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 60px;
  margin: 0.5rem 0;
  @media screen and (max-width: 576px) {
    height: 50px;
  }
`

const NewsContent = H6.extend`
  text-align: left;
  color: #ffffff;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 75px;
`

const BtnReadMore = Button.extend`
  display: inline-block;
  text-decoration: none;
  margin-top: 70px;
`.withComponent(Link)

const NewsRow = Row.extend`
  justify-content: center;
`

const NewsView = ({ data }) => {
  const news = data.filter(item => {
    return (
      item.node.frontmatter.contentType == 'blog' &&
      item.node.frontmatter.newsFlag
    )
  })
  return (
    <Warpper>
      <NewsSectionTitle>In the news</NewsSectionTitle>
      {news && (
        <Container>
          <NewsRow>
            {news.map((item, i) => (
              <Col xs="12" sm="6" md="4" key={i}>
                <img
                  src={withPrefix(item.node.frontmatter.postimage)}
                  width="100%"
                  height="30%"
                />
                <NewsTitle>{item.node.frontmatter.title}</NewsTitle>
                <NewsContent className="text-left">
                  {item.node.frontmatter.summary}
                </NewsContent>
                <BtnReadMore outline to={item.node.frontmatter.path}>
                  Read more
                </BtnReadMore>
              </Col>
            ))}
          </NewsRow>
        </Container>
      )}
    </Warpper>
  )
}

export default NewsView
