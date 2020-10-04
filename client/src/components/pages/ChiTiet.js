import React, { useEffect, useState } from 'react'
import Button from '../Layout/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ChiTiet = ({match}) => {
    const [dataTemp,setDataTemp] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/major/${match.params.special}`)
        .then(value => setDataTemp(value.data))
        .catch(err => console.log(err.message))
    },[dataTemp]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <Button color='red'>
                <Link to={`/special/${match.params.special}/add`}>
                    <h5>+Thêm Ngành</h5>
                </Link>
            </Button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Mã Ngành</th>
                        <th scope="col">Tên Ngành</th>
                        <th scope="col">Tên Quốc Tế</th>
                        <th scope="col">Ngày Tạo</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTemp.map(data => (
                        <tr key={data._id}>
                            <th scope="row">{data.MajorCode}</th>
                            <td>{data.MajorName}</td>
                            <td>{data.MajorGlobalName}</td>
                            <td>{data.date}</td>
                            <td>
                                <Button color='red'
                                    onClick={(e)=>{
                                        axios.delete(`http://localhost:5000/api/major/${data._id}`)
                                    }}
                                >Delete</Button>
                                <Button color='blue'>
                                    <Link to={`/special/${match.params.special}/update/${data._id}`}>
                                        update
                                    </Link>
                                </Button>
                                <Button color='blue'>
                                    <Link to={`/chuyende/add/${data._id}`}>
                                        + Chuyên Đề
                                    </Link>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ChiTiet
