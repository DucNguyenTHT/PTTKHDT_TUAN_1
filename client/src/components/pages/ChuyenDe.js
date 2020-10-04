import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../Layout/Button'
import { Link } from 'react-router-dom'
const ChuyenDe = () => {
    const [dataTemp,SetdataTemp] = useState([])
    useEffect(()=>{
        getdata();
    },[dataTemp]) // eslint-disable-line

    const getdata = async () =>{
        try {
            let result = await axios.get(`http://localhost:5000/api/graduation`);
            SetdataTemp(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>

        <table className="table">
            <thead className="thead-dark ">
                <tr>
                    <th scope="col" style={{width:'10%'}}>Mã Số</th>
                    <th scope="col" style={{width:'10%'}}>Tên Đề Tài</th>
                    <th scope="col" style={{width:'50%'}}>Mô tả chi Tiết</th>
                    <th scope="col" style={{width:'10%'}}>Thời Gian</th>
                    <th scope="col" style={{width:'15%'}}>Số Sinh Viên</th>
                    <th scope="col" style={{width:'15%'}}>Từ Khóa</th>
                    <th scope="col" style={{width:'10%'}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {dataTemp.length >0 && dataTemp.map(data => (
                    <tr key={data._id}>
                        <th scope="row">{data.GraduationCode}</th>
                        <td>{data.GraduationName}</td>
                        <td>{data.GraduationDescription}</td>
                        <td>{data.GraduationTime}</td>
                        <td>{data.GraduationStudentNumber}</td>
                        <td>{data.GraduationKey}</td>
                        <td>
                            <Button
                                color='red'
                                onClick={()=>{
                                    axios.delete(`http://localhost:5000/api/graduation/${data._id}`)
                                }}
                            >Delete</Button>
                            <Button color='blue'>
                                <Link to={`/chuyende/update/${data._id}`}>
                                    update
                                </Link>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ChuyenDe
