import React from "react";
import "./Table.css";
import { numberFormat } from "./util"

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numberFormat(country.cases)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
