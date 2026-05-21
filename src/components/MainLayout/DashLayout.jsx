import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function DashLayout() {
    return (
        <>
            <div className="container d-flex justify-content-between py-3">
                <Link to="/" className="text-primary fw-bold text-decoration-none">
                    ← Back
                </Link>

                <h1 className="text-danger fw-bold">
                    Dashboard
                </h1>
            </div>

            <Outlet />
        </>
    )
}