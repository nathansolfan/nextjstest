const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://wtogoarjbhtlxkuzgipw.supabase.co";
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0b2dvYXJqYmh0bHhrdXpnaXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMzA1MDgsImV4cCI6MjAxMzkwNjUwOH0.GVgvbj0il6S98maPqRBd4uaDSIDzKorHcNkarIwMYko`

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
