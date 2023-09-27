import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='main' style={{ backgroundImage: "url(bluehead.png)", height: "490px", backgroundRepeat: "no-repeat" }}>
                <div className='nav'><img className='logo' src='iei_icon.png' alt='IEI CLUB' /></div>
                <div className='flex'>
                    <div className='first'>
                        <span className='about'>ABOUT</span><br />
                        <span className='iei'>IE(I) CUIET CSE</span><br />
                        <span className='student'>----------------- Student's Chapter</span>
                    </div>
                    <div className='second'>
                        <img className='group' src='grouppic.png' alt='Group Pic' />
                    </div>
                </div>
                <img className='cloud1' src='Cloud_1.png' alt='CLoud' />
                <img className='cloud2' src='Cloud_2.png' alt='CLoud' />
            </div>
            <p className='meet'>Meet our club</p>
            <p className='meetdata'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, eius ullam nihil voluptatem expedita nulla recusandae natus incidunt!
                Delectus omnis quae provident quam blanditiis odit tenetur ex dicta reprehenderit unde?
            </p>
            <img className='cloud3' src='Cloud_3.png' alt='CLoud' />
            <img className='cloud4' src='Cloud_4.png' alt='CLoud' />
            <div className='fest' style={{ backgroundImage: "url(curve.png)", height: "500px" }}>
                <p className='fest-main'>The Fests</p>
                <span className='fest-sub'>Engage with us</span>
                <div className='flex1'>
                    <div className='third'>
                        <img className='vector' src='vector.png' alt='Vector' />
                    </div>
                    <div className='fourth'>
                        <div className='flex3'>
                            <div className='d'><p className='inside'><img className='fest_logo' src='fest_logo.png' alt='Fest Logo' />&nbsp; Workshops</p></div>
                            <div className='h'><p className='inside'><img className='fest_logo' src='fest_logo.png' alt='Fest Logo' />&nbsp;Coding Competitions</p></div>
                        </div>
                        <div className='flex3'>
                            <div className='d'><p className='inside'><img className='fest_logo' src='fest_logo.png' alt='Fest Logo' />&nbsp;Seminars</p></div>
                            <div className='h'><p className='inside'><img className='fest_logo' src='fest_logo.png' alt='Fest Logo' />&nbsp;Tech Events</p></div>
                        </div>
                        <div className='flex3'>
                            <div className='d'><p className='inside'><img className='fest_logo' src='fest_logo.png' alt='Fest Logo' />&nbsp;Hackathons</p></div>
                            <div className='h'><p className='inside'><img className='fest_logo' src='fest_logo.png' alt='Fest Logo' />&nbsp;Code Wars</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our-team'>
                <p className='team'>Our Team</p>
                <p className='family'>More like a family to us</p>
                <p className='family-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio harum aspernatur dolorum, esse illum quam iure in, repellendus impedit 
                    atque neque temporibus quisquam modi laboriosam numquam, facere cum ad! Sit!
                </p>
            </div>
        </>
    )
}

export default Navbar   