import {JSX} from 'react';
import Header from "~c/partials/Header";
import './main.scss';

type Props = {
  children: JSX.Element,
};

const MainLayout = ({ children }:Props) => {
  return (
    <div className="view-wrapper bg-dark" data-bs-theme="dark">
      <div className="view-main">
          <Header />
          <main>{children}</main>
      </div>
    </div>
  );
}

export default MainLayout