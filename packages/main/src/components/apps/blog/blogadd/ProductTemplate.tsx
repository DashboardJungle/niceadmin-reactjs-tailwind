
// import CardBox from "src/components/shared/CardBox";
// import { Label, Select } from "flowbite-react";



// const Producttemplate = () => {
//   return (
//     <>
//       <CardBox>
//         <h5 className="card-title mb-4">Product Template</h5>
//         <div className="">
//           <div className="mb-2 block">
//             <Label htmlFor="temp">Select a product template</Label>
//             <span className="text-error ms-1">*</span>
//           </div>
//           <Select id="temp" className="select-md" defaultValue={'Default Template'} required>
//             <option>Default Template</option>
//             <option>Fashion</option>
//             <option>Office Stationary</option>
//             <option>Electronics</option>
//           </Select>
//           <small className="text-xs text-dark dark:text-darklink">
//             Assign a template from your current theme to define how a single
//             product is displayed.
//           </small>
//         </div>
//       </CardBox>
//     </>
//   );
// };

// export default Producttemplate;

import CardBox from "src/components/shared/CardBox";
import { Datepicker, Label } from "flowbite-react";
import { useState } from "react";

const Producttemplate = () => {
  // Set today's date as default

  const [publishDate, setPublishDate] = useState<Date>(new Date());

  return (
    <CardBox>
      <h5 className="card-title mb-4">Publish Date</h5>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="publishDate">Select publish date</Label>
          <span className="text-error ms-1">*</span>
        </div>


        <Datepicker
          id="publishDate"
          className='!form-control'
          value={publishDate}
          onChange={(date: Date | null) => {
            if (date) setPublishDate(date);
          }}
          placeholder='publish Date'
        />



        <small className="text-xs text-dark dark:text-darklink">
          Choose the date when this blog post should be published.
        </small>
      </div>
    </CardBox>
  );
};

export default Producttemplate;
