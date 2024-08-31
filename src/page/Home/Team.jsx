import React from "react";
import TeamMember from "./TeamMember";
import UserImage from "../assests/images/user.avif"
export default function Team() {
  let teamMember = [
    {
      id: 1,
      firstName: "John",
      lastName: "Deo",
      image: UserImage,
      position: "CEO",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis excepturi error aliquid voluptate id blanditiis cumque expedita, natus nihil.",
      facebook: "acbh",
      twitter: "acbh",
      github: "acbh",
      linkedIn: "acbh",
    },
  ];
  return (
    <section className="bg-white mb-4 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"></p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <TeamMember props={teamMember} />
          <TeamMember props={teamMember} />
          <TeamMember props={teamMember} />
          <TeamMember props={teamMember} />
        </div>
      </div>
    </section>
  );
}
