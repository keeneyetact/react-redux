import React from 'react'
import SingleAssignment from './SingleAssignment'
import Error from '../../../components/common/Error'
import Loading from '../../../components/common/Loading'
import NoContent from '../../../components/common/NoContent'

import { useGetAssignmentsQuery } from '../../../features/assignments/assignmentsApi'

const AssignmentList = () => {
    const { data, isLoading, isError } = useGetAssignmentsQuery()

    // decide what to render
    let content = null;

    if(isLoading) {
      content= <Loading />
    }

    if(!isLoading && !isError) {
      content = <Error message={"Something Went Wrong... Please, Refresh The Page!!!"} />
    }

    if(!isLoading && !isError && data?.length === 0) {
      content = <NoContent message={"No Assignment Found... To Add Assignment Click Add Assignment Button...!!!"} />
    }

    if(!isLoading && !isError && data?.length > 0) {
      content = (
        <table className="divide-y-1 text-base divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="table-th">Title</th>
                            <th className="table-th">Video Title</th>
                            <th className="table-th">Mark</th>
                            <th className="table-th">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-600/50">
                        
                       {data && data.map(d =>  <SingleAssignment key={d.id} assignment={d} />)}

                    </tbody>
                </table>
      )
    }

  return (
    <div className="overflow-x-auto mt-4">
        {content}            
    </div>
  )
}

export default AssignmentList