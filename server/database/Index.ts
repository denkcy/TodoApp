
import { createClient } from '@supabase/supabase-js'
const URL = process.env.DATABASE_URL
const keys = process.env.DATABASE_KEY
// Create a single supabase client for interacting with your database
const supabase = createClient( "https://nlyictooxiotgsihgrgx.supabase.co",
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5seWljdG9veGlvdGdzaWhncmd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNjEwNzQsImV4cCI6MTk5NjkzNzA3NH0.Tr5hyLkcf5KOrJMS-EgRFN7eCeu1G1OsOLb2K9gdbWk')

export  default  supabase
