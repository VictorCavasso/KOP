import React from 'react'
import { GoStar } from 'react-icons/go'

const Repo = ({ repo }) => {

  let stars = [];
  for (var i = 0; i < repo.stars; i++) {
    stars.push(<GoStar className='inline-block' key={i} />);
  }

  return (
    <div className='my-3 md:my-0 rounded bg-white p-4 hover:shadow-md'>
      <div>

        <h3 className='font-bold'>
          {repo.skill_name} {stars}
        </h3>

      </div>
      <p>{repo.skill_desc}</p>
    </div>
  )
}
export default Repo
