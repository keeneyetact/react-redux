import {  useParams } from "react-router-dom";
import LearningPortal from "../../../assets/image/learningportal.svg";
import AssignmentForm from "../../../components/admin/assignment/AssignmentForm";
import {
  useGetAssignmentQuery,
} from "../../../features/assignments/assignmentsApi";
import Loading from "../../../components/common/Loading";
import Error from "../../../components/common/Error";
import NoContent from "../../../components/common/NoContent";

const EditAssignment = () => {
  const { id } = useParams();
  const { data: currentAssignment, isLoading, isError } = useGetAssignmentQuery(id);
  
  // decide what to render
  let content;

  if(isLoading) {
      content = <Loading />;
  }
  
  if(!isLoading && isError) {
      content = <Error message={'Something went wrong. Please, give a refresh and try again!!!'} />;
  }

  if(!isLoading && isError && !currentAssignment?.id ) {
      content = <NoContent message={'The Assignment your trying to edit is not currently available...!'} />
  }

  if(!isLoading && !isError && currentAssignment?.id ) {
      content = <AssignmentForm id={id} currentAssignment={currentAssignment} />
  }

  return (
    <div className="mt-8 py-4 bg-primary h-screen place-items-center">
      <div className="mx-auto max-w-md md:max-w-lg px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={LearningPortal} alt="" />
          <h1 className="mt-6 mb-6 text-center text-3xl font-extrabold text-slate-100">
            Edit Assignment
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default EditAssignment;
