import { useEffect, useState } from "react"
import ReactGA from "react-ga4"



export default function CookieBanner() {

  const [withAnalytics, setWithAnalytics] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("cookieBanner") === "true") {
      setWithAnalytics(true)
    } else {
      setWithAnalytics(false)
    }
  }, [withAnalytics])

  // Initialize Google Analytics with Gtag ID
  if (withAnalytics === true) {
    ReactGA.initialize("G-F9Q9F11W6E")
  }

  return (
    <>
      {!withAnalytics &&
        <div className="absolute bottom-0 w-full bg-zinc-900 text-white text-center p-4">
          <p className="text-sm">We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies. <a href="/privacy-policy" className="underline">Learn more</a></p>
          <button onClick={() => {
            localStorage.setItem("cookieBanner", "true")
            setWithAnalytics(true)
          }} className="bg-white text-gray-800 px-4 py-2 rounded mt-2">Accept</button>
        </div>
      }
    </>
  )

}
