"use client";
import { userType } from "@/types/userType";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState<userType[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`);
        const userData = await res.json();
        console.log("userData", userData.users);
        setData(userData.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  console.log("data : ", data);

  return (
    <section>
      {data.map((user) => (
        <Link href="/" className="group relative block bg-black" key={user.id}>
          <Image
            width={400}
            height={200}
            alt={user.firstName + user.lastName}
            src={
              user.image ||
              "https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg"
            }
            unoptimized
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              {user.role}
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              {user.firstName + user.lastName + user.maidenName}
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">{user.userAgent}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
