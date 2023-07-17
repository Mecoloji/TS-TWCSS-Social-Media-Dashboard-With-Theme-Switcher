// type Theme = "dark" | "light"; // Define a type "Theme" with two possible values: "dark" or "light"

// interface FollowersCardProps {
//   user: string;
//   followers: number | string;
//   update: string;
//   color: "green" | "red";
//   IconImageUrl: string;
//   IconWidth: number;
//   IconHeight: number;
//   IconMediaUrl: string;
//   MediaWidth: number;
//   MediaHeight: number;
//   number: number;
//   Theme: Theme;
// }

// // Function to get the information about the icon for the given number
// const getIconInfo = (number: number) => {
//   // If the number is 0, return the information for the Facebook icon
//   if (number === 0) {
//     return {
//       alt: "Facebook Icon",
//       line: "facebook_line",
//     };
//   } // If the number is 1, return the information for the Twitter icon
//   else if (number === 1) {
//     return {
//       alt: "Twitter Icon",
//       line: "twitter_line",
//     };
//   } // If the number 2, return the information for the Instagram icon
//   else if (number === 2) {
//     return {
//       alt: "Instagram Icon",
//       line: "instagram_line",
//     };
//   } // Otherwise, return the information for the Youtube icon
//   else {
//     return {
//       alt: "Youtube Icon",
//       line: "youtube_line",
//     };
//   }
// };

// // Define the FollowerCard component
// const FollowersCard: React.FC<FollowersCardProps> = ({
//   user,
//   followers,
//   update,
//   color,
//   IconImageUrl,
//   IconWidth,
//   IconHeight,
//   IconMediaUrl,
//   MediaWidth,
//   MediaHeight,
//   number,
//   Theme,
// }) => {
//   // Get the alt texr and CSS class for the icon based on the number prop
//   const { alt, line } = getIconInfo(number);

//   return (
//     <button
//       // Set the background color of the card
//       className={`relative rounded ${
//         Theme === "dark"
//           ? "bg-DDBlue hover:bg-DBlue/25"
//           : "bg-LGBlue hover:bg-DGBlue/25"
//       } p-3 text-center transition-colors ${line} overflow-hidden`}
//     >
//       {/* Render the icon and the user's name */}
//       <div className="flex items-center justify-center gap-2 pb-3 pt-4">
//         <img
//           src={IconMediaUrl}
//           alt={alt}
//           width={MediaWidth}
//           height={MediaHeight}
//         />
//         <h2
//           className={`text-xs font-bold ${
//             Theme === "dark" ? "text-DBlue" : "text-DDBlue"
//           } transition-colors`}
//         >
//           {user}
//         </h2>
//       </div>
//       {/* Render the number of followers */}
//       <p
//         className={`text-5xl font-bold ${
//           Theme === "dark" ? "text-WhiteTxt" : "text-VDBluePattern"
//         } transition-colors`}
//       >
//         {followers}
//       </p>
//       {/* Render the type of followers */}
//       <span
//         className={`text-xs leading-3 tracking-[3px] ${
//           Theme === "dark" ? "text-DBlue" : "text-DDBlue"
//         } transition-colors`}
//       >
//         {/* Display either "SUBSCRIBERS" or "FOLLOWERS" based on the number prop */}
//         {number === 3 ? "SUBSCRIBERS" : "FOLLOWERS"}
//       </span>
//       <div
//         className={`flex gap-1 py-3 ${
//           color === "green" ? "text-LimeGreen" : "text-BrightRed"
//         } items-center justify-center text-xs font-bold`}
//       >
//         <img
//           src={IconImageUrl}
//           alt=""
//           width={IconWidth}
//           height={IconHeight}
//         />
//         {/* Display the update information */}
//         <p>{update} Today</p>
//       </div>
//     </button>
//   );
// };

// export default FollowersCard;

type Theme = "dark" | "light"; // Define a type "Theme" with two possible values: "dark" or "light"

interface FollowersCardProps {
  user: string;
  followers: number | string;
  update: string;
  color: "green" | "red";
  IconImageUrl: string;
  IconWidth: number;
  IconHeight: number;
  IconMediaUrl: string;
  MediaWidth: number;
  MediaHeight: number;
  number: number;
  Theme: Theme;
}

// Function to get the information about the icon for the given number
const getIconInfo = (number: number) => {
  // If the number is 0, return the information for the Facebook icon
  if (number === 0) {
    return {
      alt: "Facebook Icon",
      line: "facebook_line",
    };
  } // If the number is 1, return the information for the Twitter icon
  else if (number === 1) {
    return {
      alt: "Twitter Icon",
      line: "twitter_line",
    };
  } // If the number 2, return the information for the Instagram icon
  else if (number === 2) {
    return {
      alt: "Instagram Icon",
      line: "instagram_line",
    };
  } // Otherwise, return the information for the Youtube icon
  else {
    return {
      alt: "Youtube Icon",
      line: "youtube_line",
    };
  }
};

const FollowersCard: React.FC<FollowersCardProps> = ({
  user,
  followers,
  update,
  color,
  IconImageUrl,
  IconWidth,
  IconHeight,
  IconMediaUrl,
  MediaWidth,
  MediaHeight,
  number,
  Theme,
}) => {
  // Get the alt text and CSS class for the icon based on the number prop
  const { alt, line } = getIconInfo(number);

  // Generate the dynamic class name for the card based on the theme and number prop
  const cardColor = `relative rounded ${
    Theme === "dark"
      ? "bg-DDBlue hover:bg-DBlue/25"
      : "bg-LGBlue hover:bg-DGBlue/25"
  } ${line} p-3 text-center transition-colors overflow-hidden`;

  // Determine the text color classes based on the theme and update color
  const userTextColor = Theme === "dark" ? "text-DBlue" : "text-DDBlue";
  const followersTextColor =
    Theme === "dark" ? "text-WhiteTxt" : "text-VDBluePattern";
  const updateTextColor =
    color === "green" ? "text-LimeGreen" : "text-BrightRed";

  return (
    <button className={cardColor}>
      {/* Render the icon and user's name */}
      <div className="flex items-center justify-center gap-2 pb-3 pt-4">
        <img
          src={IconMediaUrl}
          alt={alt}
          width={MediaWidth}
          height={MediaHeight}
        />
        <h2 className={`${userTextColor} text-xs font-bold transition-colors`}>
          {user}
        </h2>
      </div>
      {/* Render the number of followers */}
      <p
        className={`${followersTextColor} text-5xl font-bold transition-colors`}
      >
        {followers}
      </p>
      {/* Render the type of followers */}
      <span
        className={`${userTextColor} text-xs leading-3 tracking-[3px] transition-colors`}
      >
        {number === 3 ? "SUBSCRIBERS" : "FOLLOWERS"}
      </span>
      {/* Render the update information */}
      <div
        className={`${updateTextColor} flex gap-1 py-3 items-center justify-center text-xs font-bold`}
      >
        <img src={IconImageUrl} alt="" width={IconWidth} height={IconHeight} />
        <p>{update} Today</p>
      </div>
    </button>
  );
};

export default FollowersCard;
