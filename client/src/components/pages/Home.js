import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../Layout/Button'
const Home = () => {
    const [khoa,setKhoa] = useState([])
    useEffect( () => {
        axios.get('http://localhost:5000/api/speacialty')
        .then(value => setKhoa(value.data))
        .catch(err => console.log(err.message))
    }, [])
    return (
        <div style = {userStyle}>
            {khoa.length >0 && 
                khoa.map(item => (
                        <div className="Card" key={item._id}>
                            <h2>
                                {item.LocalName}
                            </h2>
                            <Button>
                                <Link to={`/special/${item._id}`}>
                                    Chi Tiết
                                </Link>
                            </Button>
                        </div>
                    )
                )
            }
        </div>
    )
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap:'5px',
}


export default Home


