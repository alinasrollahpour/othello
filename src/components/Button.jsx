let styles = {
  fontSize: '30px',
  border: 'none',
  borderRadius: '100px',
  backgroundColor: 'green',
  color: 'white',
  padding: '5px 20px',
  margin: '10px'
}
export default ({children}) => <>
  <button style={styles} className='tiny-button'>{children}</button>
</>