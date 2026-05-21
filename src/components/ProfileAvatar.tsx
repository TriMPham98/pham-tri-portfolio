import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-4 border-white w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72",
        className
      )}>
      <Image
        src="/images/TriGuitarHeadshot.jpg"
        alt="Tri's profile picture"
        fill
        priority
        sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
        className="object-cover"
      />
    </div>
  );
};

export default ProfileAvatar;
