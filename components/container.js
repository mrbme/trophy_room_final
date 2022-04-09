const Container = ({ children, classList }) => {
  const classes = classList === undefined ? '' : classList
  return (
    <div className={`max-w-7xl mx-auto px-5 ${classes}`}>
      {children}
    </div>
  )
}

export default Container
