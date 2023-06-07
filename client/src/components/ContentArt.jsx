import React from 'react'
import '../sass/Page1/ContentArt.scss'

const t074 = {
  title: 'T_047',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}
const safe = {
  title: 'Safeplanet',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}
const land = {
  title: 'Landokmai',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}
const whal = {
  title: 'Whal & Dolph',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}


function ContentArt() {
  return (
    <main id='content-art'>
       <div className="container">
        <h1>Popular Artist</h1>
        <hr style={{width:"30%"}}/>
            <section className="content-cons">
                <div className="content-l">
                    <img src="data:image/jpeg;base64,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" alt=""/>
                </div>
                <div className="content-r">
                    <h2>{t074.title}</h2>
                    <p>
                    สีของฟ้าเพลงแรกของ T_047 มันเกิดจากการมองว่าเราได้ประโยชน์อะไรจากการถ่ายท้องฟ้ามา 3-4 ปี เราเห็นการเปลี่ยนแปลงของสีของฟ้าที่มันไม่ซ้ำเดิม เห็นการเปลี่ยนแปลงของความรู้สึกตัวเองที่ไม่เหมือนเดิม เราแค่อยากจะเล่าตรงนี้ออกไป คือเราไม่ได้พยายามว่าฉันจะต้องเป็นปรัชญา ต้องเข้าใจโลก แต่ด้วยธรรมชาติของเรามันเป็นแบบนั้นจริง ๆ เป็นอีกมุมที่คิดว่าน่าจะดีต่อคนฟังมากกว่า                    </p>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-r">
                    <h2>{safe.title}</h2>
                    <p>
                    Safeplanet (เซฟแพลนเน็ต) มีความหมายว่า "พื้นที่ปลอดภัยของพวกเรา เป็นพื้นที่ที่พวกเราแสดงผลงานได้อย่างสบายใจ" โดยวงนี้เกิดขึ้นจาก เอ - ฐิติภัทร อรรถจินดา และ ดอย - อภิวิชญ์ คำฟู ซึ่งทั้งสองมีสไตล์และแนวเพลงที่คล้าย ๆ กันซึ่งนั้นก็คือแนวอินดี้ป๊อปสบาย ๆ  จากนั้นจึงได้ชวนชยปัญญ์ จันทรานุสนธิ์ รับหน้าเป็นมือเบส ซึ่งเคยเรียนที่วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหิดล ซึ่งได้มาร่วมงานกันภายหลัง                    </p>
                </div>
                <div className="content-l">
                    <img src="https://yt3.googleusercontent.com/vlJpEr6vT7NLsSP--Z_Lsc-HD-m0uemQ0_U9MkfoPMJX4y6Ur0aiYXC5TRARHLWuYbhqQJIM=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-l">
                    <img src="https://www.dochord.com/wp-content/uploads/2021/04/Whal-Dolph.jpg" alt=""/>
                </div>
                <div className="content-r">
                    <h2>{whal.title}</h2>
                    <p>
                    วงป๊อปอินดี้ชื่อน่ารัก “Whal & Dolph” (วาฬ แอนด์ ดอล์ฟ) ของสองเพื่อนซี้ ปอ-กฤษสรัญ จ้องสุวรรณ และ น้ำวน-วนนท์ กุลวรรธไพสิฐ จากค่าย What The Duck (วอท เดอะ ดัก)  เจ้าของบทเพลงเศร้าเคลือบรอยยิ้มขวัญใจวัยรุ่น Gen Z ที่กำลังมีผลงานเพลง “ใจสลาย” อยู่ในขณะนี้                    </p>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-r">
                    <h2>{land.title}</h2>
                    <p>
                    น่าจะเป็นชื่อที่ใครหลายคนติดปาก หรือเพลงของพวกเธอน่าจะไปติดอยู่ในเพลย์ลิสต์ของใครหลายคนอยู่เหมือนกัน ด้วยเสียงกีตาร์ที่นุ่มนวลชวนเคลิ้ม กับเสียงร้องที่อ่อนโยนเป็นเอกลักษณ์ ขับกล่อมคำรักที่เราอยากจะเชื่อและคอยฝันถึง ทำให้พวกเธอกลายเป็นศิลปินหญิงที่น่าจำตามองในทันที ฟังใจ เปิดบ้านชวน แอ๊นท์ และ อูปิม                    </p>
                </div>
                <div className="content-l">
                    <img src="https://joox-cms-image-1251316161.file.myqcloud.com/2022/10/26/8e4bf81d-74e1-40c4-a437-d91cf64f1ca1.jpg/640" alt=""/>
                </div>
            </section>
        </div>
    </main>
// create button react
  )
}

export default ContentArt