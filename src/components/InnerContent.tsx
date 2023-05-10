import {Outlet} from 'react-router-dom';

export const InnerContent = () =>{
  return (
    <div className='inner-content'>
    <Outlet/> 
  </div>
  );

}


