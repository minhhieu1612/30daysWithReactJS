import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import { ListProductsContainer } from '../containers/products'
import { CartListContainer } from '../containers/carts'


const routes = [
  {
    path: '/',
    exact: true,
    label: 'Home',
    component: () => <ListProductsContainer />
  },
  {
    path: '/products',
    exact: false,
    label: 'Products',
    component: () => <ListProductsContainer />
  },
  {
    path: '/carts',
    exact: false,
    label: 'Carts',
    component: () => <CartListContainer />
  },
  {
    path: '/about',
    exact: false,
    label: 'About',
    component: () => <About />
  },
  {
    path: '/contact',
    exact: false,
    label: 'Contact',
    component: () => <Contact />
  },
  {
    path: '',
    exact: false,
    label: 'Page Not Found',
    component: () => <NotFound />
  },
]

export default routes