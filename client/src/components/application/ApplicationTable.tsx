// import { jobs } from "../../services/jobs/jobApi" // adjust path
// import { mockApplications } from "../../services/application/jobApplicationApi" // adjust path
// import {  useAppSelector } from "../../app/hooks"
// // import { useEffect } from "react"
// // import { getMyApplication } from "../../features/application/jobApplicationSlice"

// const statusStyles: Record<string, string> = {
//   Pending: "bg-yellow-500/20 text-yellow-400",
//   Shortlisted: "bg-green-500/20 text-green-400",
//   Rejected: "bg-red-500/20 text-red-400",
// }

// const ApplicationTable = () => {
//   // const dispatch = useAppDispatch()
//   const {user} = useAppSelector((state)=>state.auth)
//   const userId = user?.id
//   // const userId = 2
  

//   // useEffect()=>{

//   //   dispatch(getMyApplication())
//   // }

//   const userApplications = mockApplications
//     .filter((application) => application.userId === userId)
//     .map((application) => {
//       const job = jobs.find((job) => job.id === application.jobId)
//       return {
//         ...application,
//         jobTitle: job?.title ?? "Unknown",
//         location: job?.location ?? "Unknown",
//       }
//     })

//   return (
//     <div className="w-full overflow-x-auto rounded-lg  p-8">
      
//       <table className="min-w-lg w-full text-sm text-left rounded-2xl text-gray-300 bg-gray-900">
//         <thead className="bg-gray-800 text-white uppercase text-xs">
//           <tr>
//             <th className="px-4 py-3">Application</th>
//             <th className="px-4 py-3">Job Title</th>
//             <th className="px-4 py-3">Applied Date</th>
//             <th className="px-4 py-3">Status</th>
//             <th className="px-4 py-3">Location</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userApplications.map((application, index) => (
//             <tr
//               key={application.id}
//               className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors"
//             >
//               <td className="px-4 py-3">{index + 1}</td>
//               <td className="px-4 py-3 font-medium text-white">{application.jobTitle}</td>
//               <td className="px-4 py-3">
//                 {new Date(application.appliedAt).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "short",
//                   day: "numeric",
//                 })}
//               </td>
//               <td className="px-4 py-3">
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[application.status]}`}
//                 >
//                   {application.status}
//                 </span>
//               </td>
//               <td className="px-4 py-3">{application.location}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {userApplications.length === 0 && (
//         <div className="text-center text-gray-500 py-8">No applications found.</div>
//       )}
//       </div>
//   )
// }

// export default ApplicationTable





import { jobs } from "../../services/jobs/jobApi";
import type { Application } from "../../types";

type ApplicationTableProps = {
  applications: Application[];
};

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-500/20 text-yellow-400",
  Shortlisted: "bg-green-500/20 text-green-400",
  Rejected: "bg-red-500/20 text-red-400",
};

const ApplicationTable = ({
  applications,
}: ApplicationTableProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg p-8">
      <table className="min-w-[600px] w-full text-sm text-left rounded-2xl text-gray-300 bg-gray-900">
        <thead className="bg-gray-800 text-white uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Application</th>
            <th className="px-4 py-3">Job Title</th>
            <th className="px-4 py-3">Applied Date</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Location</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application, index) => {
            const job = jobs.find(
              (job) => job.id === application.jobId
            );

            return (
              <tr
                key={application.id}
                className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors"
              >
                {/* Serial number */}
                <td className="px-4 py-3">
                  {index + 1}
                </td>

                {/* Job title */}
                <td className="px-4 py-3 font-medium text-white">
                  {job?.title ?? "Unknown"}
                </td>

                {/* Applied date */}
                <td className="px-4 py-3">
                  {new Date(
                    application.appliedAt
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusStyles[application.status] ||
                      "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {application.status}
                  </span>
                </td>

                {/* Location */}
                <td className="px-4 py-3">
                  {job?.location ?? "Unknown"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {applications.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No applications found.
        </div>
      )}
    </div>
  );
};

export default ApplicationTable;