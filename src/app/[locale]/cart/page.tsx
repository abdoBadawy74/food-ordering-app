import React from 'react'
import CartItems from './_components/CartItems'
import CheckOutForm from './_components/CheckOutForm'

export default function CartPage() {
  return (
    <main>
        <section className="section-gap">
            <div className="container text-center">
            <h1 className="text-primary font-bold text-4xl italic mb-6">Your Cart</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              <CartItems />
              <CheckOutForm />
            </div>
            </div>
        </section>
    </main>
  )
}
