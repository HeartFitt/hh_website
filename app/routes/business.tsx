import { ArrowLeftIcon } from "@phosphor-icons/react";
import type { Route } from "./+types/home";
import React from "react";
import Button from "~/hkit/Button";
import VideoPlayer from "~/components/VideoPlayer";
import HubBenefits from "~/sections/HubBenefits";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HeartHero for Businesses" },
    { name: "Gamified, Heart-Healthy Exercise", content: "Welcome to HeartHero!" },
  ];
}

export default function Business() {
    return (
        <>
            <div className="pt-32 px-4">
                {/* Back Button and Title */}
                <div className="flex flex-col">
                    <div>
                        <Button icon={<ArrowLeftIcon size={24} weight="bold"/>} variant="icon" />   
                    </div>
                    <br/>
                    <h2>Business</h2>
                    <p className="px-1 text-neutral-400">Drive patron engagement and excitement by becoming a <span className="text-neutral-200">HeartHero Hub.</span></p>
                </div>
                {/* Video */}
                {/* Placeholder */}
                <div className="max-w-[50rem]">
                    <VideoPlayer></VideoPlayer>
                </div>
                <HubBenefits></HubBenefits>
            </div>
        </>
    )
}