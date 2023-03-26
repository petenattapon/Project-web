import React from 'react'
import '../sass/Page1/Paragraph.scss'

let Para = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'

function Paragraph() {
  return (
    <main id='main'>
        <article className='container'>
            <div className="paragraph-container">
                <p>{Para}</p>
            </div>
        </article>
    </main>
  )
}

export default Paragraph