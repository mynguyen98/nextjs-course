import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function LastSalesPage() {
  const [sales, setSales] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const { data, error } = useSWR(
    'https://nextjs-course-d2bf1-default-rtdb.firebaseio.com/sales.json'
  )

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('https://nextjs-course-d2bf1-default-rtdb.firebaseio.com/sales.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = []
  //       console.log(data)
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         })
  //       }
  //       setSales(transformedSales)
  //       setIsLoading(false)
  //     })
  // }, [])
  if (!data) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    )
  }
  if (error) {
    return <div>Failed to load</div>
  }
  console.log(data)
  return (
    <ul>
      {data.map((sale) => {
        return (
          <li>
            {sale.username}-{sale.volume}
          </li>
        )
      })}
    </ul>
  )
}
