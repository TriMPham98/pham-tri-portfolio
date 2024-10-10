import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProfileAvatarProps {
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className }) => {
  return (
    <Avatar
      className={`w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 border-4 border-white ${
        className || ""
      }`}>
      <AvatarImage
        src="/images/TriGuitarHeadshot.jpg"
        alt="Tri's profile picture"
        className="object-cover"
      />
      <AvatarFallback>TP</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
