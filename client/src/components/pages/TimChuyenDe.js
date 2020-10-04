import React, { useEffect, useState } from 'react'
import axios from 'axios'


const TimChuyenDe = () => {
    let [nganh,setnganh] = useState([]);
    let [ChuyenDe,setchuyende] = useState([]);
    useEffect(()=>{
        loadNganh();
    },[])
    const loadNganh = async () => {
        try {
            let result = await axios.get(`http://localhost:5000/api/major`)
            console.log(result.data)
            setnganh(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const loadChuyenDe = async (id) => {
        try {
            let result = await axios.get(`http://localhost:5000/api/graduation/${id}`)
            setchuyende(result.data)
        } catch (err){
            console.log(err)    
        }
    }

    const render = (e) =>{
        loadChuyenDe(e.target.value);
    }
    return (
        <>
            <select className="custom-select" onChange={render} >
                <option value>Open this select menu</option>
                {nganh.map(data=><option value={data._id} key={data._id}>{data.MajorName}</option>)}
            </select>
            { ChuyenDe.length > 0 && 
                 <table className="table mt-2">
                 <thead className="thead-dark ">
                     <tr>
                         <th scope="col" style={{width:'10%'}}>Mã Số</th>
                         <th scope="col" style={{width:'10%'}}>Tên Đề Tài</th>
                         <th scope="col" style={{width:'50%'}}>Mô tả chi Tiết</th>
                         <th scope="col" style={{width:'10%'}}>Thời Gian</th>
                         <th scope="col" style={{width:'10%'}}>Số Sinh Viên</th>
                         <th scope="col" style={{width:'20%'}}>Từ Khóa</th>
                     </tr>
                 </thead>
                 <tbody>
                     {ChuyenDe.map(data => (
                         <tr key={data._id}>
                             <th scope="row">{data.GraduationCode}</th>
                             <td>{data.GraduationName}</td>
                             <td>{data.GraduationDescription}</td>
                             <td>{data.GraduationTime}</td>
                             <td>{data.GraduationStudentNumber}</td>
                             <td>{data.GraduationKey}</td>
                         </tr>
                     ))}
                 </tbody>
             </table>
            }
        </>
    )
}

export default TimChuyenDe
