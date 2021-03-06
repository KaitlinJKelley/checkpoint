// Responsible for rendering user's Saved Routes and Route Form
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { userStorageKey } from "../auth/authSettings"
import { RouteCard } from "./RouteCard"
import { RouteForms } from "./RouteForms"
import { RouteContext } from "./RouteProvider"
import "./RoutePage.css"

export const RoutePage = () => {
    // imports routes state variable and getRoutes function
    const { routes, getRoutes } = useContext(RouteContext)

    // Declares state variable to be mapped once useEffect runs
    const [userRoutes, setUserRoutes] = useState([])

    const history = useHistory()

    useEffect(() => {
        // calls local API to get routes collection
        getRoutes()
    }, [])

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        // filters the array containing all route objects and return and array containing only the objects for the currently logged in user
        const filteredRoutes = routes.filter(route => route.userId === currentUserId)
        // sets userRoutes equal to filteredRoutes
        setUserRoutes(filteredRoutes)

    }, [routes])

    const handleLogout = () => {
        sessionStorage.removeItem('app_user_id')
        history.push("/")
    }

    return (
        <>
            <button onClick={() => history.push("/edit-profile")}>Edit Profile Info</button>
            <h1>Checkpoint</h1>
            <button className="logout" onClick={() => handleLogout()}>Logout</button>
            <section className="savedRoutes">
                <h2>Saved Routes</h2>
                <p className="recheckMessage">Traffic Incidents are updated periodically, so you may need to Check Traffic again if you're logged in for an extended period</p>
                <div className="savedRoutes__cards">
                    {userRoutes.map(route => {
                        // Invokes RouteCard for every userRoute
                        return <RouteCard key={route.id} routeObj={route} />
                    })}
                </div>
            </section>
            <div className="newRoute">
                <h2>New Route</h2>
                <div className="newRoute__content">
                    {/* Invoke RouteForm component to render New Route form to DOM */}
                    <RouteForms />
                </div>
            </div>
        </>
    )
}