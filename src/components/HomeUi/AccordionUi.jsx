
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
  
const AccordionUi = () => {
  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Home</AccordionTrigger>
    <AccordionContent>
      <ul className='flex flex-col gap-7'>
        <li className=' hover:text-my_red font-medium '><Link to="/home1">Home Demo One</Link></li>
        <li><Link to="/home2">Home Demo One</Link></li>
        <li><Link to="/home3">Home Demo One</Link></li>
        <li><Link to="/home4">Home Demo One</Link></li>
        <li><Link to="/home5">Home Demo One</Link></li>
        <li><Link to="/home6">Home Demo One</Link></li>
      </ul>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Electronics</AccordionTrigger>
    <AccordionContent>
      <ul className='flex flex-col gap-7'>
        <li className=' hover:text-my_red font-medium '><Link to="/home1">Home Demo One</Link></li>
        <li><Link to="/home2">Home Demo One</Link></li>
        <li><Link to="/home3">Home Demo One</Link></li>
        <li><Link to="/home4">Home Demo One</Link></li>
        <li><Link to="/home5">Home Demo One</Link></li>
        <li><Link to="/home6">Home Demo One</Link></li>
      </ul>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Blog</AccordionTrigger>
    <AccordionContent>
      <ul className='flex flex-col gap-7'>
        <li className=' hover:text-my_red font-medium '><Link to="/home1">Home Demo One</Link></li>
        <li><Link to="/home2">Home Demo One</Link></li>
        <li><Link to="/home3">Home Demo One</Link></li>
        <li><Link to="/home4">Home Demo One</Link></li>
        <li><Link to="/home5">Home Demo One</Link></li>
        <li><Link to="/home6">Home Demo One</Link></li>
      </ul>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Pages</AccordionTrigger>
    <AccordionContent>
      <ul className='flex flex-col gap-7'>
        <li className=' hover:text-my_red font-medium '><Link to="/home1">Home Demo One</Link></li>
        <li><Link to="/home2">About Page</Link></li>
        <li><Link to="/contact">Contact Page</Link></li>
        <li><Link to="/faq">Faq Page</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="*">404 Error page</Link></li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>

  )
}

export default AccordionUi