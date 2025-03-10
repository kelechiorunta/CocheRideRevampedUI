import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HeroMainPage from '../components/HeroMainPage'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<HeroMainPage />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})