import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'
export default function HomePage(props) {
  console.log('building home')
  const { products } = props
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  )
}
export const getStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  console.log(process.cwd())
  console.log(filePath)
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //10 seconds
    // notFound: true,
    // redirect:
  }
}
