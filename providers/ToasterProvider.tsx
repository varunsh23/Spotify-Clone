"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return ( 
    <Toaster 
    position="top-center"
  reverseOrder={true}
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        }
      }}
    /> 
  );
}
 
export default ToasterProvider;