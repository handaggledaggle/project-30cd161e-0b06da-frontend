"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

export function ArtistProfileClient() {
  const [subscribed, setSubscribed] = useState(false);
  const [follow, setFollow] = useState(false);

  const stats = useMemo(
    () => ({ followers: "12.3k", works: 48, subscribers: "1.1k" }),
    []
  );

  return (
    <div className="flex flex-row items-center gap-[12px]">
      <div className="flex flex-col items-end">
        <div className="flex flex-row gap-[12px]">
          <Button
            onClick={() => setSubscribed((v) => !v)}
            className="h-[44px] rounded-none bg-pt-primary px-[20px] text-white shadow-pt-md hover:bg-pt-primary/90"
          >
            {subscribed ? "구독중" : "구독하기"}
          </Button>
          <Button
            variant="outline"
            onClick={() => setFollow((v) => !v)}
            className="h-[44px] rounded-none border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm"
          >
            {follow ? "팔로우중" : "팔로우"}
          </Button>
        </div>

        <div className="mt-[12px] flex flex-row gap-[16px] text-[14px] text-pt-text2/90">
          <span>
            팔로워 <span className="text-pt-text">{stats.followers}</span>
          </span>
          <span>
            작품 <span className="text-pt-text">{stats.works}</span>
          </span>
          <span>
            구독자 <span className="text-pt-text">{stats.subscribers}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
