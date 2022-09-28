import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return(
    <div className="container xl:mx-auto text-center">
      <h1 className="text-3xl font-bold underline text-black-600">
        <div>404</div>
        <div>Opsss! Page Not Found</div>
      </h1>
      <Link to="/">back home</Link>
    </div>
  )
}