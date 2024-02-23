import React from 'react'
import evergreen_logo from '../assets/image/webp/evergreen_logo.webp'
function Preloader() {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("over_hidden");
    }, 3000);

    return (
        <div>
            <div id="none" className="h-screen w-full bg-[white]  fixed top-0 start-0  z-40">
                <div className="flex justify-center items-center h-screen">
                    <div className=' animate-bounce relative'>
                        <img src={evergreen_logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader