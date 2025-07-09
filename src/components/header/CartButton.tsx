import React from 'react'
import Link from '../link'
import { Routes } from '@/constants/enums'
import {  ShoppingCartIcon } from 'lucide-react'

export default function CartButton() {
  return (
    <Link href={`/${Routes.CART}`}>
        <button className="block relative group">
            <span className="absolute -top-4 start-4 bg-primary text-white rounded-full w-5 h-5 text-sm">2</span>
            <ShoppingCartIcon 
            className="w-6 h-6 text-accent group-hover:text-primary duration-200 transition-colors" />
        </button>
    </Link>
  )
}
