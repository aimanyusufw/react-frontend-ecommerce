import React from "react";
import BaseLayouts from "../../Layouts/BaseLayouts";
import { Avatar } from "flowbite-react";
import {
  FaArrowRight,
  FaCartShopping,
  FaMapLocation,
  FaMoneyBill,
  FaUserGear,
} from "react-icons/fa6";
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
            name={"Order"}
            icon={<FaCartShopping className="w-6 h-6 text-neutral-700" />}
            defaultOpen={true}
          >
            <div className="w-full">
              <div className="p-5 border rounded-md">
                <div className="flex gap-4 mb-6">
                  <h1>23 Februari 2025 </h1>
                  <span className="rounded-full font-medium text-xs px-3 py-1 bg-yellow-300 text-yellow-700">
                    Shipped
                  </span>
                  <h1>INV/2123123/123123</h1>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <img
                        src="https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800"
                        alt=""
                        className="w-32 bg-slate-200 rounded-sm"
                      />
                      <div className="ms-4 space-y-3">
                        <h1 className="font-medium text-sm md:text-lg ">
                          ASUS TUF GAMING A16
                        </h1>
                        <p className="font-medium text-xs md:text-sm">
                          Quantitiy : 1
                        </p>
                        <h2 className="font-medium text-xs md:text-sm">
                          Rp. 16.000.000,00
                        </h2>
                      </div>
                    </div>
                    <h2 className="font-semibold text-base md:text-lg">
                      Rp. 16.000.000,00
                    </h2>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <img
                        src="https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800"
                        alt=""
                        className="w-32 bg-slate-200 rounded-sm"
                      />
                      <div className="ms-4 space-y-3">
                        <h1 className="font-medium text-sm md:text-lg ">
                          ASUS TUF GAMING A16
                        </h1>
                        <p className="font-medium text-xs md:text-sm">
                          Quantitiy : 1
                        </p>
                        <h2 className="font-medium text-xs md:text-sm">
                          Rp. 16.000.000,00
                        </h2>
                      </div>
                    </div>
                    <h2 className="font-semibold text-base md:text-lg">
                      Rp. 16.000.000,00
                    </h2>
                  </div>
                  <button
                    href="/"
                    className="py-3 px-6 border-2 font-medium border-black rounded-lg"
                  >
                    Transaction Detail
                    <FaArrowRight className="inline ms-4" />
                  </button>
                </div>
              </div>
            </div>
          </ProfileAccordion>
          <ProfileAccordion
            name={"Billing Information"}
            icon={<FaMoneyBill className="w-6 h-6 text-neutral-700" />}
          >
            <h1>Billing Information</h1>
          </ProfileAccordion>
          <ProfileAccordion
            name={"Shipping Address"}
            icon={<FaMapLocation className="w-6 h-6 text-neutral-700" />}
          >
            <h1>Shipping Address</h1>
          </ProfileAccordion>
          <ProfileAccordion
            name={"Account Information"}
            icon={<FaUserGear className="w-6 h-6 text-neutral-700" />}
          >
            <h1>Account Information</h1>
          </ProfileAccordion>
        </div>
      </section>
    </BaseLayouts>
  );
};

export default Profile;
