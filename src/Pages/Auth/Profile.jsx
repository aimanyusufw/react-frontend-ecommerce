import React from "react";
import BaseLayouts from "../../Layouts/BaseLayouts";
import { Avatar } from "flowbite-react";
import { FaMapLocation, FaMoneyBill, FaUserGear } from "react-icons/fa6";
import ProfileAccordion from "../../Components/Utils/ProfileAccordion";

const Profile = () => {
  return (
    <BaseLayouts>
      <section className="min-h-screen py-8 md:py-12">
        <div className="container">
          <div className="md:px-4 mb-12 md:mb-16">
            <div className="flex items-center">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                size="lg"
              />
              <div className="ms-4">
                <h1 className="mb-1 font-bold text-xl md:text-2xl">
                  User Name
                </h1>
                <p className="text-xs md:text-sm font-medium text-slate-600">
                  user@email.com
                </p>
              </div>
            </div>
          </div>
          <ProfileAccordion
            name={"Account Information"}
            icon={<FaUserGear className="w-6 h-6 text-neutral-700" />}
          >
            <h1>Account Information</h1>
          </ProfileAccordion>
          <ProfileAccordion
            name={"Shipping Address"}
            icon={<FaMapLocation className="w-6 h-6 text-neutral-700" />}
          >
            <h1>Shipping Address</h1>
          </ProfileAccordion>
          <ProfileAccordion
            name={"Billing Information"}
            icon={<FaMoneyBill className="w-6 h-6 text-neutral-700" />}
          >
            <h1>Billing Information</h1>
          </ProfileAccordion>
        </div>
      </section>
    </BaseLayouts>
  );
};

export default Profile;
