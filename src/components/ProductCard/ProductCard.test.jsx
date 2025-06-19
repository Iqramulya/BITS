import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

const dummyProps = {
  id: '001',
  name: 'Tas Kulit Premium',
  img: '/img/tas.jpg',
  price: 'Rp 250.000',
  category: 'Fashion',
  rating: 5
}

describe('ProductCard Component', () => {
  it('menampilkan nama produk', () => {
    render(<ProductCard {...dummyProps} />)
    expect(screen.getAllByText('Tas Kulit Premium')[0]).toBeInTheDocument()
  })

  it('menampilkan harga produk', () => {
    render(<ProductCard {...dummyProps} />)
    expect(screen.getByText('Rp 250.000')).toBeInTheDocument()
  })

  it('menampilkan gambar dengan alt sesuai nama produk', () => {
    render(<ProductCard {...dummyProps} />)
    const image = screen.getByAltText('Tas Kulit Premium')
    expect(image).toHaveAttribute('src', '/img/tas.jpg')
  })

  it('komponen memiliki wrapper dengan class product-card', () => {
    const { container } = render(<ProductCard {...dummyProps} />)
    const wrapper = container.querySelector('.product-card')
    expect(wrapper).toBeInTheDocument()
  })

  it('menampilkan elemen icon heart', () => {
    render(<ProductCard {...dummyProps} />)
    const icons = screen.getAllByText((_, element) =>
      element?.tagName.toLowerCase() === 'i'
    )
    expect(icons.length).toBeGreaterThan(0)
  })
})
