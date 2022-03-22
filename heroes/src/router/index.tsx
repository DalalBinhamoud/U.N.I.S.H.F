import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const HeroesList = lazy(() => import('../components/HeroesList/HeroesList'))
const Page404 = () => {
  return <Route path="*" element={<HeroesList />} />
}

export { Page404 }
