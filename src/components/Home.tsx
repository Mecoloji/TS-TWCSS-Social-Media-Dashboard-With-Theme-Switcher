import { useState } from "react";

import { followersData, overviewData } from "../data/Data";

import FollowersCard from "../components/FollowersCard";
import OverviewCard from "../components/OverviewCard";

// Define interface for a follower
interface Follower {
  user: string;
  followers: string | number;
  update: string;
  color: "green" | "red";
  IconImageUrl: string;
  IconWidth: number;
  IconHeight: number;
  IconMediaUrl: string;
  MediaWidth: number;
  MediaHeight: number;
  id: number;
  name: string;
}

// Define interface for an overview
interface Overview {
  title: string;
  number: number;
  percent: string;
  color: string;
  MediaIcon: string;
  MediaWidth: number;
  MediaHeight: number;
  ArrowIcon: string;
  ArrowWidth: number;
  ArrowHeight: number;
  id: number;
  name: string;
}

// Define a type for the theme
type Theme = "dark" | "light";

// Define the Home component
const Home: React.FC = () => {
  // State for the theme
  const [Theme, setTheme] = useState<Theme>("dark");

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const mainBgColor =
    Theme === "dark"
      ? "background_box_dark bg-VDBlueBG"
      : "background_box_light bg-WhiteBG";

  const mainTitleTextColor =
    Theme === "dark" ? "text-WhiteTxt" : "text-VDBluePattern";

  const mainFollowerTextColor = Theme === "dark" ? "text-DBlue" : "text-DGBlue";

  const mainHrTagColor =
    Theme === "dark" ? "border-DBlue/50" : "border-DBlue/50";

  const mainDarkModeTextColor =
    Theme === "dark" ? "text-WhiteTxt" : "text-VDBluePattern";

  const mainToggleColor =
    Theme === "light" ? "button_circle_light button_theme_light" : "";

  const mainOverviewTodayTextColor =
    Theme === "dark" ? "text-WhiteTxt" : "text-DGBlue";

  return (
    <>
      <main
        className={`${mainBgColor} background_box relative z-10 min-h-screen transition-colors`}
      >
        <div className="container mx-auto">
          <div className="mx-[2rem] py-10 lg:mx-[4rem] xl:mx-[10rem]">
            <div className="mb-10 md:flex md:items-center md:justify-between">
              <div>
                {/* Title */}
                <h1
                  className={`${mainTitleTextColor} text-2xl font-bold transition-colors lg:text-3xl`}
                >
                  Social Media Dashboard
                </h1>
                {/* Total Followers */}
                <p
                  className={`${mainFollowerTextColor} font-bold transition-colors`}
                >
                  Total Followers: 23,004
                </p>
              </div>
              <hr
                className={`${mainHrTagColor} my-5 lg:hidden transition-colors`}
              />
              <div className="flex justify-between gap-3">
                {/* Dark Mode label */}
                <span
                  className={`${mainDarkModeTextColor} font-bold transition-colors`}
                >
                  Dark Mode
                </span>
                {/* Theme toggle button */}
                <button
                  aria-label="Toggle Theme"
                  onClick={toggleTheme}
                  className={`${mainToggleColor} button_circle relative rounded-xl px-6 py-3 button_theme_dark`}
                ></button>
              </div>
            </div>
            <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid gap-5">
              {/* {followersData.map((follower: Follower, index: number) => (
                <FollowersCard
                  key={index}
                  number={index}
                  Theme={Theme}
                  {...follower}
                />
              ))} */}
              {/* Render FollowersCard components */}
              {followersData.map((follower, index) => {
                const followerData = follower as unknown as Follower;
                return (
                  <FollowersCard
                    key={index}
                    number={index}
                    Theme={Theme}
                    user={followerData.user}
                    followers={followerData.followers}
                    update={followerData.update}
                    color={followerData.color}
                    IconImageUrl={followerData.IconImageUrl}
                    IconWidth={followerData.IconWidth}
                    IconHeight={followerData.IconHeight}
                    IconMediaUrl={followerData.IconMediaUrl}
                    MediaWidth={followerData.MediaWidth}
                    MediaHeight={followerData.MediaHeight}
                  />
                );
              })}
            </div>
            <h2
              className={`${mainOverviewTodayTextColor} mb-6 mt-10 text-2xl font-bold transition-colors`}
            >
              Overview - Today
            </h2>
            <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid gap-5">
              {/* {overviewData.map((overview: Overview, index: number) => (
                <OverviewCard
                  key={index}
                  number={index}
                  Theme={Theme}
                  {...overview}
                />
              ))} */}
              {/* Render OverviewCard components */}
              {overviewData.map((overview, index) => {
                const overviewData = overview as unknown as Overview;
                return (
                  <OverviewCard
                    key={index}
                    Theme={Theme}
                    title={overviewData.title}
                    number={overviewData.number}
                    percent={overviewData.percent}
                    color={overviewData.color}
                    MediaIcon={overviewData.MediaIcon}
                    MediaWidth={overviewData.MediaWidth}
                    MediaHeight={overviewData.MediaHeight}
                    ArrowIcon={overviewData.ArrowIcon}
                    ArrowWidth={overviewData.ArrowWidth}
                    ArrowHeight={overviewData.ArrowHeight}
                    index={0}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
