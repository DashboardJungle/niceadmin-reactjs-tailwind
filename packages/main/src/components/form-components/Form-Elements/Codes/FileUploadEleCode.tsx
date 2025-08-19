import { Label, FileInput, HelperText } from 'flowbite-react';

const FileUploadEleCode = () => {
  return (
    <>
      <div id="fileUpload">
        <div className="mb-2 block">
          <Label htmlFor="file">Upload file</Label>
        </div>
        <FileInput id="file" />
        <HelperText>
          A profile picture is useful to confirm your are logged into your account
        </HelperText>
      </div>
    </>
  );
};

export default FileUploadEleCode;
