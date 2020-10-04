import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <div className='navbar bg-primary'>
                <h1>
                    <i className="fab fa-github-alt"/> Review Khoa Ngành
                </h1>
                <ul>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/chuyende'>Chuyên Đề</Link></li>
                    <li><Link to='/timtheonganh'>Tìm Theo Ngành</Link></li>
                </ul>
            </div>
    )
}
export default Navbar
