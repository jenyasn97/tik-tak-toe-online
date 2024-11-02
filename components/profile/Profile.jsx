import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center text-start  gap-2 text-teal-600",
      )}
    >
      <Image src={avatar} alt="avatar" unoptimized width={48} height={48} />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}

export default Profile;
