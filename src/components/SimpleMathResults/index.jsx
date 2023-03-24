import { useSelector } from "react-redux";



const SimpleMathResults = () => {

  const upsPilotsData = useSelector((state) => state.math);
  
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center mt-10">UPS - Piots</h1>
      <ul className="p-6">
        {upsPilotsData.map( (item, index) => 
          <li key={index} className=" px-4 py-2 first:pt-0 last:pb-0 border">
            {`The answer to ${item.numberOne} ${item.operator} ${item.numberTwo} is ${item.answer}. `}
          </li>
        )}
      </ul>

    </div>
  )
}

export default SimpleMathResults;