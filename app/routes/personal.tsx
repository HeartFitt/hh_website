import React from "react";
import Button from "~/hkit/Button";
import VideoPlayer from "~/components/VideoPlayer";
import HubBenefits from "~/sections/HubBenefits";
import DecisionToInstall from "~/sections/DecisionToInstall";
import ContactForm from "~/sections/PersonalForm";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import AppStoreAnnouncement from "~/sections/AppStoreAnnouncement";

export default function Personal() {
    return (
        <>
            <div className="flex flex-col pt-32 px-4 gap-10">
                {/* Back Button and Title */}
                <div className="flex flex-col gap-4">
                    <div>
                        <Button icon={<ArrowLeftIcon size={24} weight="bold"/>} variant="icon" />   
                    </div>
                    <br/>
                    <h1>Personal</h1>
                    <h6 className="px-1 text-neutral-400">Train your body to burn fat as fuel. Take part in hearth-healthy exercise that is optimized for fat burn, instead of unhelpful intensity.</h6>
                <VideoPlayer></VideoPlayer>
                </div>
                <div>
                    <ContactForm />
                </div>
                <AppStoreAnnouncement/>
                <br className="py-[20rem]"></br>
            </div>
        </>
    )
}