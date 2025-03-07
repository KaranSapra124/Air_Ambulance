import React from 'react'
import Container from '../Global/Container'
import { Pagination } from 'antd'

const Paagination = () => {
  return (
   <>
   <Container>
    <Pagination  align='start' total={20} defaultCurrent={1}/>
   </Container>
   </>
  )
}

export default Paagination