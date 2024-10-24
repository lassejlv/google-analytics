import { createRootRoute, Outlet } from '@tanstack/react-router'
import { useState } from 'react';
import ReactGA from 'react-ga4';

export const Route = createRootRoute({
  component: function Root() {

    const [withAnalytics, setWithAnalytics] = useState(false)

    // Initialize Google Analytics with Gtag ID
    if (withAnalytics) {
      ReactGA.initialize("G-F9Q9F11W6E")
    }

    return (
      <>
        <Outlet />
      </>
    )
  }
})
