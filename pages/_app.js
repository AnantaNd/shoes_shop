import { Alert } from 'components/Alert/Alert'
import Layouts from 'components/Layouts/Layouts'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { userService } from 'services'
import '../styles/globals.css'

function MyApp({ Component, pageProps:{session, ...pageProps} }) {

  const router = useRouter()
  const [user, setUser] = useState(null)
  const [authorized, setAuthorized] = useState(false)

  useEffect(()=>{
    authCheck(router.asPath)

    const hideContent =()=>setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)
    router.events.on('routeChangeComplete', authCheck)

    return ()=>{
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck);
    }
  }, [])

  function authCheck(url){
    setUser(userService.userValue)
    const publicPaths = ['/account/login', '/account/register']
    const path = url.split('?')[0]
    if(!userService.userValue && !publicPaths.includes(path)){
      setAuthorized(false)
      router.push({
        pathname:'/account/login',
        query:{returnUrl: router.asPath}
      })
    }else{
      setAuthorized(true)
    }
  }

  return (
    <>
      {/* <Head>
        <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      </Head> */}
      <div>
        <Layouts>
          <Alert/>
          {authorized && 
            <Component {...pageProps}/>
          }
        </Layouts>
      </div>
    </>
  )
}

export default MyApp
