import { React } from 'react';
import {Link} from 'react-router-dom';

import "./TeamTitle.scss";

export const TeamTitle = ({ teamName }) => {

 if(!teamName) return null;

  return(
   <div className="TeamTitle">
      <h1>
       <Link to={`/teams/${teamName}`}>
         {teamName}
       </Link>
      </h1>
   </div>
  );
}


