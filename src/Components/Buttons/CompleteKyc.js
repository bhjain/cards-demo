import React from 'react'
import { Link } from 'react-router-dom'

function CompleteKyc({back, color}) {
    return (
        <div>
            <div
                className="login w-40 h-10 flex items-center justify-center lg:w-28 lg:h-8 md:text-sm"
                style={{ backgroundColor: `${back}`, color: `${color}` }}
            >
                <Link to="/kyc">
                    <button>
                    Complete KYC
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CompleteKyc
