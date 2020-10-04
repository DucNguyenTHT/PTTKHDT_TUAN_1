import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
        display:'grid',

      },
    },
  }));

const Add = ({match}) => {
    const classes = useStyles();
    const [MajorCode,setMajorCode] = useState('')
    const [MajorName,setMajorName] = useState('')
    const [MajorGlobalName,setMajorGlobalName] = useState('')
    const [Toprevious,setToprevious] = useState(false)
    const onSubmit = (e) =>{
      axios.post(`http://localhost:5000/api/major/${match.params.special}`,{
        MajorCode:MajorCode,
        MajorName:MajorName,
        MajorGlobalName:MajorGlobalName,
      })
      setToprevious(true)
    }  
    return (
      <>
        {Toprevious ? <Redirect to={`/special/${match.params.special}`} />: null}
        <div className='container'>
            <h1>Thêm Ngành Học </h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField id="outlined-basic" label="Mã Ngành" variant="outlined" value={MajorCode} onChange={e=>setMajorCode(e.target.value)} name='MajorCode'/>
                <TextField id="outlined-basic" label="Tên Ngành" variant="outlined" value={MajorName} onChange={e=>setMajorName(e.target.value)} name='MajorName'/>
                <TextField id="outlined-basic" label="Tên Quốc Tế" variant="outlined" value={MajorGlobalName} onChange={e=>setMajorGlobalName(e.target.value)} name='MajorGlobalName'/>
                <input type="submit" value="Thêm Ngành"/>
            </form>
        </div>
      </>
    )
}

export default Add
