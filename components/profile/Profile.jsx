import Image from "next/image";
import avatar from "./avatar.png";
import clsx from "clsx";
function Profile({ className }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center text-start  gap-2 text-teal-600",
      )}
    >
      <Image src={avatar} alt="avatar" unoptimized width={48} height={48} />
      <div>
        <div className="text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}

export default Profile;
