import React from 'react';

const Table = ({data}) => {
  const fields = data.map(el => {
    return el.fields;
  })

  return (
    <table className="key">
      <thead>
        <tr style={{textTransform:'uppercase', color:'lightblue'}}>
          <th>Name</th>
          <th>Notes</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="fullWidth">
        {fields.map((el, index) => {
          return (
            <tr key={index} className="key__row">
              <td className="key__cell" style={{fontWeight:'bold'}}>
                {el.Name}
              </td>
              <td className="key__cell">
                {el.Notes}
              </td>
              <td className="key__cell colorKey_layers">
                {el.Status}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;