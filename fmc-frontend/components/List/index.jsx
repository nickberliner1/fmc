import React from 'react'
import styled from 'styled-components'

import dummyData from '../../dummyData'
import Crawl from '../Crawl'

const Container = styled.div`

`

const CrawlList = styled.ul`

`

const CrawlItem = styled.li`

`

const List = () => {
  return (
    <Container>
      <CrawlList>
        {dummyData.map((crawl) => {
          return (
            <CrawlItem>
              <Crawl 
                title={crawl.title}
              />
            </CrawlItem>
          )
        })}
      </CrawlList>
    </Container>
  )
}

export default List

