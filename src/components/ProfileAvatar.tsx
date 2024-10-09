import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ProfileAvatar() {
  return (
    <Avatar className="w-80 h-80 border-4 border-white">
      <AvatarImage
        src="/images/TriGuitarHeadshot.jpg"
        alt="Tri's profile picture"
        className="object-cover"
      />
      <AvatarFallback>TP</AvatarFallback>
    </Avatar>
  );
}
