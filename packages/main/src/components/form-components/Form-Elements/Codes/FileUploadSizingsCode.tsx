import { Label, FileInput } from 'flowbite-react';

const FileUploadSizingsCode = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <div className="pb-2">
            <Label htmlFor="small-file-upload">Small file input</Label>
          </div>
          <FileInput id="small-file-upload" sizing="sm" />
        </div>
        <div>
          <div className="pb-2">
            <Label htmlFor="default-file-upload">Default size file input</Label>
          </div>
          <FileInput id="default-file-upload" />
        </div>
        <div>
          <div className="pb-2">
            <Label htmlFor="large-file-upload">Large file input</Label>
          </div>
          <FileInput id="large-file-upload" sizing="lg" />
        </div>
      </div>
    </>
  );
};

export default FileUploadSizingsCode;
