import React from 'react'
import DataSection from '../../DataSection'
import Pricing from '../../Pricing'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './HomeData'

export default function Home() {
  return (
    <>
      <DataSection {...homeObjOne}/>  
      <DataSection {...homeObjThree}/>  
      <DataSection {...homeObjTwo}/> 
      <Pricing/> 
      <DataSection {...homeObjFour}/>  
    </>
  )
}
