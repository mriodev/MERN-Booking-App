import React from 'react'

import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='p-4'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}
