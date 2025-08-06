

import CardBox from "src/components/shared/CardBox";
import { Datepicker, Label } from "flowbite-react";
import { useState } from "react";

const PostDate = () => {
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

export default PostDate;
