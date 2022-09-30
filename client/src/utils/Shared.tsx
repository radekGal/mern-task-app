import { Outlet } from 'react-router-dom';

export const Shared = () => {
  return(
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen transition duration-300 md:w-4/12 lg:ml-0 lg:w-[30%] xl:w-[20%] 2xl:w-[15%]">
        <h2>sidebar</h2>
      </aside>
      <div className="ml-auto mb-6 lg:w-[70%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 lg:py-2.5 ">Search, Full, Info, Person</div>
        <div className="h-screen bg-gray">
          <Outlet />
        </div>
      </div>
    </>
  )
}