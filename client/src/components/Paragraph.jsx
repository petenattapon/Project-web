import React from 'react';
import '../sass/Page1/Paragraph.scss';

let Para = "Welcome to our website. It's a collection of galleries, cassette tape set. Whether it's new or old artists, in our gallery, we have them all. Anyone who is a disciple of cassette tapes, let's join together. Have fun with our gallery.";

function Paragraph() {
  return (
    <main id='main'>
      <article className='container'>
        <div className="paragraph-container">
          <p>{Para}</p>
        </div>
      </article>
    </main>
  );
}

export default Paragraph;
