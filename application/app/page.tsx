'use client'

import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Home() {
  const[loading, setLoading] = useState(true)
  const[authenticated, setAuthenticated] = useState(false)
  const[username, setUsername] = useState("")
  const[photoURL, setPhotoURL] = useState("")
  const[email, setEmail] = useState("")  
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
        const user = auth.currentUser
        setUsername(user!.displayName!)
        setPhotoURL(user!.photoURL!)
        setEmail(user!.email!)
      } else {
        setAuthenticated(false)
      }
    })
      setLoading(false)
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (!loading) {
      if (authenticated) {
        router.push('/')
      } else {
        router.push('/auth/login')
      }
    }
  }, [loading, authenticated, router])

  if (loading) {
    return <Loader />
  }

  return (
   <div className="w-dvw bg-gradient-to-b from-purple-300 to-black/90 via-gray-700">
      <NavBar 
        username={username}
        photoURL={photoURL}
        email={email}
      />
      <Body 
        username={username}
        photoURL={photoURL}
        email={email}
      />
      <Footer/>
   </div>
  )
}
