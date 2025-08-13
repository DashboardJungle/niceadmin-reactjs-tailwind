
import { Icon } from "@iconify/react";
import { Badge, Button, Dropdown, DropdownItem } from "flowbite-react";
import * as Notification from "./Data";
import SimpleBar from "simplebar-react";
import { Link } from "react-router";


const Notifications = () => {

  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6  rounded-xs"
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="">
            <div className="relative after:absolute after:w-10 after:h-10 after:rounded-full hover:text-primary after:top-1/2 hover:after:bg-lightprimary text-link dark:text-darklink rounded-full flex justify-center after:-translate-y-1/2 items-center cursor-pointer group-hover/menu:after:bg-lightprimary dark:group-hover/menu:after:bg-darkprimary group-hover/menu:text-primary">
              <Icon icon="solar:bell-line-duotone" height={22} width={22} />
            </div>
            <span className="rounded-full absolute end-0 -top-[3px]  text-[10px] h-2 w-2 bg-error flex justify-center items-center"></span>
          </div>
        )}
      >
        <div className="flex items-center px-6 justify-between">
          <h3 className="mb-0 text-lg font-semibold text-ld">Notifications</h3>
          <Badge color={"primary"} className="px-4">5 new</Badge>
        </div>

        <SimpleBar className="max-h-80 mt-3">
          {Notification.Notification.map((links, index) => (
            <DropdownItem
              as={Link}
              to="#"
              className="px-6 py-3 flex justify-between items-center bg-hover group/link w-full"
              key={index}
            >
              <div className="flex items-center w-full">
                <div
                  className={`h-11 w-11 shrink-0 rounded-full flex justify-center items-center ${links.bgcolor} `}
                >
                  <Icon icon={links.icon} height={20} className={links.color} />
                </div>
                <div className="ps-4 flex justify-between w-full">
                  <div className="w-3/4 text-start">
                    <h5 className="mb-1 text-15 font-semibold group-hover/link:text-primary">
                      {links.title}
                    </h5>
                    <div className="text-sm text-bodytext dark:text-lightgray line-clamp-1">
                      {links.subtitle}
                    </div>
                  </div>

                  <div className="text-xs block self-start pt-1.5 dark:text-lightgray">
                    {links.time}
                  </div>
                </div>
              </div>
            </DropdownItem>
          ))}
        </SimpleBar>
        <div className="pt-5 px-6">
          <Button
            color={"primary"}
            className="w-full"
          >
            See All Notifications
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Notifications;
