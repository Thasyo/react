
const Container = ({children, MyValue}) => {
  return (
    <div>
        <h2>Este é  título do Container</h2>
        {children}
        <p>O valor é: {MyValue}</p>
    </div>
  )
}

export default Container