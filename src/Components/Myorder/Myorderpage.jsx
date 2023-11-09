import React from 'react'
import './Myorderpage.css'
import Table from '../Common/Table'
const Myorderpage = () => {
  return (
  <section className="align_center myorder_page">
    <Table headings={["Order","Products","Total","Status"]} >
     <tbody>
        <tr>
            <td className='k' >1</td>
            <td className='k'>iPhone,Power Bank</td>
            <td className='k'>$1299</td>
            <td className='k'>Shipped</td>
        </tr>
     </tbody>


    </Table>
  </section>
  )
}

export default Myorderpage
