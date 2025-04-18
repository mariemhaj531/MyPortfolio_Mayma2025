import React from 'react'

const Contact = () => {
  return (
<div className="p-6">
  <h2 className="text-center">Contact Us</h2>
  <form className="flex flex-col gap-4 max-w-md text-center">
    <input type="text" placeholder="Name" className="border p-2" />
    <input type="email" placeholder="Email" className="border p-2" />
    <textarea placeholder="Message" className="border p-2" rows="5"></textarea>
    <button className="bg-blue-500 text-black p-2">Send</button>
  </form>
</div>  )
}

export default Contact