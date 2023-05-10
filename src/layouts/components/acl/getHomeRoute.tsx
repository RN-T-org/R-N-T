/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return process.env.NEXT_PUBLIC_HOME_PAGE
  else return process.env.NEXT_PUBLIC_HOME_PAGE
}

export default getHomeRoute
