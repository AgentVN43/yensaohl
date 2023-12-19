import React from 'react'
import Banner from '../../components/banner'
import CallToAction from '../../components/cta/cta1'
import Products from '../../components/products'

export default function Home2() {
  return (
    <>
    <Banner />
    <Products category={16} />
    <Products category={20} />
    <Products category={17} />
    <Products category={19} />
    <Products category={18} />
    <Products category={21} />
    <CallToAction/>
  </>
  )
}
