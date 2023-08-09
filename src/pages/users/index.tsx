import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/userRedux'

function User() {
  const dispatch = useDispatch<any>()
  const users = useSelector((state: any) => state?.user?.data)
  const loading = useSelector((state: any) => state?.user?.loading)
  const [pageNo, setPageNo] = useState(1)
  const [pageLimit, setPageLimit] = useState(10)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = {
      page_no: pageNo,
      page_limit: pageLimit,
      search: search
    }
    dispatch(fetchUsers(params))
  }, [dispatch])

  return (
    <div className='prl-6'>
      <h1>User List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul role='list' className='divide-y divide-gray-100'>
          {users.map((user: any) => (
            <li key={user.id} className='flex justify-between gap-x-6 py-5'>
              <div className='flex gap-x-4'>
                {user?.image_url ? (
                  <img className='h-12 w-12 flex-none rounded-full bg-gray-50' src={user.image_url} alt='' />
                ) : (
                  ''
                )}
                <div className='min-w-0 flex-auto'>
                  <p className='text-sm font-semibold leading-6 text-gray-900'>
                    {user.full_name} <span>({user.email})</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default User
