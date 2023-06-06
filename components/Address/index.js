
export const Address = ({dataCity}) => {
  return (
    <>
      <select name='city'>
        <option value=''>select your city</option>
        {dataCity?.map((city)=>(
          <option key={city.id} value={city.id}>{city.address}</option>
        ))}
      </select>
    </>
  )
}
