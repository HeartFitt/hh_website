import { ArrowLeftIcon } from "@phosphor-icons/react";
import type { Route } from "./+types/home";
import React from "react";
import Button from "~/hkit/Button";
import VideoPlayer from "~/components/VideoPlayer";
import HubBenefits from "~/sections/HubBenefits";
import DecisionToInstall from "~/sections/DecisionToInstall";
import ContactForm from "~/sections/BusinessForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HeartHero for Businesses" },
    { name: "Gamified, Heart-Healthy Exercise", content: "Welcome to HeartHero!" },
  ];
}

export default function Business() {
    return (
        <>
            <div className="flex flex-col pt-32 px-4 gap-10">
                {/* Back Button and Title */}
                <div className="flex flex-col gap-4">
                    <div>
                        <Button icon={<ArrowLeftIcon size={24} weight="bold"/>} variant="icon" />   
                    </div>
                    <br/>
                    <h1>Business</h1>
                    <h6 className="px-1 text-neutral-400">Drive patron engagement and excitement by becoming a <span className="text-neutral-200">HeartHero Hub.</span></h6>
                <VideoPlayer></VideoPlayer>
                </div>
                {/* Video */}
                {/* Placeholder */}
                <HubBenefits></HubBenefits>
                <DecisionToInstall/>
                <div className="">
                    <ContactForm />
                </div>
                <br className="py-[20rem]"></br>
            </div>
        </>
    )
}