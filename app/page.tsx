import ProductCard from '@/components/ProductCard'
import ProductData from '@/utils/mock_data'

export default function Home() {
  return (
    <div className=''>
      <ProductCard products={ProductData}/>
    </div>
  )
}
