import React from 'react'
import DataSection from '../../DataSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './HomeData'

export default function Home() {
  return (
    <>
      <DataSection {...homeObjOne}/>  
      <DataSection {...homeObjThree}/>  
      <DataSection {...homeObjTwo}/>  
      <DataSection {...homeObjFour}/>  
    </>
  )
}
