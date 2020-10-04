import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
        display:'grid'
      },
    },
  }));
const ChuyenDeUpdate = ({match}) => {
        let history = useHistory();
        const classes = useStyles();
        const [GraduationCode,setGraduationCode] = useState('')
        const [GraduationName,setGraduationName] = useState('')
        const [GraduationDescription,setGraduationDescription] = useState('')
        const [GraduationTime,setGraduationTime] = useState(6)
        const [GraduationStudentNumber,setGraduationStudentNumber] = useState(5)
        const [GraduationKey,setGraduationKey] = useState('')
        const onSubmit = (e) =>{
          e.preventDefault();
          axios.put(`http://localhost:5000/api/graduation/${match.params.id}`,{
            GraduationCode,
            GraduationName,
            GraduationDescription,
            GraduationTime,
            GraduationStudentNumber,
            GraduationKey
            })
            history.push('/chuyende')
          } 
        return (
        <>
            <div className='container'>
                <h1>Sửa Chuyên Đề </h1>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <TextField id="outlined-basic" label="Mã đồ án" variant="outlined" value={GraduationCode} onChange={e=>setGraduationCode(e.target.value)} name='MajorCode'/>
                    <TextField id="outlined-basic" label="Tên đồ án" variant="outlined" value={GraduationName} onChange={e=>setGraduationName(e.target.value)} name='MajorName'/>
                    <TextField id="outlined-basic" label="Mô tả đồ án" variant="outlined" value={GraduationDescription} onChange={e=>setGraduationDescription(e.target.value)} name='MajorGlobalName'/>
                    <TextField id="outlined-basic" label="Số tháng làm" variant="outlined" value={GraduationTime} onChange={e=>setGraduationTime(e.target.value)} name='MajorGlobalName'/>
                    <TextField id="outlined-basic" label="Số Sinh Viên" variant="outlined" value={GraduationStudentNumber} onChange={e=>setGraduationStudentNumber(e.target.value)} name='MajorGlobalName'/>
                    <TextField id="outlined-basic" label="Từ Khóa" variant="outlined" value={GraduationKey} onChange={e=>setGraduationKey(e.target.value)} name='MajorGlobalName'/>
                    <input type="submit" value="Sửa Chuyên đề"/>
                </form>
            </div>
        </>
    )
}

export default ChuyenDeUpdate
