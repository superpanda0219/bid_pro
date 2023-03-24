import SimpleMathResults from "../../../components/SimpleMathResults";

const upsPilotsData = [
  {
    numberOne: 2,
    operator: "+",
    numberTwo: 2,
    answer: 4
  },
  {
    numberOne: 2,
    operator: "-",
    numberTwo: 2,
    answer: 0
  },
  {
    numberOne: 2,
    operator: "*",
    numberTwo: 2,
    answer: 4
  },
  {
    numberOne: 2,
    operator: "/",
    numberTwo: 2,
    answer: 1
  },
  {
    numberOne: 2,
    operator: "%",
    numberTwo: 2,
    answer: 0
  },
]

const UpsPilots = () => {

  return (
    <div>
      <SimpleMathResults 
        upsPilotsData={upsPilotsData}
      />
    </div>
  )
}
export default UpsPilots;