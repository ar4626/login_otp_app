import React from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

// import all components
import Username from './components/Username'
import Password from './components/Password'
import Register from './components/Register'
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFound'
import Recovery from './components/Recovery'
import Reset from './components/Reset'

// Root Routes
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <Password></Password>
    },
    {
        path : '/profile',
        element : <Profile></Profile>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}

export default App