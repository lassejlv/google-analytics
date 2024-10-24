import { createRootRoute, Outlet } from '@tanstack/react-router'
import CookieBanner from '../components/CookieBanner'

export const Route = createRootRoute({
  component: function Root() {


    return (
      <>
        <CookieBanner />
        <Outlet />
      </>
    )
  }
})
