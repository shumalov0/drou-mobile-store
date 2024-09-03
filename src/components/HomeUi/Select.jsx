
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select";
const Selects = () => {
  return (
    <Select>
    <SelectTrigger className="">
      <SelectValue placeholder="USD" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem className="hover:text-my_red" value="USD">USD </SelectItem>
      <SelectItem className="hover:text-my_red" value="EUR">EUR </SelectItem>
      <SelectItem className="hover:text-my_red" value="GBP">GBP</SelectItem>
      <SelectItem className="hover:text-my_red" value="INR">INR </SelectItem>
      <SelectItem className="hover:text-my_red" value="BDT">BDT </SelectItem>
      <SelectItem className="hover:text-my_red" value="JYP">JPY </SelectItem>
      <SelectItem className="hover:text-my_red" value="CAD">CAD </SelectItem>
      <SelectItem className="hover:text-my_red" value="AUD">AUD</SelectItem>


    </SelectContent>
  </Select>
  )
}

export default Selects