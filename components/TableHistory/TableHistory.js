import React from 'react'
import style from './TableHistory.module.css'


export const TableHistory = ({dataHistory}) => {
  const dotPrice =(numb)=>{
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const styleStatus = (data) =>{
    if(data === 'success'){
      return 'green'
    }else if(data === 'pending'){
      return 'orange'
    }else if(data === 'failed'){
      return 'red'
    }
  }

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>Item</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataHistory.map((data, idx)=>{
            return(
              <tr key={idx}>
                <td className={style.rowName}>{data.name}</td>
                <td className={style.rowPrice}>Rp. {dotPrice(data.price)}</td>
                <td className={style.rowStatus} style={{color: styleStatus(data.status)}}>{data.status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
