
import { FileInput, Label } from "flowbite-react";

import { Icon } from "@iconify/react";
import CardBox from "src/components/shared/CardBox";

const Thumbnail = () => {
  return (
    <>
      <CardBox>
        <h5 className="card-title mb-4">Thumbnail</h5>
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex  w-full cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] border-dashed border-primary bg-lightprimary"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <Icon icon="solar:cloud-upload-outline" height={32} className='mb-3 text-primary dark:text-darklink' />
              <p className='mb-2 text-sm text-primary dark:text-darklink'>
                Drop Thumbnail here to upload
              </p>

            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>

        </div>
        <small className='text-xs text-black dark:text-darklink text-center'>
          Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
          files are accepted.
        </small>
      </CardBox>
    </>
  );
};

export default Thumbnail;
