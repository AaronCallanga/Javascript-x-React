import React from 'react'
import { RunsEveryRender } from './Basics/RunsEveryRender'
import { RunsOnceOnMount } from './Basics/RunsOnceOnMount'

export const Basics = () => {
  return (
    <>
        <h1> 🎯 1. Basics of useEffect</h1>
        <RunsEveryRender />
        <RunsOnceOnMount />
    </>
  )
}
