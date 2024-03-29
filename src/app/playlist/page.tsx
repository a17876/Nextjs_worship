import React from "react";
import data from "@/db/fakedb";
import { BsCaretRightSquare } from "react-icons/bs";
import { TableSort } from "@/components/TableSort";

export default function page() {
  return (
    <>
      <table className="table-auto border-collapse w-full">
  <thead>
    <tr>
      <th className="px-4 py-2">No.</th>
      <th className="px-4 py-2">Title</th>
      <th className="px-4 py-2">Code</th>
      <th className="px-4 py-2">Reference</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index} className="border">
        <td className="px-4 py-2">{item.id}</td>
        <td className="px-4 py-2">{item.title}</td>
        <td className="px-4 py-2 text-center">{item.code}</td>
        <td className="px-4 py-2 text-center">
          {item.reference ? <BsCaretRightSquare /> : ""}
        </td>
      </tr>
    ))}
  </tbody>
</table>
<TableSort></TableSort>
    </>
  );
}
