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
            <section className="content-cons">
                <div className="content-l">
                    <img src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/334101625_580664690749925_8451531021388090018_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGoNHlDKSbe8uu3eqmLJZLfavZEAUNuhsZq9kQBQ26GxnW8cs8UTnbGB5uUJIajhP0seChCZTOcMjTBy4JD5XKs&_nc_ohc=DK6XXR3bNhcAX8GhZjD&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfCinZ-79MmeMLdugy1hrcX8cw9ZsnwrXrBt7yqsc-V5DA&oe=64221894" alt=""/>
                </div>
                <div className="content-r">
                    <h2>{t074.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-r">
                    <h2>{safe.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
                <div className="content-l">
                    <img src="https://yt3.googleusercontent.com/vlJpEr6vT7NLsSP--Z_Lsc-HD-m0uemQ0_U9MkfoPMJX4y6Ur0aiYXC5TRARHLWuYbhqQJIM=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-l">
                    <img src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/336885361_658976899571433_8336861719622568724_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFgE90gIwg_LC4l5Q7HrDiI-2UIP4D8sMb7ZQg_gPywxkuVib9LWap6yjclBOv1q2jJIi4tSTst14dgQ95RT9LA&_nc_ohc=UowxM3BUaW0AX8qbwn3&_nc_ht=scontent.fbkk6-1.fna&oh=00_AfAhFi-_RyS795sYBZRwypztkAEMr-_HrZbgTGNjGpD9AA&oe=6422B027" alt=""/>
                </div>
                <div className="content-r">
                    <h2>{whal.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-r">
                    <h2>{land.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
                <div className="content-l">
                    <img src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/330844642_935141617923214_5434973668510282814_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEP1VVm7iGUSxfi4WtHm7jlj3876y5N11OPfzvrLk3XU0ZjkbEOKhygzT1YyEG4bOsN1xOxmoMi-AYxn3Lak6yA&_nc_ohc=6hfqoMlXGy4AX8QWyFm&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfDBL4DCpBXi43TTcV8L0aiVV23Jhc-ZjI2iD-zkKUQjFA&oe=64236B63" alt=""/>
                </div>
            </section>
        </div>
    </main>
// create button react
  )
}

export default ContentArt