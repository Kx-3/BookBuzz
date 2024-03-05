import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://monsiikgxkegmpfuhjzy.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbnNpaWtneGtlZ21wZnVoanp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NDEzNzcsImV4cCI6MjAyNTExNzM3N30.vR_Y5IoFfOuFoZjpeokIWSGcc5QzxNU8EeKCxbcUBgE"

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)