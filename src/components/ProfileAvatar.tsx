import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ProfileAvatar() {
  return (
    <Avatar className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-white">
      <AvatarImage
        src="/images/TriGuitarHeadshot.jpg"
        alt="Tri's profile picture"
        className="object-cover"
      />
      <AvatarFallback>TP</AvatarFallback>
    </Avatar>
  );
}
