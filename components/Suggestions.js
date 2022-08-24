import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
export const USERS = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    company: faker.company.companyName(),
  };
}
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    //  console.log(Suggestions);

    Array.from({ length: 10 }).forEach(() => {
      USERS.push(createRandomUser());
    });
    setSuggestions(USERS);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for You</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="rounded-full h-10 w-10 border p-[2px]"
            src={profile.avatar}
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>
          <button className="flex text-blue-400 font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
