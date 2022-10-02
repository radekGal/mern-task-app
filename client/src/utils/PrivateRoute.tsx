import React, { FC } from 'react';
import { Navigate } from "react-router-dom"

type PrivateRouteProps = {
  children: React.ReactNode
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {

  let auth = { 'exist' : true }

  if(!auth.exist) {
    return <Navigate to='/login' />
  }

  return <>{children}</>
}