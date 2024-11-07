import React from "react";
import { Box, Flex } from "@radix-ui/themes";
import { StarFilledIcon } from "@radix-ui/react-icons";


interface SkillsLevelProps {
  starCount: number;
}

export const SkillsLevel: React.FC<SkillsLevelProps> = ({ starCount }) => {
  const fullStars = Math.floor(starCount);
  const hasHalfStar = starCount % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Flex className="ml-auto">
      {Array.from({ length: fullStars }).map((_, index) => (
        <StarFilledIcon key={`full-${index}`} className="text-primary w-3.5 h-3.5"  />
      ))}

      {hasHalfStar && (
        <Box className="relative" key="half">
          <StarFilledIcon className="text-gray-300 w-3.5 h-3.5"  />
          <Box className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <StarFilledIcon className="text-primary w-3.5 h-3.5"  />
          </Box>
        </Box>
      )}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <StarFilledIcon key={`empty-${index}`} className="text-gray-300 w-3.5 h-3.5"  />
      ))}
    </Flex>
  );
};
