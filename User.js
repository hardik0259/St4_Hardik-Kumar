import { createTheme, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const useStyle=makeStyles((theme)=>({
  cont:{
    background:'url(https://1.bp.blogspot.com/-7zzrirohLYM/XwrTxF-Q5UI/AAAAAAAAGrs/CfZTGKzAHr8ssgQ5IctOvzxoan91goA5ACLcBGAsYHQ/s2000/4k%2BHd%2BBackgrounds%2BBy%2BDeepak%2BEditing%2B%25284%2529.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    height:'99.9vh',
  },
  table:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    width:'fit-content',
    background: 'rgba(255,255,255)',
  },
  cell:{
    paddingLeft:'50px',
    paddingRight:'50px',
    color:"white",
    fontWeight:"800",
  },
  cell1:{
    paddingLeft:'45px',
    paddingRight:'45px',
    color:"black",
    fontWeight:"800",
  },
  btn2:{
    marginTop:'50px',
    height:'50px',
    border:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
  }
}))
const User = (props) => {
  const classes=useStyle();
  const {users}=props;
  const history=useNavigate();
  return (
    <div className={classes.cont}>
      <h1 style={{color:'white',fontSize:'40px',marginTop:'70px',marginBottom:'50px'}}>Student List</h1>
      {!users?<h1 style={{color:'white',fontSize:'40px'}}>No Employee Added Yet</h1>:
      <TableContainer className={classes.table}>
        <Table>
        <TableHead style={{
          backgroundColor:'#166bd3',
        }}>
          <TableRow>
            {['Name','Email','Phone Number','Address'].map((head)=>{
              return (
                <TableCell className={classes.cell} key={head}>
                  {head}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user)=>{
            return (
              <TableRow key={user.name}>
                <TableCell className={classes.cell1}>
                  {user.name}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.email}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.phone}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.address}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        </Table>
      </TableContainer>
      }
      <button className={classes.btn2}
      onClick={()=>{history('/')}}
      >
        Back To Home Page
      </button>
    </div>
  )
}

export default User