import React, { useEffect, useState } from 'react'

const DataFetching = () => {

    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <ul>
        {
          records.map(rec => {
          return <div key={rec.id}><li>{rec.name}</li><li>{rec.email}</li></div>
          })
        }
      </ul>
    </div>
  )
}

export default DataFetching
