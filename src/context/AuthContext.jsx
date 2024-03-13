import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseConfig";
import useFetch from "../hooks/useFetch";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const G_KEY = import.meta.env.VITE_G_KEY
    const [session, setSession] = useState(null)
    const [search, setSearch] = useState('')
    const [toggle, setToggle] = useState(false)
    const [searchResults, setSearchResults] = useState(null)
    const googleUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&maxResults=40&startIndex=0&key=${G_KEY}`
    const TIMES_KEY = import.meta.env.VITE_TIMES_KEY
    const timesUrl = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${TIMES_KEY}`
    const bestsellers = useFetch(timesUrl)    
    const data = useFetch(googleUrl)

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleToggle = () => {
        setToggle(!toggle)
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
        <AuthContext.Provider value={{ session, search, searchResults, handleInput, handleSearch, toggle, handleToggle, bestsellers }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }