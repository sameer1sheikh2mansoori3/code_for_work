'use client';

import { useState } from 'react';
import { Pencil } from 'lucide-react';

const rooms = Array(15).fill({
  roomNo: '005',
  roomCode: 'RM52',
  wardName: 'Pediatric ward',
});

const ITEMS_PER_PAGE = 12;

export default function RoomList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rooms.length / ITEMS_PER_PAGE);

  const currentRooms = rooms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6  min-h-screen text-white">
      <div className="grid grid-cols-4 gap-4">
        {currentRooms.map((room, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded-lg shadow-md flex flex-col relative"
          >
            <h2 className="text-lg font-bold">Room No. {room.roomNo}</h2>
            <p className="text-sm mt-1">
              Room code: <span className="font-bold">{room.roomCode}</span>
            </p>
            <p className="text-sm">
              Ward name: <span className="font-bold">{room.wardName}</span>
            </p>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
              <Pencil size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded-md bg-gray-700 text-white disabled:opacity-50"
        >
          {'<'}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-md ${
              currentPage === i + 1 ? 'bg-white text-black' : 'bg-gray-700 text-white'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded-md bg-gray-700 text-white disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
