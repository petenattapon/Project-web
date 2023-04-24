import React from 'react'
const album = {
    sideA: [
        'In the woods',
        'กล่องดำ',
        'โอยา',
        'กอดความเจ็บช้ำ',
        'ห้องกระจก',
        'ตัดสินใจ',
        'คำตอบ',
        'ดินแดน'
    ],
    sideB: [
        'ระบาย',
        'แสงสว่าง',
        'ข้างกาย',
        'เพียงเธอ',
        'ลอง1',
        'แสงสว่าง (Acoustic Version)',
        'เพียงเธอ (Acoustic Version)'
    ]
};
function DataSafe() {
    return (
        <div>
            <h5>Side A</h5>
            <ul>
                {album.sideA.map((song, index) => (
                    <li key={`sideA_${index}`}>{song}</li>
                ))}
            </ul>
            <h5>Side B</h5>
            <ul>
                {album.sideB.map((song, index) => (
                    <li key={`sideB_${index}`}>{song}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataSafe