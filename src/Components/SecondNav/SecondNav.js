import React from 'react'

function SecondNav() {
    return (
        <div className="flex mx-8 justify-between my-4 sm:flex-col">
            <div className="py-2 px-8 bg-white shadow-md sm:my-4" style={{borderRadius: "22px"}}>
                Filters
            </div>
            <div className="py-2 px-8 bg-white shadow-md" style={{borderRadius: "22px"}}>
                Sort By Recently Added
            </div>
        </div>
    )
}

export default SecondNav
