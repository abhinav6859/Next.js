import React from 'react'

const page = ({params}) => { //{params} allows to use the "$_GET" variables
  return (
    <div>
      <h1>Nice to meet you {params.name}!</h1>
    </div>
  )
}

export default page
