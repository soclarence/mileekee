import {Hero, Navbar, Product, DownloadCTA, Footer} from "./components"

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Navbar />
      <Hero />
      <Product />
      <DownloadCTA />
      <Footer />
    </div>
  )
}
