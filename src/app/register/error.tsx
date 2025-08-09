"use client"

import { ReactElement, useEffect } from "react"

export default function Error({error} : {error: Error}):ReactElement{
    

    return (
        <p  className="text-red-500 text-2xl">{error.message}</p>
    )
}

