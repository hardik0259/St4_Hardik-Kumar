import { createTheme, makeStyles, TextField, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const useStyle=makeStyles((theme)=>({
  cont:{
    background:'url(https://wallpaperaccess.com/full/1384336.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    height:'99.9vh',
  },
  form:{
     width:'500px',
     height:'500px',
     background: 'pink',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     flexDirection:'column',
     [theme.breakpoints.down('xs')]:{
      width:'100%',
     }
  },
  btn:{
    marginTop:'10px',
    height:'50px',
    outline:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
    border:'5px solid #166bd3',
  },
  title:{
    color:'yellow'
  },
  normal:{
    width:'100%',
    height:'50px',
    borderTopLeftRadius:'50px',
    borderTopRightRadius:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
  },
success:{
    width:'100%',
    height:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
    backgroundColor:'rgb(11, 218, 81)',
  },
  err:{
    width:'100%',
    height:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
    backgroundColor:'red',
  },
  btn2:{
    marginTop:'10px',
    height:'50px',
    outline:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
    border:'5px solid #166bd3',
  }
}))
const Form = (props) => {
const {addUser}=props;
const history=useNavigate();
const handleClick=()=>{
  try{
    if(!name || !email || !phone || !address)
    {
      throw "Please Fill the Form Correctly"
    }
    if(phone.length<10)
    {
      throw "Phone Number is Invalid"
    }
    if(!email.includes('@') || !email.includes(".com"))
    {
      throw "Email is not Valid"
    }
    const data={name,email,address,phone};
    addUser(data);
    setName('');
    setPhone('');
    setAddress('');
    setEmail('');
    setError('User added SuccessFully');
    setStatus(2);
  }
  catch(error){
    setError(error);
    setStatus(1);
  }
}
  const classes=useStyle();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [phone,setPhone]=useState('');
  const [error,setError]=useState('');
  const [status,setStatus]=useState(0);
  return (
    <div className={classes.cont}>
      <h1 className={classes.title}>Add Employee</h1>
      <div className={classes.form}>
      <div className={`${status===0 && classes.normal} ${status===2 && classes.success} ${status===1 && classes.err}`}>
        {error && <span style={{
          marginLeft:'40px',
          flexGrow:'1'
        }}>
        <i 
        style={{
          marginRight:'7px',
        }}
        className="fa-solid fa-circle-info"></i>
        {error}</span>}
        {error && <i className="fa-solid fa-xmark" style={{
          cursor:'pointer',
          marginRight:'30px'
        }}
        onClick={()=>{
          setError('');
          setStatus(0);
        }}></i>}
        
      </div>
      <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexGrow:'1'
      }}>
      <TextField
      value={name}
        label="Name"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setName(e.target.value);
        }}
      />
      <TextField
      value={email}
        label="Email"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
      />
      <TextField
      value={phone}
      type='tel'
        label="Phone Number"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setPhone(e.target.value);
        }}
      />
      <TextField
      value={address}
        label="Address"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
          marginBottom:20
        }}
        onChange={(e)=>{
          setAddress(e.target.value);
        }}
      />
      <button className={classes.btn}
      onClick={()=>{handleClick()}}
      >
        Add Employee
      </button>
      </div>
      </div>
      <button className={classes.btn2}
      onClick={()=>{history('/users')}}
      >
        View Employee List
      </button>
    </div>
  )
}

export default Form