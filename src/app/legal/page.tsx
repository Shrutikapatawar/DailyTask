"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Legal() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/legal/privacy");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f8faf4] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#41642f] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
