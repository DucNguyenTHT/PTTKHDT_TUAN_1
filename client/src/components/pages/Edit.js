import React ,{Fragment, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
        display:'grid',

      },
    },
  }));

const Edit = ({match}) => {
    const classes = useStyles();
    const [Toprevious,setToprevious] = useState(false)
    const [MajorCode,setMajorCode] = useState('')
    const [MajorName,setMajorName] = useState('')
    const [MajorGlobalName,setMajorGlobalName] = useState('')
    const update = () =>{
      axios.put(`http://localhost:5000/api/major/${match.params.id}`,
        {
          MajorCode:MajorCode,
          MajorName:MajorName,
          MajorGlobalName:MajorGlobalName,
        }
      )
      setToprevious(true)
    }

    return (
      <Fragment>
        {Toprevious ? <Redirect to={`/${match.params.special}`} />: null}
        <div className='container'>
            <h1>Cập nhật thông tin </h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={update}>
            <TextField id="outlined-basic" label="Mã Ngành" variant="outlined" value={MajorCode} onChange={e=>setMajorCode(e.target.value)} name='MajorCode'/>
                <TextField id="outlined-basic" label="Tên Ngành" variant="outlined" value={MajorName} onChange={e=>setMajorName(e.target.value)} name='MajorName'/>
                <TextField id="outlined-basic" label="Tên Quốc Tế" variant="outlined" value={MajorGlobalName} onChange={e=>setMajorGlobalName(e.target.value)} name='MajorGlobalName'/>
                <input type="submit" value="Cập Nhật"/>
            </form>
        </div>
      </Fragment>
    )
}

export default Edit
