
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
 
  } from "../ui/breadcrumb"
  
  
const BreadCumb = ({page1,page2,mainPage}) => {
  return (
    <div className=' py-[50px] bg-[#f4f4f4] px-8'>

    <Breadcrumb >
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">{page1}</BreadcrumbLink>
      </BreadcrumbItem>
      /
      {/* <BreadcrumbItem>
        <BreadcrumbLink href="/">{page2}</BreadcrumbLink>
      </BreadcrumbItem>
            / */}
      <BreadcrumbItem>
        <BreadcrumbPage className="text-my_orange">{mainPage}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
    </div>
  
  )
}

export default BreadCumb