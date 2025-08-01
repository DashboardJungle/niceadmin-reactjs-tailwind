import { Label, TextInput, Button, HelperText } from "flowbite-react";

import TitleCard from "../../shared/TitleBorderCard";
import { Link } from "react-router";


const ReadOnlyForm = () => {
  return (
    <div>
      <TitleCard title="Readonly Form">
        <div className="grid grid-cols-4 gap-30">
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="name">Name</Label>
            </div>
            <TextInput
              id="name"
              type="text"
              defaultValue={"Wrappixel"}
              sizing="md"
              className="!form-control"
              readOnly
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="emailid">Email</Label>
            </div>
            <TextInput
              id="emailid"
              type="email"
              defaultValue={"info@wrappixel.com"}
              required
              className="!form-control"
              readOnly
            />
            <HelperText>
              <span>We’ll never share your details. Read our</span>
              <Link to={'#'} className="ml-1 font-medium text-primary hover:underline dark:text-primary">Privacy Policy</Link>
            </HelperText>
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="password1">Password</Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              defaultValue={"info@wrappixel.com"}
              className="!form-control"
              required
              readOnly
            />
          </div>
          <div className="col-span-12">
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default ReadOnlyForm;
