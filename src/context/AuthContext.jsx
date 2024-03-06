import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseConfig";
import useFetch from "../hooks/useFetch";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const G_KEY = 'AIzaSyAlo2RyJuMgWOZ6BoNSUm4GwbJ6fiJ-Jpw'
    const [session, setSession] = useState(null)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    const googleUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${G_KEY}`
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
        <AuthContext.Provider value={{ session, search, searchResults, handleInput, handleSearch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }