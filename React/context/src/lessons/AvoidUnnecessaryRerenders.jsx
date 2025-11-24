import React from 'react'

// Context re-renders EVERY consumer when value changes.
// This advanced pattern is used to optimize performance by splitting the static "setter" functions (which rarely change) 
// from the dynamic "state" values (which change often) into two separate contexts.
// Components that only need to dispatch an action or set a value won't re-render when the value itself changes elsewhere in the app.
export const AvoidUnnecessaryRerenders = () => {
  return (
    <div>AvoidUnnecessaryRerenders</div>
  )
}
