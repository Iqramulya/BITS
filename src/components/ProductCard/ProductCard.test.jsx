import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

test('menampilkan nama produk', () => {
  render(
    <ProductCard
      id="001"
      name="Tas Kulit Premium"
      img="/img/tas.jpg"
      price="Rp 250.000"
      category="Fashion"
      rating={5}
    />
  )

  expect(screen.getAllByText("Tas Kulit Premium")[0]).toBeInTheDocument()
})
