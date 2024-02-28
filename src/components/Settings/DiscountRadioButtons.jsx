
const DiscountRadioButtons = () => {
  return (
    <div className='w-full py-4'>
              <form className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                      <input id="after" type='radio' name="tax" value="after" defaultChecked/>
                      <label htmlFor='after'>After Discount</label>
                  </div>
                   <div className='flex gap-2'>
                       <input id="before" type='radio' name="tax" value="before"/>
                       <label htmlFor='before'>Before Discount</label>
                   </div>

                   <button className='btn-primary p-4 mt-4 md:mt-8'>Update</button>
              </form>
                  
    </div>
  )
}

export default DiscountRadioButtons