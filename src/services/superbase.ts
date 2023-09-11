import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xwtfmwwwydlaztsgrgit.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dGZtd3d3eWRsYXp0c2dyZ2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMTAwNjcsImV4cCI6MjAwOTU4NjA2N30.-wP0fGtYztfKYRniO8zdwF55RZveakaMolXl3vCBTJ4" 
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;