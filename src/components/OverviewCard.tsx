// interface OverviewCardProps {
//   title: string;
//   number: number;
//   percent: string;
//   color: "green" | string;
//   MediaIcon: string;
//   MediaWidth: number;
//   MediaHeight: number;
//   ArrowIcon: string;
//   ArrowWidth: number;
//   ArrowHeight: number;
//   index: number;
//   Theme: "dark" | string;
// }

// const getAlts = (number: number): string => {
//   if (number === 0) {
//     return "Facebook Icon";
//   } else if (number === 1) {
//     return "Twitter Icon";
//   } else if (number === 2) {
//     return "Instagram Icon";
//   } else {
//     return "Youtube Icon";
//   }
// };

// const OverviewCard: React.FC<OverviewCardProps> = ({
//   title,
//   number,
//   percent,
//   color,
//   MediaIcon,
//   MediaWidth,
//   MediaHeight,
//   ArrowIcon,
//   ArrowWidth,
//   ArrowHeight,
//   index,
//   Theme,
// }) => {
//   return (
//     <button
//       className={`rounded ${
//         Theme === "dark"
//           ? "bg-DDBlue hover:bg-DBlue/25" // Apply dark theme styles
//           : "bg-LGBlue hover:bg-DGBlue/30" // Apply light theme styles
//       } p-5 transition-colors`}
//     >
//       <div className="flex items-center justify-between">
//         <h3
//           className={`text-sm font-bold ${
//             // Apply text color based on theme
//             Theme === "dark" ? "text-DBlue" : "text-DGBlue"
//           } transition-colors`}
//         >
//           {title}
//         </h3>
//         <img
//           src={MediaIcon}
//           alt={getAlts(index)}
//           width={MediaWidth}
//           height={MediaHeight}
//         />
//       </div>
//       <div className="flex items-end justify-between pt-3">
//         <p
//           className={`text-3xl font-bold ${
//             // Apply text color base on theme
//             Theme === "dark" ? "text-WhiteTxt" : "text-VDBluePattern"
//           } transition-colors`}
//         >
//           {number}
//         </p>
//         <span
//           className={`flex gap-1 ${
//             // Apply text color based on the color prop
//             color === "green" ? "text-LimeGreen" : "text-BrightRed"
//           } items-center text-xs font-bold`}
//         >
//           <img
//             src={ArrowIcon}
//             alt=""
//             width={ArrowWidth}
//             height={ArrowHeight}
//           />
//           {percent}
//         </span>
//       </div>
//     </button>
//   );
// };

// export default OverviewCard;

interface OverviewCardProps {
  title: string;
  number: number;
  percent: string;
  color: "green" | string;
  MediaIcon: string;
  MediaWidth: number;
  MediaHeight: number;
  ArrowIcon: string;
  ArrowWidth: number;
  ArrowHeight: number;
  index: number;
  Theme: "dark" | string;
}

const getAlts = (number: number): string => {
  if (number === 0) {
    return "Facebook Icon";
  } else if (number === 1) {
    return "Twitter Icon";
  } else if (number === 2) {
    return "Instagram Icon";
  } else {
    return "Youtube Icon";
  }
};

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  number,
  percent,
  color,
  MediaIcon,
  MediaWidth,
  MediaHeight,
  ArrowIcon,
  ArrowWidth,
  ArrowHeight,
  index,
  Theme,
}) => {
  // Determite the appropriate CSS classes based on the theme and color props
  const cardColor =
    Theme === "dark"
      ? "bg-DDBlue hover:bg-DBlue/25"
      : "bg-LGBlue hover:bg-DGBlue/25";
  const titleTextColor = Theme === "dark" ? "text-DBlue" : "text-DGBlue";
  const numberTextColor =
    Theme === "dark" ? "text-WhiteTxt" : "text-VDBluePattern";
  const percentTextColor =
    color === "green" ? "text-LimeGreen" : "text-BrightRed";

  return (
    <button className={`${cardColor} rounded p-5 transition-colors`}>
      <div className="flex items-center justify-between">
        <h3 className={`${titleTextColor} text-sm font-bold transition-colors`}>
          {/* Render the title */}
          {title}
        </h3>
        <img
          src={MediaIcon}
          alt={getAlts(index)} // Set the alt text based on the index using the getAlts function
          width={MediaWidth}
          height={MediaHeight}
        />
      </div>
      <div className="flex items-end justify-between pt-3">
        <p
          className={`${numberTextColor} text-3xl font-bold transition-colors`}
        >
          {/* Render the number */}
          {number}
        </p>
        <span
          className={`${percentTextColor} flex gap-1 items-center text-xs font-bold`}
        >
          <img src={ArrowIcon} alt="" width={ArrowWidth} height={ArrowHeight} />
          {/* Render the percentage value */}
          {percent}
        </span>
      </div>
    </button>
  );
};

export default OverviewCard;
