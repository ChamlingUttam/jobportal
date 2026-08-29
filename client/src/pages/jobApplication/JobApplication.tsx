// // import React from 'react'
// // import App from '../../App'
// import ApplicationTable from '../../components/application/AplicationTable'
// import ApplicationSummaryCards from '../../components/application/ApplicationSummaryCards'

// const JobApplication = () => {
//   return (
//     <div className='bg'>
//       {/* welcome to job application */}
//       <ApplicationSummaryCards />
//       <ApplicationTable  applications={application} />
//     </div>
//   )
// }

// export default JobApplication





import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getMyApplication } from "../../features/application/jobApplicationSlice";
import ApplicationSummaryCards from "../../components/application/ApplicationSummaryCards";
import ApplicationTable from "../../components/application/ApplicationTable";
// import ApplicationSummaryCards from "../../components/applications/ApplicationSummaryCards";
// import ApplicationTable from "../../components/applications/ApplicationTable";

const ApplicationsPage = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const { application, loading, error } = useAppSelector(
    (state) => state.applications
  );

  useEffect(() => {
    if (user) {
      dispatch(
        getMyApplication({
          userId: user.id,
        })
      );
    }
  }, [dispatch, user]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        My Applications
      </h1>

      <ApplicationSummaryCards applications={application} />

      {loading && <p>Loading applications...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <ApplicationTable
          applications={application}
        />
      )}
    </div>
  );
};

export default ApplicationsPage;