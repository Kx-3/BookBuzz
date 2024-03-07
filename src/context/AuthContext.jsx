import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseConfig";
import useFetch from "../hooks/useFetch";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const G_KEY = 'AIzaSyAlo2RyJuMgWOZ6BoNSUm4GwbJ6fiJ-Jpw'
    const TIMES_KEY = 'MENH0JaFr7qfGXhh4KumJ4voGuddZQeo'
    const [session, setSession] = useState(null)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    const [bestSellers, setBestSellers] = useState(null)
    const googleUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${G_KEY}`
    const timesUrl = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${TIMES_KEY}`
    const data2 = useFetch(timesUrl)
    const data = useFetch(googleUrl)

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchResults(data)

    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ session, search, searchResults, handleInput, handleSearch, bestSellers }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }