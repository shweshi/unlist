import React from 'react'

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = require('../' + this.props.url);
   }

   renderTableHeader() {
      let header = Object.keys(this.state[0])
      return header.map((key, index) => {
         return <th key={index}>{key}</th>
      })
   }

   renderTableData() {
      return this.state.splice(0, 10).map((data) => {
         const values = Object.values(data);
         const items = [];
         values.forEach((value) => {
            items.push(
               <td>{value}</td>
            )
         })
         return (
            <tr key={values[0]}>
               {items}
            </tr>
         )
      });
   }

   render() {
      return (
         <div className="csv">
            <h1 id='table-title'>Heading</h1>
            <table id='table'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table