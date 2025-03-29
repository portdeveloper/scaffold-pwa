"use client";

import SendNotification from "./SendNotification";
import type { NextPage } from "next";
import { BellAlertIcon, BoltIcon, CubeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { InstallPWA } from "~~/components/InstallPWA";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <div className="flex items-center gap-4">
        <div className="text-primary">{icon}</div>
        <h2 className="card-title">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  </div>
);

const ProjectLink = ({ href, title }: { href: string; title: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
    {title}
  </a>
);

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-full max-w-4xl">
        <h1 className="text-center space-y-4 mb-8">
          <span className="block text-4xl font-bold">Scaffold-ETH 2 + Serwist</span>
          <span className="block text-2xl mt-2">Supercharge Your Web3 Development</span>
          <InstallPWA />
        </h1>

        <div className="flex flex-col items-center gap-4 mb-8">
          <SendNotification />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <FeatureCard
            icon={<BoltIcon className="h-8 w-8" />}
            title="Quick Start"
            description="Get your Web3 project up and running in minutes with our pre-configured setup."
          />
          <FeatureCard
            icon={<CubeIcon className="h-8 w-8" />}
            title="Smart Contracts"
            description="Easily deploy and interact with Solidity smart contracts."
          />
          <FeatureCard
            icon={<GlobeAltIcon className="h-8 w-8" />}
            title="PWA Support"
            description={
              <>
                Built-in Progressive Web App capabilities for offline access and improved performance with{" "}
                <a href="https://serwist.pages.dev/" target="_blank" rel="noopener noreferrer" className="underline">
                  Serwist
                </a>
                .
              </>
            }
          />
          <FeatureCard
            icon={<BellAlertIcon className="h-8 w-8" />}
            title="Web Push Notifications"
            description="Engage users with push notifications, even when the app is closed."
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 bg-base-100 rounded-lg p-4">
          <span className="text-lg font-semibold">Learn more:</span>
          <ProjectLink href="https://serwist.pages.dev/" title="Serwist" />
          <ProjectLink href="https://scaffoldeth.io" title="Scaffold-ETH 2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
