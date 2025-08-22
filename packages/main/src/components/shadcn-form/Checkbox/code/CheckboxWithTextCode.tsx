import { Checkbox } from 'src/components/shadcn-ui/Default-Ui/checkbox';

const CheckboxWithTextCode = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="items-top flex space-x-2">
          <Checkbox id="term" />
          <div>
            <label htmlFor="term" className="text-ld">
              Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        <div className="items-top flex space-x-2">
          <Checkbox id="privacy2" />
          <div>
            <label htmlFor="privacy2" className="text-ld">
              Accept privacy policy
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox id="continue3" />
          <div>
            <label htmlFor="continue3" className="text-ld">
              Continue to process?
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox id="act3" />
          <div>
            <label htmlFor="act3" className="text-ld">
              Accept terms
            </label>
            <p className="text-sm text-muted-foreground">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckboxWithTextCode;
