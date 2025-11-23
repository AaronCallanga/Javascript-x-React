import React from 'react'
import { RunsEveryRender } from './Basics/RunsEveryRender'
import { RunsOnceOnMount } from './Basics/RunsOnceOnMount'
import { RunsWhenDependencyChange } from './Basics/RunsWhenDependencyChange'

export const Basics = () => {
  return (
    <>
        <h1> 🎯 1. Basics of useEffect</h1>
        <RunsEveryRender />
        <RunsOnceOnMount />
        <RunsWhenDependencyChange />
    </>
  )
}
