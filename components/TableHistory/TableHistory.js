import React from 'react'
import style from './TableHistory.module.css'

export const TableHistory = ({dataHistory}) => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>No</th>
            <th>Item</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataHistory.map((data, idx)=>{
            return(
              <tr key={idx}>
                <td className={style.rowId}>{idx}</td>
                <td>{data.name}</td>
                <td className={style.rowPrice}>Rp. {data.price}</td>
                <td className={style.rowStatus}>pending</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
