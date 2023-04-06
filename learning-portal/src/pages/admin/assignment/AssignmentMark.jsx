import React from 'react'
import AssignmentList from '../../../components/admin/assignmentMark/AssignmentList'

const AssignmentMark = () => {
  return (
    <div>
        <div className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
            <AssignmentList />
        </div>
    </div>
    </div>
  )
}

export default AssignmentMark