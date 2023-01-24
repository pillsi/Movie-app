import React from 'react'

export default function Footer({data}) {
  return (
    <div>
        <p>Quote generator by {data.name}, {data.year}</p>
    </div>
  )
}
