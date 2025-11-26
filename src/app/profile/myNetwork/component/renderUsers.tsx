import UserImageComponent from "../../features/components/userImgComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FollowBtn } from "./followButton";

export function RenderUsers() {
  const { allUsers, usersSearch, notFoundSearch } = useSelector(
    (state: RootState) => state.app
  );

  if (notFoundSearch)
    return <h1 className="text-center mt-8">User not found</h1>;
  return (
    <section className=" mt-4 flex flex-wrap gap-2 w-[68vw] mx-auto mb-4">
      {(usersSearch.length > 0 ? usersSearch : allUsers).map((user) => {
        const { id, name, bio, email, image, is_following } = user;
        return (
          <div
            key={id}
            className="w-[250px] h-[250px] bg-[#fff] flex flex-col justify-between p-4  border-1 border-gray-200 rounded-md"
          >
            <div className="">
              <UserImageComponent
                image={image}
                name={name}
                email={email}
                style="w-[80px] h-[80px]"
              />
              <h1 className="mt-4 text-[#393838] font-semibold">
                {name ? name : email}
              </h1>
              <p className="text-gray-500">{bio}</p>
            </div>
            <FollowBtn id={id} isfollowing={is_following} />
          </div>
        );
      })}
    </section>
  );
}
