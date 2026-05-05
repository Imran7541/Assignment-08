"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div>
      <Card className="max-w-4xl mx-auto flex flex-col items-center border mt-5">
        <Avatar size="sm h-50 w-50">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(2)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold text-green-500">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
