// import { Briefcase, CheckCheck, Clock, StarX } from 'lucide-react'
// // import React from 'react'

// const ApplicationSummaryCards = () => {

//   // const 
//   return (
//     <div>
//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
//       <div className="bg-blue-600 text-white p-4 rounded-lg min-h-32 flex  justify-between">
//         <div className='flex flex-col justify-between'>
//           <h1 className="text-2xl font-bold">Total Applications</h1>
//         <p className="text-4xl font-bold">{0}</p>
//         </div>
//         <span><Briefcase className='text-white '/></span>
        
//       </div>

//        <div className="bg-green-600 text-white p-4 rounded-lg min-h-32 flex  justify-between">
//         <div className='flex flex-col justify-between'>
//           <h1 className="text-2xl font-bold">ShortList</h1>
//         <p className="text-4xl font-bold">{0}</p>
//         </div>
//         <span><CheckCheck className='text-white '/></span>
        
//       </div>

//        <div className="bg-orange-600 text-white p-4 rounded-lg min-h-32 flex  justify-between">
//         <div className='flex flex-col justify-between'>
//           <h1 className="text-2xl font-bold">Pending</h1>
//         <p className="text-4xl font-bold">{0}</p>
//         </div>
//         <span><Clock className='text-white '/></span>
        
//       </div>

//        <div className="bg-red-800 text-white p-4 rounded-lg min-h-32 flex  justify-between">
//         <div className='flex flex-col justify-between'>
//           <h1 className="text-2xl font-bold">Rejected</h1>
//         <p className="text-4xl font-bold">{0}</p>
//         </div>
//         <span><StarX className='text-white '/></span>
        
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ApplicationSummaryCards



import {
  Briefcase,
  CheckCheck,
  Clock,
  StarX,
} from "lucide-react";

import type { Application } from "../../types";

type ApplicationSummaryCardsProps = {
  applications: Application[];
};

const ApplicationSummaryCards = ({
  applications,
}: ApplicationSummaryCardsProps) => {
  const total = applications.length;

  const shortlisted = applications.filter(
    (application) => application.status === "Shortlisted"
  ).length;

  const pending = applications.filter(
    (application) => application.status === "Pending"
  ).length;

  const rejected = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
      <div className="bg-blue-600 text-white p-4 rounded-lg min-h-32 flex justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">
            Total Applications
          </h1>

          <p className="text-4xl font-bold">
            {total}
          </p>
        </div>

        <span>
          <Briefcase className="text-white" />
        </span>
      </div>

      <div className="bg-green-600 text-white p-4 rounded-lg min-h-32 flex justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">
            Shortlist
          </h1>

          <p className="text-4xl font-bold">
            {shortlisted}
          </p>
        </div>

        <span>
          <CheckCheck className="text-white" />
        </span>
      </div>

      <div className="bg-orange-600 text-white p-4 rounded-lg min-h-32 flex justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">
            Pending
          </h1>

          <p className="text-4xl font-bold">
            {pending}
          </p>
        </div>

        <span>
          <Clock className="text-white" />
        </span>
      </div>

      <div className="bg-red-800 text-white p-4 rounded-lg min-h-32 flex justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">
            Rejected
          </h1>

          <p className="text-4xl font-bold">
            {rejected}
          </p>
        </div>

        <span>
          <StarX className="text-white" />
        </span>
      </div>
    </div>
  );
};

export default ApplicationSummaryCards;