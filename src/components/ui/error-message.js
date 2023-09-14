function ErrorMessage ({ text }) {
  return (
    <div className='px-5 py-3 border border-red-500'>
      <p className='text-2xl text-red-500'>{text}</p>
    </div>
  )
}

export default ErrorMessage
