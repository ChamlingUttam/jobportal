import { useEffect } from "react";
import { getMyApplication } from "../../features/application/jobApplicationSlice";
import type { Application } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

type ApplicationSummaryCardsProps = {
  applications: Application[];
};

const ApplicationSummaryCards = ({
  applications,
}: ApplicationSummaryCardsProps) => {
  const total = applications.length;

  const pending = applications.filter(
    (application) => application.status === "Pending"
  ).length;

  const shortlisted = applications.filter(
    (application) => application.status === "Shortlisted"
  ).length;

  const rejected = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-blue-600 text-white p-4 rounded-lg min-h-32 flex flex-col justify-between">
        <p className="text-sm">Total Applications</p>
        <p className="text-3xl font-bold">{total}</p>
      </div>

      <div className="bg-yellow-600 text-white p-4 rounded-lg min-h-32 flex flex-col justify-between">
        <p className="text-sm">Pending</p>
        <p className="text-3xl font-bold">{pending}</p>
      </div>

      <div className="bg-green-600 text-white p-4 rounded-lg min-h-32 flex flex-col justify-between">
        <p className="text-sm">Shortlisted</p>
        <p className="text-3xl font-bold">{shortlisted}</p>
      </div>

      <div className="bg-red-600 text-white p-4 rounded-lg min-h-32 flex flex-col justify-between">
        <p className="text-sm">Rejected</p>
        <p className="text-3xl font-bold">{rejected}</p>
      </div>
    </div>
  );
};

export default ApplicationSummaryCards;