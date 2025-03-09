"use client"

import { useState } from "react"
import "./styles.css"

// Ward data structure

export default function WardTable() {
  // Initial ward data from the image
  const [wards, setWards] = useState([
    { code: "Wing A", name: "Sample ward", roomsAdded: 12 },
    { code: "Wing B", name: "Sample ward", roomsAdded: 24 },
    { code: "Wing c", name: "Sample ward", roomsAdded: 12 },
    { code: "Wing d", name: "Sample ward", roomsAdded: 30 },
    { code: "Wing e", name: "Sample ward", roomsAdded: 15 },
    { code: "Wing f", name: "Sample ward", roomsAdded: 10 },
    { code: "Wing g", name: "Sample ward", roomsAdded: 40 },
    { code: "Wing h", name: "Sample ward", roomsAdded: 30 },
    { code: "Wing j", name: "Sample ward", roomsAdded: 15 },
    { code: "Wing k", name: "Sample ward", roomsAdded: 50 },
    { code: "Wing l", name: "Sample ward", roomsAdded: 30 },
    { code: "Wing m", name: "Sample ward", roomsAdded: 15 },
    { code: "Wing n", name: "Sample ward", roomsAdded: 12 },
    { code: "Wing o", name: "Sample ward", roomsAdded: 12 },
  ])

  // Function to handle edit (placeholder for now)
  const handleEdit = (wardCode) => {
    console.log(`Editing ward: ${wardCode}`)
    // Implement edit functionality here
  }

  return (
    <div className="ward-table-container">
      <table className="ward-table">
        <thead>
          <tr>
            <th>WARD CODE</th>
            <th>WARD NAME</th>
            <th>NO. OF ROOMS ADDED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wards.map((ward) => (
            <tr key={ward.code}>
              <td>{ward.code}</td>
              <td>{ward.name}</td>
              <td>{ward.roomsAdded}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(ward.code)} aria-label={`Edit ${ward.code}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

