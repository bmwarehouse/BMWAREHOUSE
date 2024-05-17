'use client';

import { useEffect } from 'react';

import RowUser from '@/components/parts/RowUser';
import useUsersStore from '@/store/userStore';

function TableUsersManagement() {
  const { usersData, asyncGetAll } = useUsersStore((state) => ({
    usersData: state.usersData,
    asyncGetAll: state.asyncGetAll
  }));

  useEffect(() => {
    asyncGetAll();
  }, [asyncGetAll]);

  if (!usersData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-products mt-4  p-4 md:ml-20 ">
      <div className="overflow-x-auto rounded-xl border border-secondary px-7 py-5 ">
        <table className="table table-zebra ">
          <thead className="text-tertiary ">
            <tr className="overflow-hidden text-center text-base">
              <th>No</th>
              <th>Email</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>role</th>
              <th className="col-span-2 ">Actions</th>
            </tr>
          </thead>
          <tbody className=" text-tertiary ">
            {usersData.map((user, index) => (
              <RowUser key={user.id} user={user} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableUsersManagement;
