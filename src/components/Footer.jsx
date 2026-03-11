import React from 'react'

function Footer() {
  return (
    <div className='text-gray-300'>
      <div className='mt-10 flex gap-2 text-xl'>
        <p>Questions? Call </p> 
        <p className='underline'>000-800-919-1743</p>
      </div>
      <div className="lg:flex justify-between mt-10">
        <div className="w-[200px] list-none underline ">
          <li className='mt-2'>FAQ</li>
          <li className='mt-2'>Help </li>
          <li className='mt-2'>Account Centre</li>
          <li className='mt-2'>Media Centre</li>
        </div>
        <div className="w-[200px] list-none underline">
          <li className='mt-2'>Investor Relations</li>
          <li className='mt-2'>Legal Notice</li>
          <li className='mt-2'>Speed Test</li>
          <li className='mt-2'>Jobs</li>
        </div>
        <div className="w-[200px] list-none underline">
          <li className='mt-2'>Privacy</li>
          <li className='mt-2'>Cookies Preferences</li>
          <li className='mt-2'>Ways to Watch</li>
          <li className='mt-2'>Only on Netflix</li>
        </div>
        <div className="w-[200px] list-none underline">
          <li className='mt-2'>Corporate Information</li>
          <li className='mt-2'>Terms of Use</li>
          <li className='mt-2'>Contact Us</li>
        </div>
      </div>
       <div className='mt-10'>
        <select className="text-white border border-gray-500 py-1 px-2 pr-15 my-5 rounded" name="" id="">
            <option className="text-black" value="English">English</option>
            <option className="text-black" value="Arabic">Arabic</option>
        </select>
      </div>
      <div className='mt-1'>Netflix India</div>
      <div className='mt-5 lg:flex gap-2 text-[14px]'>
        <div>This page is protected by Google reCAPTCHA to ensure you're not a bot.</div>
        <div className='text-blue-400 underline cursor-pointer'> Learn more.</div>
      </div>
    </div>
  )
}

export default Footer
