import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Suspense } from 'react'
import SiteLayout from './layout/SiteLayout'
//import icon
import { FaSpinner } from 'react-icons/fa'
function App() {
  const router = useRoutes(routes)
  return (
    <div className=" App dark:bg-slate-800">
      <Suspense
        fallback={
          <SiteLayout>
            <div className="flex h-screen w-full items-start  justify-center pt-40">
              <div className=" animate-spin text-3xl text-gray-500">
                <FaSpinner />
              </div>
            </div>
          </SiteLayout>
        }
      >
        {router}
      </Suspense>
    </div>
  )
}

export default App
