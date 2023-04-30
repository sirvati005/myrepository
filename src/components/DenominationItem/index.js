// Write your code here

const DenominationItem = ({denomination, onClick}) => {
  const {id, value} = denomination
  return (
    <li key={id}>
      <button
        onClick={() => onClick(denomination.value)}
        type="button"
        className="denomination-button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
