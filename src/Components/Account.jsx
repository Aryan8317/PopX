import React, { useEffect, useState } from 'react';

const Account = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProfileData(parsed);
      } catch (e) {
        console.error("Failed to parse profile data from localStorage", e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-start p-4 bg-white">
      <div className="w-[375px] h-[712px] bg-white border border-gray-300 flex flex-col">
        <div className="px-4 py-3">
          <h2 className="text-[18px] font-normal text-[#1D2226]">Account Settings</h2>
        </div>

        <div className="bg-[#F7F8F9] flex-1 px-4 py-5 relative">
          <div className="flex items-start gap-4 relative">
            {/* This is the profile image  */}
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[15px] font-medium text-[#1D2226] capitalize">{profileData.fullName || "No Name Provided"}</h3>
              <p className="text-[14px] text-[#1D2226]">{profileData.email || "No Email Provided"}</p>
            </div>
          </div>

          <p className="mt-4 text-[14px] text-[#1D2226] font-normal leading-snug capitalize">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat
          </p>
          <div className="mt-6 border-t-2 border-dashed border-[#d8dde2]" />
        
          <div className="mt-110 border-t-2 border-dashed border-[#d8dde2]" />
        
        </div>
      </div>
    </div>
  );
};

export default Account;