
import { Label, TextInput } from "flowbite-react";
import CardBox from "src/components/shared/CardBox";
import TiptapEdit from "src/views/forms/from-tiptap/TiptapEdit";



const GeneralDetail = () => {


  return (
    <>
      <CardBox>
        <h5 className="card-title mb-4">Blog Details</h5>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="prednm">Blog Title</Label>
            <span className="text-error ms-1">*</span>
          </div>
          <TextInput
            id="prednm"
            type="text"
            sizing="md"
            className="form-control"
            placeholder="Blog Title"
          />
          <small className='text-xs text-black dark:text-darklink'>
            A blog title is required and recommended to be unique.
          </small>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="desc" >Content</Label>
          </div>
          <TiptapEdit />
          <small className="text-xs text-black dark:text-darklink">
            Set a Content to the blog for better visibility.
          </small>
        </div>
      </CardBox>
    </>
  );
};

export default GeneralDetail;
