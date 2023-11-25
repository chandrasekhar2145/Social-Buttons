const Button = props => {
  //  Write your code here.
  const {className, buttonTxt} = props
  return <button className={`button ${className}`}>{buttonTxt}</button>
}

const element = (
  //  Write your code here.
  <>
    <div className='container'>
      <h1>Social Buttons</h1>

      <div className='container-2'>
        <Button buttonTxt='Like' className='like' />
        <Button buttonTxt='Comment' className='comment' />
        <Button buttonTxt='Share' className='share' />
      </div>
    </div>
  </>
)

ReactDOM.render(element, document.getElementById('root'))
